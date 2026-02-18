import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, HeartCrack, Puzzle } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "Cognitive Decline & Confusion",
    description:
      "Over 55 million people worldwide live with dementia, facing daily challenges with memory loss, spatial disorientation, and identity recognition that erode independence.",
    color: "bg-secondary/30 text-secondary-foreground",
    border: "border-secondary/40",
  },
  {
    icon: HeartCrack,
    title: "Caregiver Burnout",
    description:
      "83% of dementia care is unpaid and provided by family. Constant vigilance causes physical and emotional exhaustion, increasing the risk of care errors and patient neglect.",
    color: "bg-peach/30 text-peach-foreground",
    border: "border-peach/40",
  },
  {
    icon: Puzzle,
    title: "Fragmented Care Systems",
    description:
      "Existing solutions address isolated problems — reminder apps, GPS trackers, or alert systems — but fail to integrate into one cohesive, intelligent care platform.",
    color: "bg-accent/30 text-accent-foreground",
    border: "border-accent/40",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            The Challenge in Dementia Care
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding the scale and complexity of problems facing patients and their caregivers today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`feature-card border ${problem.border}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${problem.color} flex items-center justify-center mb-5`}>
                <problem.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
