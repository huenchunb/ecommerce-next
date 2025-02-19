import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";


export const saleType = defineType({
    name: "sale",
    title: "Sale",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name:"discountAmount",
            title: "Discount Amount",
            type: "number",
            description: "Enter the amount of discount to be applied in percentage or fixed amount",
            validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
            name: "startDate",
            title: "Start Date",
            type: "datetime",
            description: "Enter the start date of the sale",
        }),
        defineField({
            name: "endDate",
            title: "End Date",
            type: "datetime",
            description: "Enter the end date of the sale",
        }),
        defineField({
            name: "couponCode",
            title: "Coupon Code",
            type: "boolean",
        }),
        defineField({
            name: "isActive",
            title: "Is Active",
            type: "boolean",
            description: "Toggle to activate or deactivate the sale",
            initialValue: true,
        }),    
    ],
    preview: {
        select: {
            title: "title",
            discountAmount: "discountAmount",
            couponCode: "couponCode",
            isActive: "isActive",
        },
        prepare(select) {
            const {title, discountAmount, couponCode, isActive} = select;
            const status = isActive ? "Active" : "Inactive";
            return {
                title,
                subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`,
            };
        },
    },
})