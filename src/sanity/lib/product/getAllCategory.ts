import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategories = async () => {
    const ALL_CATEGORIES_QUERY = defineQuery(`
        *[_type == "category" ] | order(name asc)

        `)
        try {
            const category = await sanityFetch({query:ALL_CATEGORIES_QUERY,})

            return category.data || [];
        } catch (error) {
            console.error("error fetching all products " + error);
            return []
        }
}