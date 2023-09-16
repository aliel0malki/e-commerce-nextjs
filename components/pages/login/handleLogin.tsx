"use client";
import { db } from "@/lib/pocketbase";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { userStore } from "@/state/user";
// import useStore from "@/state/useStore";

export default function HandleLogin() {
  const setUser = userStore((state) => state.setUser);
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const authData = await db
        .collection("customers")
        .authWithOAuth2({ provider: "google" });
      setUser(authData);
      console.log("USER SAVED IN STATE");
      router.push("/dashboard");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="w-full h-screen flex place-items-center justify-center">
      <Button onClick={handleLogin}>Login with Google</Button>
    </div>
  );
}
