import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Athlete training" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/70" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="text-primary font-heading text-lg tracking-widest mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        TRANSFORM YOUR BODY
      </p>
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        FORGE YOUR <span className="fire-text">LEGACY</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
        Push beyond your limits. Build strength, discipline, and the body you've always wanted.
      </p>
      <a
        href="#membership"
        className="inline-block fire-gradient text-primary-foreground font-heading text-lg tracking-wider px-10 py-4 rounded-lg animate-pulse-glow hover:scale-105 transition-transform opacity-0 animate-fade-up"
        style={{ animationDelay: "0.7s" }}
      >
        JOIN NOW
      </a>
    </div>
  </section>
);

export default HeroSection;
