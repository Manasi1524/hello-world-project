import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from "recharts";
import { Bell, CheckCircle, MapPin, Activity, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const reminderData = [
  { day: "Mon", done: 4, missed: 1 },
  { day: "Tue", done: 5, missed: 0 },
  { day: "Wed", done: 3, missed: 2 },
  { day: "Thu", done: 5, missed: 0 },
  { day: "Fri", done: 4, missed: 1 },
  { day: "Sat", done: 5, missed: 0 },
  { day: "Sun", done: 4, missed: 0 },
];

const activityData = [
  { time: "6am", value: 20 },
  { time: "9am", value: 60 },
  { time: "12pm", value: 45 },
  { time: "3pm", value: 80 },
  { time: "6pm", value: 55 },
  { time: "9pm", value: 30 },
];

const alerts = [
  { label: "Left safe zone boundary", time: "10:32 AM", level: "high" },
  { label: "Medication reminder missed", time: "08:00 AM", level: "medium" },
  { label: "Face recognized: Sarah (Daughter)", time: "07:15 AM", level: "low" },
];

const DashboardPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="dashboard" ref={ref} className="py-24 px-4 bg-gradient-to-b from-muted/10 to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-4">
            Live Preview
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Dashboards Built for Real Care
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Patient-focused simplicity meets caregiver-grade analytics in one unified platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Patient Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass-card p-6 border border-secondary/30"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Patient View</p>
                <h3 className="font-heading font-bold text-foreground">Good Morning, Eleanor 👋</h3>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-success/10 text-success">
                <Shield className="w-3 h-3" /> Safe
              </span>
            </div>

            {/* Today's reminders */}
            <div className="space-y-2 mb-4">
              {[
                { time: "8:00 AM", task: "Take morning medication", done: true },
                { time: "10:00 AM", task: "Doctor's appointment", done: true },
                { time: "2:00 PM", task: "Afternoon walk", done: false },
              ].map((r) => (
                <div key={r.task} className={`flex items-center gap-3 p-3 rounded-xl ${r.done ? "bg-success/5 border border-success/15" : "bg-muted border border-border"}`}>
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${r.done ? "text-success" : "text-muted-foreground/40"}`} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${r.done ? "text-foreground line-through opacity-60" : "text-foreground"}`}>{r.task}</p>
                    <p className="text-xs text-muted-foreground">{r.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl bg-gradient-to-br from-secondary/20 to-primary/5 h-28 flex items-center justify-center border border-border relative overflow-hidden">
              <div className="absolute inset-6 rounded-full border-2 border-dashed border-primary/20" />
              <div className="flex flex-col items-center gap-1">
                <MapPin className="w-6 h-6 text-primary" />
                <p className="text-xs font-medium text-foreground">Home – Safe Zone Active</p>
              </div>
            </div>

            <button onClick={() => navigate("/patient")} className="mt-4 w-full py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors">
              Open Patient Dashboard →
            </button>
          </motion.div>

          {/* Caregiver Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="glass-card p-6 border border-primary/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Caregiver Dashboard</p>
                <h3 className="font-heading font-bold text-foreground">Patient Overview</h3>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-warning/10 text-warning">
                <Bell className="w-3 h-3" /> 2 Alerts
              </span>
            </div>

            {/* Alerts */}
            <div className="space-y-2 mb-4">
              {alerts.map((alert) => (
                <div key={alert.label} className={`flex items-start gap-3 p-3 rounded-xl border ${
                  alert.level === "high" ? "severity-high" : alert.level === "medium" ? "severity-medium" : "severity-low"
                }`}>
                  <Bell className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">{alert.label}</p>
                    <p className="text-xs opacity-70">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini charts */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted/50 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <Activity className="w-3 h-3 text-muted-foreground" />
                  <p className="text-xs font-medium text-muted-foreground">Reminders</p>
                </div>
                <ResponsiveContainer width="100%" height={60}>
                  <BarChart data={reminderData} barGap={2}>
                    <Bar dataKey="done" fill="hsl(174, 40%, 51%)" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="missed" fill="hsl(0, 72%, 51%)" radius={[2, 2, 0, 0]} />
                    <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-muted/50 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <Activity className="w-3 h-3 text-muted-foreground" />
                  <p className="text-xs font-medium text-muted-foreground">Activity</p>
                </div>
                <ResponsiveContainer width="100%" height={60}>
                  <AreaChart data={activityData}>
                    <Area type="monotone" dataKey="value" stroke="hsl(261, 47%, 60%)" fill="hsl(261, 47%, 84%)" fillOpacity={0.4} strokeWidth={1.5} />
                    <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <button onClick={() => navigate("/caregiver")} className="mt-4 w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
              Open Caregiver Dashboard →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
