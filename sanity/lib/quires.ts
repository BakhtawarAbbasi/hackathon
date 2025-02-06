import { groq} from "next-sanity";
import { client } from "./client";

export const allProducts = groq`*[_type == "product"]`;
export const four = groq `*[_type == "product"] [0..2]`



// export async function getProducts() {
//     const query = `*[_type=="product"]`;
//     const products = (await client.fetch(query)) as [];
//     return products.map((product) => prepareProduct(product));
//   }

// function prepareProduct(product: never): any {
//     throw new Error("Function not implemented.");
// }
