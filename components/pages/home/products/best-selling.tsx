"use client";
import Card from "./best_card";
import { getAllProducts } from "@/lib/pocketbase";
import { useQuery } from "@tanstack/react-query";

const BestSelling = () => {
	
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
   if (isLoading) return <h1>Loading....</h1>;
  console.log(data);
  return (
    <div className="container mt-24">
      <h1 className="font-bold text-2xl m-2">ALL PRODUCTS</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
