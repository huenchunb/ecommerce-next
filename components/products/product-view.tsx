import { Product, Category } from "@/sanity.types";
import ProductGrid from "./product-grid";

export default function ProductView({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
