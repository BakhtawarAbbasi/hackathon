import Stripe from "stripe";
import { client } from "@/sanity/lib/client"; 

// Initialize Stripe with  secret key
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { cartItems, total, formValues } = req.body;

      const lineItems = cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productName,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.inventory,
      }));

      // Create a Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      // Save the order data to Sanity
      const orderData = {
        _type: "order",
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        address: formValues.address,
        city: formValues.city,
        zipCode: formValues.zipCode,
        email: formValues.email,
        phone: formValues.phone,
        cartItems: cartItems.map((item) => ({
          _type: "reference",
          _ref: item._id,
        })),
        total: total,
        orderDate: new Date().toISOString(), // Add current date and time
      };

      await client.create(orderData); // Save the order to Sanity

      // Return the session ID to the client
      res.status(200).json({ id: session.id });
    } catch (err) {
      console.error("Error creating Stripe Checkout Session:", err);
      res.status(500).json({ error: "Failed to create Stripe Checkout Session" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}