import Hero from "@/components/pages/home/hero";
import BestSelling from "@/components/pages/home/products/best-selling";

export default function Home() {
  // const initialData = await getAllProducts();
   return (
    <div>
      <Hero />
      <BestSelling />
    </div>
  );
}
