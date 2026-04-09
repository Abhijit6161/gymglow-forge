import { Dumbbell } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-heading text-lg font-bold">
        <Dumbbell className="w-5 h-5 text-primary" />
        <span className="fire-text">IRONFORGE</span>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 IronForge Gym. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
