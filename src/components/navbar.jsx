import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets";
import {
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  User,
  X,
} from "lucide-react";
import { navClass } from "../styles/style";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { navLinks } from "@/data/navigation";
import { categories } from "@/data/categories";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const {t} = useTranslation()

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const iconButtonClass =
    "hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] cursor-pointer";

  return (
    <nav className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-background)] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${iconButtonClass} lg:hidden`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>

            <img src={Logo} alt="nivela" className="w-38 h-auto" />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.key === "categories" ? (
                <div key={link.path} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  >
                    {t(`nav.${link.key}`)}
                  </Button>

                  {isCategoriesOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 z-50 border-[var(--color-surface)]
                  top-full  mt-4 w-56 rounded-xl border bg-[var(--color-background)] p-2 shadow-xl"
                    >
                      {categories.map((category) => (
                        <NavLink
                          onClick={() => setIsCategoriesOpen(false)}
                          key={category}
                          to={`/categories/${category.toLowerCase().replaceAll(" ", "-")}`}
                          className={`block rounded-lg px-4 py-2.5 text-sm hover:bg-[var(--color-surface)]
                      transition-colors hover:text-[var(--color-primary)]`}
                        >
                          {category}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  onClick={() => setIsCategoriesOpen(false)}
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `${navClass} ${isActive ? "after:scale-x-100 text-[var(--color-primary)]" : ""}`
                  }
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ),
            )}
          </div>
          <div className="flex items-center gap-[18px]">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={iconButtonClass}
              >
                <Search size={21} />
              </Button>

              {isSearchOpen && (
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-48"
                />
              )}
            </div>

            <Link to="/wishlist" className="hidden md:block">
              <Button variant="ghost" size="icon" className={iconButtonClass}>
                <Heart size={21} />
              </Button>
            </Link>

            <Link to="/cart">
              <div className="relative">
                <Button variant="ghost" size="icon" className={iconButtonClass}>
                  <ShoppingBag size={21} />
                </Button>
                <span
                  className="absolute -right-1 -top-0  h-4 min-w-4 flex items-center justify-center rounded-full
            bg-[var(--color-primary)] px-0 text-[10px] text-white"
                >
                  0
                </span>
              </div>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`${iconButtonClass} hidden md:flex`}
            >
              {isDark ? <Sun size={21} /> : <Moon size={21} />}
            </Button>

            <Link to="/account" className="hidden md:block">
              <Button variant="ghost" size="icon" className={iconButtonClass}>
                <User size={21} />
              </Button>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col lg:hidden mt-4 gap-1 border-t border-[var(--color-surface)] pt-4">
            {navLinks.map((link) =>
              link.key === "categories" ? (
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className="w-full justify-between"
                  >
                    {t(`nav.${link.key}`)}
                    <span>{isCategoriesOpen ? "-" : "+"}</span>
                  </Button>

                  {isCategoriesOpen && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-[var(--color-surface)] pl-4">
                      {categories.map((category) => (
                        <NavLink
                          key={category}
                          to={`/categories/${category.toLowerCase().replaceAll(" ", "-")}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsCategoriesOpen(false);
                          }}
                          className={({ isActive }) =>
                            `rounded-lg px-3 py-2.5 text-sm transition-colors
  hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]
  ${isActive ? "bg-[var(--color-surface)] text-[var(--color-primary)]" : ""}`
                          }
                        >
                          {category}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`block rounded-lg py-4 text-sm hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]
                transition-colors`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsCategoriesOpen(false);
                  }}
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ),
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
