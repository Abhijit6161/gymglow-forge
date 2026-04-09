import { Egg, Salad, Cookie, Utensils, Droplets } from "lucide-react";

const meals = [
  { meal: "Breakfast", icon: Egg, items: ["Oatmeal with berries & nuts", "4 egg whites + 1 whole egg", "Black coffee or green tea"], time: "7:00 AM" },
  { meal: "Lunch", icon: Salad, items: ["Grilled chicken breast (200g)", "Brown rice + steamed veggies", "Mixed green salad"], time: "12:30 PM" },
  { meal: "Snacks", icon: Cookie, items: ["Protein shake with banana", "Greek yogurt with almonds", "Peanut butter on whole wheat"], time: "4:00 PM" },
  { meal: "Dinner", icon: Utensils, items: ["Grilled salmon or lean beef", "Sweet potato or quinoa", "Sautéed spinach & broccoli"], time: "7:30 PM" },
  { meal: "Hydration", icon: Droplets, items: ["Minimum 3-4 liters daily", "Electrolytes during workouts", "Avoid sugary drinks"], time: "All Day" },
];

const DietPlan = () => (
  <section id="diet" className="py-24 px-4 bg-secondary/30">
    <div className="container mx-auto">
      <h2 className="section-heading">Diet <span className="fire-text">Plan</span></h2>
      <p className="section-subheading">Fuel your body right. Nutrition is 80% of your results.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {meals.map((m, i) => (
          <div key={m.meal} className="glass-card hover:border-accent/50 transition-all duration-300 opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex items-center gap-3 mb-4">
              <m.icon className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-heading text-lg font-bold">{m.meal}</h3>
                <span className="text-xs text-muted-foreground">{m.time}</span>
              </div>
            </div>
            <ul className="space-y-2">
              {m.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DietPlan;
