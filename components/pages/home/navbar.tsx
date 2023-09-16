"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NavBarMobile from "./navbar_mobile";
import Link from "next/link";
import { userStore } from "@/state/user";

const Links = ({ title, link }) => {
  return (
    <li>
      <Button variant="link">
        <Link href={link}>{title}</Link>
      </Button>
    </li>
  );
};

const NavBar = () => {
   const [mobile, setMobile] = useState(false);
  const links = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Login", link: "/login" },
  ];
  return (
    <>
      <div className="w-full container py-3">
        <div className="w-full items-center justify-between flex flex-row">
          <div className="w-full flex items-center">
            <Link href="/" className="text-2xl font-extrabold">
              Maliki
            </Link>
            <ul className="hidden md:flex ml-4">
              {links.map((h) => 
                (<Links title={h.name} link={h.link} key={h.name} />
            ) )}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Button>CART</Button>
            <Button
              onClick={() => setMobile(!mobile)}
              className="flex flex-wrap md:hidden"
            >
              ■
            </Button>
          </div>
        </div>
      </div>
      {mobile && <NavBarMobile />}
    </>
  );
};

export default NavBar;
