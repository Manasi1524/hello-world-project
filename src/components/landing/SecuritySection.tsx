import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, ShieldCheck, Zap, Eye } from "lucide-react";

const trustPoints = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All patient data — biometrics, location, medical records — is AES-256 encrypted in transit and at rest.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control",
    description: "Granular permissions ensure patients, caregivers, and administrators see only what they're authorized to access.",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Zap,
    title: "Real-Time Alert Pipeline",
    description: "Sub-3-second emergency notification delivery across SMS, push, and in-app channels with 99.9% uptime SLA.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    icon: Eye,
    title: "Full Audit Trail",
    description: "Every system action is logged with timestamp and actor identity, ensuring HIPAA-grade accountability.",
    color: "text-accent-foreground",
    bg: "bg-accent/20",
  },
];

const SecuritySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-card p-8 border border-primary/20 text-center">
              <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-primary">
                <ShieldCheck className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">HIPAA Compliant</h3>
              <p className="text-muted-foreground text-sm mb-6">Lucidia meets all Health Insurance Portability and Accountability Act requirements for handling protected health information.</p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Uptime", value: "99.9%" },
                  { label: "Latency", value: "<3s" },
                  { label: "Encryption", value: "AES-256" },
                ].map((m) => (
                  <div key={m.label} className="bg-muted/50 rounded-xl p-3">
                    <p className="font-heading font-bold text-lg text-primary">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Compliance badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["HIPAA", "GDPR Ready", "SOC 2", "ISO 27001"].map((badge) => (
                  <span key={badge} className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: trust points */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="inline-block px-4 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium mb-4"
            >
              Security & Trust
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Secure. Private. Reliable.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground text-base mb-8"
            >
              Healthcare data demands the highest standard of protection. Lucidia is built from the ground up with security as a first principle.
            </motion.p>

            <div className="space-y-4">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${point.bg} flex items-center justify-center flex-shrink-0`}>
                    <point.icon className={`w-5 h-5 ${point.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{point.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
