import { COUPON_CODES } from "@/sanity/lib/querys/sales/couponCode";
import { getActiveSaleByCouponCode } from "@/sanity/lib/querys/sales/getActiveSaleByCouponCode";

export default async function BlackFridayBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY);

  if (!sale?.isActive) return null;

  return (
    <div className="bg-gradient-to-r from-neutral-900 to-neutral-700 text-white px-6 p-10 mx-4 mt-2 rounded-lg shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4">
            {sale.title}
          </h2>
          <p className="text-left text-2xl sm:text-3xl font-semibold mb-6">
            {sale.description}
          </p>
          <div className="flex">
            <div className="bg-white text-black py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
              <span className="font-bold text-sm sm:text-xl">
                Usa el código{" "}
                <span className="text-rose-600">{sale.couponCode}</span> para un{" "}
                {sale.discountAmount}% de descuento
              </span>
              <p className="text-xs underline text-neutral-500">
                Por compras superiores a $30.000 pesos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
