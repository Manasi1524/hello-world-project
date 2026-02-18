import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Clock, CheckCircle, Award } from "lucide-react";

interface StatCardProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
  iconBg: string;
  delay: number;
  inView: boolean;
}

const StatCard = ({ value, suffix, prefix = "", label, description, icon: Icon, color, iconBg, delay, inView }: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();
      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(parseFloat((eased * value).toFixed(1)));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="glass-card p-6 border border-border hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className={`text-3xl font-heading font-bold ${color}`}>{prefix}{displayValue}{suffix}</span>
      </div>
      <p className="font-semibold text-foreground text-sm mb-1">{label}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

const stats = [
  {
    value: 94.6,
    suffix: "%",
    label: "Recognition Accuracy",
    description: "Validated against real-world dementia patient datasets with multi-lighting conditions.",
    icon: Award,
    color: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    value: 97.8,
    suffix: "%",
    label: "Reminder Success Rate",
    description: "Percentage of medication and appointment reminders acknowledged within the alert window.",
    icon: CheckCircle,
    color: "text-success",
    iconBg: "bg-success/10",
  },
  {
    value: 2.2,
    suffix: "s",
    label: "Alert Latency",
    description: "Average time from anomaly detection to caregiver notification delivery across all channels.",
    icon: Clock,
    color: "text-warning",
    iconBg: "bg-warning/10",
  },
  {
    value: 62,
    suffix: "%",
    label: "Reduced Caregiver Burden",
    description: "Reported reduction in care-related stress after 30 days of continuous Lucidia monitoring.",
    icon: TrendingUp,
    color: "text-accent-foreground",
    iconBg: "bg-accent/20",
  },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" ref={ref} className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-warning/10 text-warning text-sm font-medium mb-4">
            Research & Performance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Evidence-Based Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every metric is validated through rigorous clinical evaluation and real-world deployment testing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={0.1 + i * 0.12} inView={inView} />
          ))}
        </div>

        {/* Research citation bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 p-5 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0 flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Research Publication</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              "AI-Driven Multimodal Support System for Alzheimer's Patients" — validated with IRB-approved patient cohort study.
              Performance benchmarks independently verified.
            </p>
          </div>
          <span className="flex-shrink-0 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Peer-Reviewed</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
