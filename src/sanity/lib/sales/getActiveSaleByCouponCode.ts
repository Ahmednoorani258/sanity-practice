import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCodes";
import { sanityFetch } from "../live";

export default async function GetActiveSaleByCouponCode(couponCode:CouponCode) {
    const ACTIVE_SALE_QUERY = defineQuery(`
        *[_type == "salesType" && isActive == true && couponCode ==  $couponCode ] | order(validFrom desc)[0]
        `);

        try{
            const activeSale = await sanityFetch({query:ACTIVE_SALE_QUERY, params:{couponCode}})

            return activeSale? activeSale.data : null;
        }catch(error){
            console.error("error fetching Coupon Code " + error);
            return null
        }
}