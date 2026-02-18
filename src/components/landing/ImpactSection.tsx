import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Shield, Smile } from "lucide-react";

const impacts = [
  {
    icon: Heart,
    title: "Reduced Caregiver Burden",
    quote: "Since using Lucidia, I sleep knowing my mother is safe. The alerts give me peace of mind I never had before.",
    author: "Sarah M., Family Caregiver",
    stat: "62% less stress",
    color: "bg-peach/20 border-peach/30",
    iconColor: "text-peach-foreground bg-peach/30",
  },
  {
    icon: Smile,
    title: "Improved Patient Safety",
    quote: "Eleanor hasn't wandered once since we activated the GPS zones. The system caught two near-exits before we even noticed.",
    author: "Dr. James K., Neurologist",
    stat: "0 wandering incidents",
    color: "bg-secondary/20 border-secondary/30",
    iconColor: "text-secondary-foreground bg-secondary/30",
  },
  {
    icon: Shield,
    title: "Emotional Reassurance",
    quote: "The memory flashbacks help my father recognize us every morning. Watching his face light up is worth everything.",
    author: "Marcus T., Son & Caregiver",
    stat: "Daily memory reinforcement",
    color: "bg-accent/20 border-accent/30",
    iconColor: "text-accent-foreground bg-accent/20",
  },
  {
    icon: Users,
    title: "Real-Time Monitoring",
    quote: "As a facility nurse, I manage 8 patients with Lucidia. The dashboard gives me a live picture I could never get manually.",
    author: "Nurse Linda P., Care Facility",
    stat: "8 patients per caregiver",
    color: "bg-primary/10 border-primary/20",
    iconColor: "text-primary bg-primary/10",
  },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-peach/30 text-peach-foreground text-sm font-medium mb-4">
            Real Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Building a Safer Tomorrow for Dementia Patients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Behind every metric is a family sleeping better, a patient feeling recognized, a caregiver finding relief.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {impacts.map((impact, i) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`feature-card border ${impact.color}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl ${impact.iconColor} flex items-center justify-center flex-shrink-0`}>
                  <impact.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm">{impact.title}</h3>
                  <span className="text-xs font-medium text-muted-foreground">{impact.stat}</span>
                </div>
              </div>

              <blockquote className="text-sm text-muted-foreground leading-relaxed italic mb-3">
                "{impact.quote}"
              </blockquote>
              <p className="text-xs font-semibold text-foreground">— {impact.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
