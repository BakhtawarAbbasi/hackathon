import { useEffect } from "react";
import Swal from "sweetalert2";

export default function CancelPage() {
  useEffect(() => {
    Swal.fire("Cancelled", "Your payment was cancelled.", "error");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800">Payment Cancelled</h1>
    </div>
  );
}
