import { Button } from "@/components/ui/button";
import Link from "next/link";

const Links = ({ title, link }) => {
  return (
    <li className="w-full">
      <Button variant="link" className="w-full">
        <Link  href={link}>
          {title}
        </Link>
      </Button>
    </li>
  );
};

const NavBarMobile = () => {
  const links = [
{ name: "Dashboard", link: "/dashboard" },
  { name: "Login", link: "/login" },
  ];

  return (
    <div>
      <ul className="flex flex-wrap gap-4">
        {links.map((h) => (
          <Links title={h.name} link={h.link} key={h.link}/>
        ))}
      </ul>
    </div>
  );
};

export default NavBarMobile;
