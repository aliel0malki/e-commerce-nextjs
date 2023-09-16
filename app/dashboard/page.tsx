"use client";
import AddForm from "@/components/pages/dashboard/addProductForm";
import Link from "next/link";
import { db } from "@/lib/pocketbase";
import useStore from "@/lib/useStore";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { userStore } from "@/state/user";

const Dashboard = () => {
  const user = useStore(userStore, (state) => state.user);
  const clearUser = userStore((state) => state.clearUser);

  useEffect(() => {
    if (user == null) {
      db.authStore.clear();
    }

  }, [user]);

  return (
    <>
      {user ? (
        <div  className="container mt-16">
          Move to <Link href="/">Home</Link>
          <h1>username : {user?.meta?.name ?? ""}</h1>
          <Button onClick={() => clearUser()}>LOGOUT</Button>
          <h1 className="text-2xl font-bold my-6">ADD NEW PRODUCT</h1>
          <AddForm />
        </div>
      ) : (
        <Link
          href="/login"
          className="flex text-center my-16 w-full justify-center font-bold"
        >
          Login to enable Dashboard
          <br /> CLICK HERE TO GO /LOGIN PAGE
        </Link>
      )}
    </>
  );
};

export default Dashboard;
