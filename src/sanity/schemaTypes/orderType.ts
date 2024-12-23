import { BasketIcon } from "@sanity/icons";
import { defineType, defineField, defineArrayMember } from "sanity";

export const orderType = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'StripCheckoutSessionId',
            title: 'Strip Checkout Session Id',
            type: 'string',
        }),
        defineField({
            name:'stripeCustomerId',
            title: 'Stripe Customer Id',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'products',
            title: 'Products',
            type: 'array',
            of:[
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'product',
                            title: 'Product',
                            type: 'reference',
                            to: [{ type: 'product' }],
                        }),
                        defineField({
                            name: 'quantity',
                            title: 'Quantity',
                            type: 'number',
                        }),
                    ],
                    preview: {
                        select: {
                            product: 'product.name',
                            quantity: 'quantity',
                            image: 'product.image',
                            price: 'product.price',
                            currency: 'product.currency',
                        },
                        prepare({ product, quantity, image, price, currency }) {
                            return {
                                title: product,
                                subtitle: `${quantity} x ${price}${currency}`,
                                media: image,
                            }
                        }
                    }
                })
            ]
        }),
        defineField({
            name: 'total',
            title: 'Total',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'currency',
            title: 'Currency',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'amountDiscounted',
            title: 'Amount Discounted',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Paid', value: 'paid' },
                    { title: 'Shipped', value: 'shipped' },
                    { title: 'Delivered', value: 'delivered' },
                    { title: 'Cancelled', value: 'cancelled' },
                ],
            },
        }),
        defineField({
            name:'orderDate',
            title: 'Order Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
            name: 'customerName',
            amount: 'total',
            currency: 'currency',
            orderId: 'orderNumber',
            email: 'email',
        },
        prepare({ name, amount, currency, orderId, email }) {
            const orderIdsnippet = `${orderId.slice(0, 5)}...${orderId.slice(-5)}`; ;
            return {
                title: `${name}      ${orderIdsnippet}`,
                subtitle: `${amount}${currency} , ${email}`,
                media: BasketIcon,
            }
        }
    },

})