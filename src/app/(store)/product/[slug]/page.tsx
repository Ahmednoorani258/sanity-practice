import { notFound } from "next/navigation";
import { getProductsBySlug } from "@/sanity/lib/product/getAllProductsBySlug";
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product:any = await getProductsBySlug(slug);
  console.log(product);
  const isOutOfStock = product.stock != null && product.stock <= 0;


  if (!product) {
    return notFound(); // Handle not found case
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`relative aspect-square overflow-hidden rounded-lg shadow-lg `}>

        </div>

      </div>
    </div>
  )
}
