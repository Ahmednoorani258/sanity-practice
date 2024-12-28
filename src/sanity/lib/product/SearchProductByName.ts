import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export default async function SearchProductByName(searchParam: string) {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[_type == "product" && name match $searchParam ] | order(name asc)
        `);

  try {
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: { searchParam: `${searchParam}` },
    });

    return products.data || [];
  } catch (error) {
    console.error("error fetching products by name " + error);
    return [];
  }
}
