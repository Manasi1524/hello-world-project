import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scan, BookOpen, Mic, MapPin, Bell, Activity } from "lucide-react";

const capabilities = [
  { icon: Scan, label: "Face Recognition", desc: "94.6% accuracy real-time identification" },
  { icon: BookOpen, label: "Memory Flashback Engine", desc: "AI-curated emotional memory reinforcement" },
  { icon: Mic, label: "Voice Reminders", desc: "Natural language medication & appointment alerts" },
  { icon: MapPin, label: "GPS Safe Zone Tracking", desc: "Geofenced perimeter with instant notifications" },
  { icon: Bell, label: "Real-Time Alerts", desc: "Sub-3-second caregiver notification pipeline" },
  { icon: Activity, label: "Behavioral Analytics", desc: "Trend analysis & anomaly detection" },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Our Solution
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6"
            >
              Introducing{" "}
              <span className="gradient-text">Lucidia</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              A unified AI + IoT platform designed to wrap every patient in a protective, intelligent ecosystem — giving caregivers the tools they need and patients the dignity they deserve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {["AI-Powered", "HIPAA Compliant", "Real-Time", "Caregiver-Focused"].map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium border border-border">
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: capability grid */}
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="glass-card p-5 hover:-translate-y-1 hover:glow-primary transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <cap.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-sm font-heading font-bold text-foreground mb-1">{cap.label}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
