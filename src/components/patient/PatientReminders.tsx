import { useState } from "react";
import { motion } from "framer-motion";
import { Pill, Droplets, Calendar, Check, Clock, X } from "lucide-react";
import { mockReminders, mockReminderStats } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const typeIcons = {
  medicine: Pill,
  hydration: Droplets,
  appointment: Calendar,
};

const statusColors = {
  completed: "bg-success/10 text-success border-success/20",
  pending: "bg-secondary text-secondary-foreground border-secondary",
  missed: "bg-destructive/10 text-destructive border-destructive/20",
};

const statusIcons = {
  completed: Check,
  pending: Clock,
  missed: X,
};

const PatientReminders = () => {
  const [reminders, setReminders] = useState(mockReminders);

  const markDone = (id: number) => {
    setReminders(prev =>
      prev.map(r => r.id === id ? { ...r, status: "completed" as const } : r)
    );
  };

  const completionRate = Math.round(
    (reminders.filter(r => r.status === "completed").length / reminders.length) * 100
  );

  return (
    <div className="lucidia-card-patient">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-bold text-foreground">Today's Reminders</h2>
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
          {completionRate}% done
        </span>
      </div>

      <div className="space-y-3 mb-6">
        {reminders.map((reminder, i) => {
          const Icon = typeIcons[reminder.type as keyof typeof typeIcons];
          const StatusIcon = statusIcons[reminder.status];
          return (
            <motion.div
              key={reminder.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-4 p-4 rounded-2xl border ${statusColors[reminder.status]}`}
            >
              <Icon className="w-6 h-6 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground">{reminder.title}</p>
                <p className="text-sm text-muted-foreground">{reminder.time}</p>
              </div>
              {reminder.status === "pending" ? (
                <button
                  onClick={() => markDone(reminder.id)}
                  className="patient-btn bg-primary text-primary-foreground text-sm py-3 px-5"
                >
                  Mark Done
                </button>
              ) : (
                <StatusIcon className="w-6 h-6 flex-shrink-0" />
              )}
            </motion.div>
          );
        })}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Weekly Success Rate</h3>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={mockReminderStats}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(200, 10%, 45%)' }} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="completed" fill="hsl(174, 40%, 51%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="missed" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PatientReminders;
