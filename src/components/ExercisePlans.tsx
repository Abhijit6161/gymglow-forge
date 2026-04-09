import { Dumbbell, HeartPulse, Target, TrendingUp, Zap, Activity } from "lucide-react";

const exercises = [
  { name: "Push-Ups", desc: "Build chest, shoulders & triceps with bodyweight mastery.", icon: Zap, sets: "4 × 15-20" },
  { name: "Squats", desc: "King of lower body. Develop quads, glutes & core stability.", icon: TrendingUp, sets: "4 × 12-15" },
  { name: "Deadlifts", desc: "Full-body compound lift for raw strength and power.", icon: Dumbbell, sets: "4 × 8-10" },
  { name: "Bench Press", desc: "The ultimate chest builder for mass and strength.", icon: Target, sets: "4 × 8-12" },
  { name: "Pull-Ups", desc: "Build a wide, powerful back and strong biceps.", icon: Activity, sets: "4 × 8-12" },
  { name: "Cardio", desc: "Burn fat, boost endurance and improve heart health.", icon: HeartPulse, sets: "30-45 min" },
];

const ExercisePlans = () => (
  <section id="exercises" className="py-24 px-4">
    <div className="container mx-auto">
      <h2 className="section-heading">Exercise <span className="fire-text">Plans</span></h2>
      <p className="section-subheading">Master these foundational movements to build a complete physique.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((ex, i) => (
          <div key={ex.name} className="glass-card group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="w-12 h-12 rounded-lg fire-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ex.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">{ex.name}</h3>
            <p className="text-muted-foreground text-sm mb-3">{ex.desc}</p>
            <span className="text-xs font-medium text-primary tracking-wider">{ex.sets}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExercisePlans;
