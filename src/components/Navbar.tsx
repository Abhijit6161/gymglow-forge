import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Exercises", href: "#exercises" },
  { label: "Diet Plan", href: "#diet" },
  { label: "Weekly Routine", href: "#routine" },
  { label: "Tips", href: "#tips" },
  { label: "Advice", href: "#advice" },
  { label: "Join", href: "#membership" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2 font-heading text-2xl font-bold">
          <Dumbbell className="w-7 h-7 text-primary" />
          <span className="fire-text">IRONFORGE</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
