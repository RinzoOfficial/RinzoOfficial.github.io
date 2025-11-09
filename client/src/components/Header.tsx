import { Link, useLocation } from "wouter";
import { Database, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/features", label: "Функции" },
    { path: "/tools", label: "Инструменты" },
    { path: "/privacy", label: "Конфиденциальность" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container flex h-16 items-center justify-between px-6 md:px-12">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 hover-elevate rounded-md px-2 py-1 cursor-pointer">
            <Database className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RINZO SEARCH</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} data-testid={`link-nav-${item.label.toLowerCase()}`}>
              <Button
                variant={location === item.path ? "secondary" : "ghost"}
                size="sm"
                className="font-medium"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  className="w-full justify-start font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`button-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
