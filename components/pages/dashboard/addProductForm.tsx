"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addProduct } from "@/lib/pocketbase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const sleep = <T extends any>(delay: number, resolveValue?: T): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(resolveValue), delay);
  });

export default function addForm() {
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    
    createProduct.mutate(data);
    
  };
   const createProduct = useMutation({
    mutationFn: (product) => {
      return addProduct(product);
    },onSuccess: () => {
    reset();
    return queryClient.invalidateQueries({ queryKey: ['products'] })
    
      },
  });
  return (
    <form
      className="md:mx-28 flex flex-wrap gap-6 lg:mx-36"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder="Product Name"
        {...register("name", { required: true })}
      />
      <Input
        placeholder="Product Description"
        {...register("description", { required: true })}
      />
      <Input
        placeholder="Product Image Url"
        type="url"
        {...register("img", { required: true })}
      />
      <Input
        placeholder="Product Price"
        type="number"
        {...register("price", { required: true })}
      />

      {errors.productName ? (
        <span className="text-red-600">There is Error!</span>
      ) : (
        ""
      )}
      <Button disabled={isSubmitting} type="submit">
        Create
      </Button>

      {createProduct.isSuccess ? (
        <h1 className="text-red-600 font-bold italic">Added successfully!</h1>
      ) : (
        ""
      )}
    </form>
  );
}
