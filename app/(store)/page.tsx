import ProductView from "@/components/products/product-view";
import BlackFridayBanner from "@/components/sales/blackfriday-banner";
import { getAllCategories } from "@/sanity/lib/querys/categories/getAllCategories";
import { getAllProducts } from "@/sanity/lib/querys/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div>
      <BlackFridayBanner />

      <div className="flex flex-col items-center justify-top min-h-screen bg-neutral-100 p-4">
        <ProductView products={products} categories={categories} />
      </div>
    </div>
  );
}
