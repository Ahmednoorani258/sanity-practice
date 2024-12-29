import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsBySlug = async (slug: string) => {
  if (!slug) {
    console.error("Invalid slug provided");
    return null; // Handle invalid slug case
  }

  console.log("Provided slug: ", slug); // Debugging log to check the slug value

  const PRODUCTS_BY_ID_QUERY = defineQuery(`
    *[_type == "product" && slug.current == $slug] | order(name asc) [0]
  `);

  try {
    const product = await sanityFetch({
      query: PRODUCTS_BY_ID_QUERY,
      params: { slug }, // Pass the valid slug
    });

    return product.data || null; // Return `null` if no product is found
  } catch (error) {
    console.error("Error fetching product by slug: ", error);
    return null;
  }
};
