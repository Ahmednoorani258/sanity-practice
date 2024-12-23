import { Product } from "../.././sanity.types";


interface ProductsViewProps {
  products: Product[];
}

export default function ProductsView({ products }: ProductsViewProps) {
  return <div>ProductsView</div>;
}
