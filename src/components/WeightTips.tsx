import { Shield, Clock, TrendingUp, Brain, Flame, Heart } from "lucide-react";

const tips = [
  { icon: Shield, title: "Perfect Your Form", desc: "Focus on proper technique before adding weight. Bad form leads to injury and limits your gains long-term." },
  { icon: Clock, title: "Progressive Overload", desc: "Gradually increase weight, reps, or sets each week. This is the #1 principle for building muscle." },
  { icon: TrendingUp, title: "Track Your Lifts", desc: "Keep a training log. You can't improve what you don't measure. Record weights, reps, and how you felt." },
  { icon: Brain, title: "Mind-Muscle Connection", desc: "Focus on the muscle you're working. Squeeze at the top of each rep for maximum muscle activation." },
  { icon: Flame, title: "Warm Up Properly", desc: "5-10 minutes of dynamic stretching and light sets before heavy lifting to prevent injuries." },
  { icon: Heart, title: "Rest Between Sets", desc: "60-90 seconds for hypertrophy, 2-3 minutes for strength. Don't rush—quality reps matter more." },
];

const WeightTips = () => (
  <section id="tips" className="py-24 px-4 bg-secondary/30">
    <div className="container mx-auto">
      <h2 className="section-heading">Weight Training <span className="fire-text">Tips</span></h2>
      <p className="section-subheading">Beginner-friendly guidance to help you lift smarter, not just harder.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((t, i) => (
          <div key={t.title} className="flex gap-4 glass-card hover:border-primary/40 transition-all opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="shrink-0 w-10 h-10 rounded-lg fire-gradient flex items-center justify-center mt-1">
              <t.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WeightTips;
