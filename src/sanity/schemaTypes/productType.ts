import { defineField ,defineType} from "sanity";
import { TrolleyIcon } from "@sanity/icons";
import { title } from "process";

export const productType=defineType({
    name: 'product',
    title: 'Products',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name:'category',
            title: 'Category',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}]
        }),
        defineField({
            name: 'stock',
            title: 'Stock',
            type: 'number',
            validation: Rule => Rule.required()
        }),
    ],
    preview:{
        select:{
            title: 'name',
            media: 'image',
            price: 'price'
        },
        prepare(selection){
            return {
                title: selection.title,
                media: selection.media,
                subtitle: `$${selection.price}`
            }
        }
    }
})