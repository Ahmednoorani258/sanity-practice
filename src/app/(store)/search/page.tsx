
import React from "react";
import SearchProductByName from "@/sanity/lib/product/SearchProductByName";
import ProductGrid from "@/components/ProductGrid";
async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = await searchParams;
  const product = await SearchProductByName(query);
  
  if(!product.length){
    return(
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4 ">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
             <h1 className="text-3xl font-bold mb-6 text-center">
              No Products Found for: {query}
              </h1> 
              <p className="text-gray-600 text-center">
                Try Searching with different keyword
              </p>

          </div>
        </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white  p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center"> SearchPage for {query}</h1>        
        <ProductGrid products={product} />
      </div>

    </div>
  );
}

export default SearchPage;
