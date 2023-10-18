"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BestSellingCard = ({ id, name, description, price, img }) => {
  const router = useRouter();
  return (
    <Card
      className="cursor-pointer col-span-1 p-0"
      onClick={() => router.push(`/`)}
      key={id}
    >
      <CardHeader className="p-0 pb-4">
        <Image
          src={`${img}`}
          width={1260}
          height={750}
          alt={name}
          className="w-full h-52 object-cover rounded-t-md"
        />
      </CardHeader>
      <CardContent>
        <h1 className="font-bold text-lg">{name}</h1>
        <span className="text-gray-400">{description}</span>
        <hr className="my-1" />
        <span>${price}</span>
      </CardContent>
    </Card>
  );
};

export default BestSellingCard;
