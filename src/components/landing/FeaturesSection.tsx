import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scan, BookOpen, Mic, MapPin, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Face Recognition",
    description:
      "Advanced deep learning model identifies family members and caregivers in real-time, reducing confusion and providing instant emotional context to patients.",
    accent: "from-primary/20 to-primary/5",
    border: "border-primary/20",
    iconBg: "bg-primary/10 text-primary",
    badge: "94.6% Accuracy",
    badgeColor: "bg-primary/10 text-primary",
  },
  {
    icon: BookOpen,
    title: "Memory Flashback Engine",
    description:
      "An AI-curated personal timeline of photos, voice messages, and stories that trigger positive emotional memories and provide grounding during confusion episodes.",
    accent: "from-accent/20 to-accent/5",
    border: "border-accent/30",
    iconBg: "bg-accent/20 text-accent-foreground",
    badge: "Emotional Wellness",
    badgeColor: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Mic,
    title: "Voice Assistant",
    description:
      "Natural language voice reminders for medications, appointments, and daily tasks. Adapts tone and phrasing to the patient's cognitive state and comfort level.",
    accent: "from-secondary/30 to-secondary/5",
    border: "border-secondary/40",
    iconBg: "bg-secondary/30 text-secondary-foreground",
    badge: "97.8% Success Rate",
    badgeColor: "bg-secondary/30 text-secondary-foreground",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description:
      "Geofenced safe zones with real-time location monitoring. Caregivers receive instant alerts the moment a patient leaves a designated boundary.",
    accent: "from-peach/30 to-peach/5",
    border: "border-peach/40",
    iconBg: "bg-peach/30 text-peach-foreground",
    badge: "Real-Time",
    badgeColor: "bg-peach/30 text-peach-foreground",
  },
  {
    icon: LayoutDashboard,
    title: "Caregiver Dashboard",
    description:
      "A comprehensive command center with patient summaries, alert panels, analytics charts, and medication tracking — giving caregivers complete situational awareness.",
    accent: "from-success/10 to-success/5",
    border: "border-success/20",
    iconBg: "bg-success/10 text-success",
    badge: "HIPAA Compliant",
    badgeColor: "bg-success/10 text-success",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Five Pillars of Intelligent Care
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each feature is engineered to address a critical gap in dementia care with medical-grade precision.
          </p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {features.slice(0, 3).map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`feature-card border ${feature.border} bg-gradient-to-br ${feature.accent}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${feature.badgeColor}`}>
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Second row: 2 wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.slice(3).map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.36 + i * 0.12, duration: 0.6 }}
              className={`feature-card border ${feature.border} bg-gradient-to-br ${feature.accent}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${feature.badgeColor}`}>
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
