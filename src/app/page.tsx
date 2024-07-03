import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "./ProductCard";




export default function Home() {
  return (
    <main className="px-24 py-2">
      <div className="flex justify-between items-center">
        <h1>New Arrivals</h1>
        <Button asChild>
          <Link href="/new-product">Add New Product</Link>
        </Button>
      </div>
      <div>
        <ProductCard
          productId={3}
        />

      </div>
    </main >
  );
}
