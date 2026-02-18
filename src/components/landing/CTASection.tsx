import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="contact" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/20 to-accent/15" />
        <div className="float-shape absolute top-10 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="float-shape-slow absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-12 md:p-16 border border-white/50"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6"
          >
            <Heart className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight"
          >
            Empowering Care Through{" "}
            <span className="gradient-text">Intelligent Technology.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join the growing network of families and care facilities using Lucidia to transform dementia care — one patient at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate("/caregiver")}
              className="group px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg glow-primary flex items-center justify-center gap-2"
            >
              Get Started with Lucidia
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/patient")}
              className="px-8 py-4 rounded-2xl border border-primary/30 bg-white/60 text-foreground font-semibold text-base hover:bg-white/80 hover:-translate-y-0.5 transition-all duration-200"
            >
              Patient Demo
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-8 text-xs text-muted-foreground"
          >
            HIPAA Compliant • No credit card required • Free research access available
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
