"use client";

import { Product } from "../../sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import ProductThumb from "./ProductThumb";

export default function ProductGrid({ products }: { products: Product[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {products &&
                products.map((product) => (
                    <AnimatePresence key={product._id}>
                        <motion.div
                            key={product._id}
                            layout
                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-center"
                        >
                            <ProductThumb product={product} />
                        </motion.div>
                    </AnimatePresence>
                ))}
        </div>
    );
}
