import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Database, Users, ArrowDown, ArrowRight } from "lucide-react";

const layers = [
  {
    icon: Brain,
    title: "AI Layer",
    items: ["Face Recognition (DeepFace)", "NLP Voice Assistant", "Memory Recommendation Engine", "Anomaly Detection"],
    color: "bg-primary/10 border-primary/25 text-primary",
    iconBg: "bg-primary/15",
  },
  {
    icon: Cpu,
    title: "IoT Layer",
    items: ["Wearable Sensor Integration", "GPS Tracking Module", "Smart Home Sensors", "Real-Time Data Streams"],
    color: "bg-secondary/30 border-secondary/40 text-secondary-foreground",
    iconBg: "bg-secondary/30",
  },
  {
    icon: Database,
    title: "Cloud Database",
    items: ["Supabase PostgreSQL", "Encrypted Patient Records", "Media Storage (Photos/Audio)", "Audit Logs & Compliance"],
    color: "bg-accent/20 border-accent/30 text-accent-foreground",
    iconBg: "bg-accent/20",
  },
  {
    icon: Users,
    title: "Caregiver Interface",
    items: ["Real-Time Alert Dashboard", "Analytics & Trend Reports", "Medication Management", "Multi-Patient Overview"],
    color: "bg-success/10 border-success/25 text-success",
    iconBg: "bg-success/10",
  },
];

const ArchitectureSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Four-Layer Intelligence Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A robust, scalable architecture that connects patients, caregivers, and AI in a unified ecosystem.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-start gap-4">
          {layers.map((layer, i) => (
            <div key={layer.title} className="flex items-start gap-4 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`flex-1 glass-card border p-6 ${layer.color}`}
              >
                <div className={`w-12 h-12 rounded-xl ${layer.iconBg} flex items-center justify-center mb-4`}>
                  <layer.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-base mb-4">{layer.title}</h3>
                <ul className="space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-current mt-1.5 flex-shrink-0 opacity-60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              {i < layers.length - 1 && (
                <div className="flex items-center justify-center pt-16">
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col gap-4">
          {layers.map((layer, i) => (
            <div key={layer.title}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={`glass-card border p-5 ${layer.color}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${layer.iconBg} flex items-center justify-center`}>
                    <layer.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm">{layer.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
