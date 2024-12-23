import { title } from "process";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
    name: 'salesType',
    title: 'Sales type',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Sale Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Sale Description',
            type: 'text',
        }),
        defineField({
            name: 'discountamount',
            title: 'Discount Amount',
            type: 'number',
            description: 'Enter the discount amount in percentage',
        }),
        defineField({
            name:'couponCode',
            type: 'string',
            title: 'Coupon Code',
        }),
        defineField({
            name: 'validFrom',
            title: 'Valid From',
            type: 'datetime',
        }),
        defineField({
            name:'validUntil',
            title: 'Valid Until',
            type: 'datetime',
        }),
        defineField({
            name:'isActive',
            type: 'boolean',
            title: 'Is Active',
            description: 'Toggle to activate or deactivate the sale',
            initialValue: true,
        }),
    ],
    preview:{
        select:{
            title: 'title',
            discountamount: 'discountamount',
            couponCode: 'couponCode',
            isActive: 'isActive',
        },
        prepare( { title, discountamount, couponCode, isActive }){
            const status =  isActive ? '🟢' : '🔴'
            return {
                title: title,
                subtitle: `${discountamount}% off with code: ${couponCode} - ${status}` 
            }

        }
    }
})