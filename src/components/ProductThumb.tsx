import Link from "next/link";
import { Product } from "../../sanity.types";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";

export default function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;
  return (
    <div>
      <Link
        href={`/product/${product.slug?.current}`}
        className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
      >
        <div className="relative w-full h-full aspect-square overflow-hidden">
          {product.image && (
            <Image
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              src={imageUrl(product.image).url()}
              alt={product.name || "Product Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw "
            />
          )}

          {isOutOfStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
              <span className="text-lg">Out Of Stock</span>
            </div>
          )}
        </div>
        <div className="p-4 ">
          <h2 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h2>
          <p>
            {product.description?  product.description : "description Not Avilible"}

          </p>
          <p className= "mt-2 text-lf font-bold text-gray-900">
            ${product.price?.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}
