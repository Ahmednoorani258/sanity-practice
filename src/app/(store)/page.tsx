
import {Button} from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/product/getallproducts";
import ProductsView from "@/components/ProductsVIew";
import { getAllCategories} from "@/sanity/lib/product/getAllCategory";
import SaleBanner from "@/components/SaleBanner";
export default async function Home() {

  const prducts = await getAllProducts()
  const categories = await getAllCategories()
  return (
    <div>
      <SaleBanner/>
      <div className="flex min-h-screen justify-top items-center flex-col bg-gray-100 p-4">
      <ProductsView products={prducts} category={categories} />
    </div>
    </div>
  );
}
