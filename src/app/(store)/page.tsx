
import {Button} from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/product/getallproducts";
import ProductsView from "@/components/ProductsVIew";

export default async function Home() {

  const prducts = await getAllProducts()
  return (
    <div className="flex min-h-screen justify-top items-center flex-col bg-gray-100 p-4">
      <div>Hello</div>
      <ProductsView products={prducts} />
    </div>
  );
}
