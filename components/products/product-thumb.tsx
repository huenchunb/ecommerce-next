import { Product } from "@/sanity.types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";

export default function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock === 0;
  console.log(isOutOfStock);

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border border-neutral-50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
    >
      <div className="relative aspect-square w-full h-fulloverflow-hidden">
        {product.image && (
          <Image
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            src={imageUrl(product.image).url()}
            alt={product.name || "Producto"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white font-bold text-lg">Agotado</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-neutral-800 ">
          {product.name}
        </h2>
        <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
          {product.description?.map((block) =>
            block._type === "block"
              ? block.children?.map((child) => child.text).join(" ")
              : ""
          )}
        </p>
        <h2 className="text-lg font-semibold text-neutral-800 ">
          ${product.price}
        </h2>
      </div>
    </Link>
  );
}
