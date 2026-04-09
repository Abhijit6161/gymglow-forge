const schedule = [
  { day: "Monday", focus: "Chest & Triceps", exercises: ["Bench Press 4×10", "Incline Dumbbell Press 3×12", "Cable Flyes 3×15", "Tricep Dips 3×12", "Skull Crushers 3×10"], color: "bg-primary" },
  { day: "Tuesday", focus: "Back & Biceps", exercises: ["Deadlifts 4×8", "Pull-Ups 4×10", "Barbell Rows 3×12", "Hammer Curls 3×12", "Face Pulls 3×15"], color: "bg-accent" },
  { day: "Wednesday", focus: "Legs & Abs", exercises: ["Squats 4×10", "Leg Press 3×12", "Lunges 3×12 each", "Leg Curls 3×15", "Planks 3×60s"], color: "bg-primary" },
  { day: "Thursday", focus: "Shoulders & Traps", exercises: ["Overhead Press 4×10", "Lateral Raises 4×15", "Front Raises 3×12", "Shrugs 4×15", "Rear Delt Flyes 3×15"], color: "bg-accent" },
  { day: "Friday", focus: "Arms & Core", exercises: ["Barbell Curls 4×10", "Tricep Pushdowns 4×12", "Concentration Curls 3×12", "Cable Crunches 3×20", "Russian Twists 3×20"], color: "bg-primary" },
  { day: "Saturday", focus: "Cardio & HIIT", exercises: ["30 min running or cycling", "Burpees 4×15", "Jump Squats 4×15", "Mountain Climbers 3×30", "Cool-down stretches"], color: "bg-accent" },
  { day: "Sunday", focus: "Rest & Recovery", exercises: ["Light stretching", "Foam rolling", "Yoga or mobility work", "Meal prep", "8+ hours sleep"], color: "bg-muted" },
];

const WeeklyRoutine = () => (
  <section id="routine" className="py-24 px-4">
    <div className="container mx-auto">
      <h2 className="section-heading">Weekly <span className="fire-text">Routine</span></h2>
      <p className="section-subheading">A structured 7-day program designed for maximum gains.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {schedule.map((d, i) => (
          <div key={d.day} className="glass-card hover:border-primary/40 transition-all duration-300 opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${d.color}`} />
              <div>
                <h3 className="font-heading text-lg font-bold">{d.day}</h3>
                <span className="text-xs text-primary tracking-wider">{d.focus}</span>
              </div>
            </div>
            <ul className="space-y-1.5">
              {d.exercises.map((ex) => (
                <li key={ex} className="text-sm text-muted-foreground">• {ex}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WeeklyRoutine;
