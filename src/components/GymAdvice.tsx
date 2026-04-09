import { CheckCircle2 } from "lucide-react";

const advice = [
  { title: "Stay Consistent", desc: "Results come from showing up daily. Even a bad workout beats no workout. Build the habit first, then refine." },
  { title: "Prioritize Sleep", desc: "Your muscles grow while you rest. Aim for 7-9 hours of quality sleep every night for optimal recovery." },
  { title: "Stay Hydrated", desc: "Dehydration kills performance. Drink water before, during, and after training. Your body is 60% water—fuel it." },
  { title: "Discipline Over Motivation", desc: "Motivation fades. Discipline stays. Create a schedule and treat the gym like a non-negotiable appointment." },
];

const GymAdvice = () => (
  <section id="advice" className="py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="section-heading">Gym <span className="fire-text">Advice</span></h2>
      <p className="section-subheading">The principles that separate those who succeed from those who quit.</p>
      <div className="space-y-5">
        {advice.map((a, i) => (
          <div key={a.title} className="glass-card flex gap-5 items-start hover:border-primary/40 transition-all opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
            <CheckCircle2 className="w-7 h-7 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading text-xl font-bold mb-1">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GymAdvice;
