import { notFound } from "next/navigation";
import { getProductsBySlug } from "@/sanity/lib/product/getAllProductsBySlug";
import Image from "next/image";
import {imageUrl} from "@/lib/imageUrl";
import { PortableText } from "next-sanity";



export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string}>;
}) {
  const { slug } = await params;
  const product = await getProductsBySlug(slug);
  console.log(product?.description);
  const isOutOfStock = product?.stock != null && product.stock <= 0;


  if (!product) {
    return notFound(); // Handle not found case
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}>
          {product.image && (
            <Image
              className="object-contain transition-transform duration-300 hover:scale-105"
              src={imageUrl(product.image).url()}
              alt={product.name || "Product Image"}
              fill
             
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h1 className="font-bold text-white">Out of Stock</h1>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="mb-4 font-semibold text-xl">
                ${product.price?.toFixed(2)}
            </div>
            <div className="prose max-w-none mb-6">
              
            {product.description?  product.description : "description Not Avilible"}

              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
