import { Product } from "@/types";
import Image from "next/image";

type ProductRendererProps = {
  value: Product;
};

export const ProductRenderer = ({ value }: ProductRendererProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={value.image}
        width={40}
        height={40}
        alt="Picture of the author"
      />
      <span>{value.name}</span>
    </div>
  );
};
