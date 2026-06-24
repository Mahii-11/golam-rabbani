import { NavLink } from "react-router";
import logo from "../assets/images/logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Research & Publications", path: "/research" },
  { label: "School of Leadership", path: "/leadership" },
  { label: "Digital Governance & AI", path: "/ai-lab" },
  { label: "Newsroom/Media", path: "/media" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="bg-navy">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <NavLink to="/" className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="NB Logo" className="h-11 w-11" />

          <div className="leading-tight">
            <p className="text-[13px] font-normal text-white">
              Dr. Golam Rabbani
            </p>

            <p className="text-[11px] font-semibold tracking-[0.12em] text-white">
              NAYAN BANGALEE
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-5 md:flex md:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap text-[12px] font-medium transition-colors ${
                  isActive
                    ? "border-b-2 border-gold pb-0.5 text-gold"
                    : "text-white/90 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 xl:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>
    </header>
  );
}