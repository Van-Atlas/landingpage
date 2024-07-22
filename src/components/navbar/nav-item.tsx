import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const NavItems = () => (
  <>
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
      >
        {item.name}
      </Link>
    ))}
  </>
);

export default NavItems;
