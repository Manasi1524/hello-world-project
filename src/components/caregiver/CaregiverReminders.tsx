import { useState } from "react";
import { mockReminders } from "@/data/mockData";
import { Clock, Plus, Check, X, Pill, Droplets, Calendar } from "lucide-react";

const typeIcons = {
  medicine: Pill,
  hydration: Droplets,
  appointment: Calendar,
};

const CaregiverReminders = () => {
  const [reminders] = useState(mockReminders);
  const completed = reminders.filter(r => r.status === "completed").length;
  const rate = Math.round((completed / reminders.length) * 100);

  return (
    <div className="lucidia-card h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-foreground" />
          <h2 className="text-lg font-heading font-bold text-foreground">Reminders</h2>
        </div>
        <button className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
          <Plus className="w-3 h-3" /> Add
        </button>
      </div>

      <div className="mb-4 p-3 rounded-xl bg-muted/50">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted-foreground">Today's completion</span>
          <span className="font-semibold text-foreground">{rate}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${rate}%` }} />
        </div>
      </div>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {reminders.map(reminder => {
          const Icon = typeIcons[reminder.type as keyof typeof typeIcons];
          return (
            <div key={reminder.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/50 transition-colors">
              <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{reminder.title}</p>
                <p className="text-xs text-muted-foreground">{reminder.time}</p>
              </div>
              {reminder.status === "completed" ? (
                <Check className="w-4 h-4 text-success" />
              ) : reminder.status === "missed" ? (
                <X className="w-4 h-4 text-destructive" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-warning" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaregiverReminders;
