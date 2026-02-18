import { motion } from "framer-motion";
import { ArrowDown, Brain, Shield, Wifi } from "lucide-react";

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToDemo = () => {
    document.querySelector("#dashboard")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(199,94%,95%)] via-[hsl(174,40%,96%)] to-[hsl(261,47%,96%)]" />
        {/* Floating blobs */}
        <div className="float-shape absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="float-shape-slow absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="float-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Floating tech badges */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex absolute left-8 top-1/3 glass-card px-4 py-3 items-center gap-2"
      >
        <Brain className="w-5 h-5 text-primary" />
        <div>
          <p className="text-xs font-semibold text-foreground">AI Recognition</p>
          <p className="text-xs text-muted-foreground">94.6% accuracy</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:flex absolute right-8 top-1/3 glass-card px-4 py-3 items-center gap-2"
      >
        <Shield className="w-5 h-5 text-success" />
        <div>
          <p className="text-xs font-semibold text-foreground">HIPAA Compliant</p>
          <p className="text-xs text-muted-foreground">End-to-end encrypted</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden lg:flex absolute left-16 bottom-1/3 glass-card px-4 py-3 items-center gap-2"
      >
        <Wifi className="w-5 h-5 text-accent-foreground" />
        <div>
          <p className="text-xs font-semibold text-foreground">Real-Time IoT</p>
          <p className="text-xs text-muted-foreground">&lt;3 sec latency</p>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Research-Backed • AI + IoT Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6"
        >
          Compassionate AI for{" "}
          <span className="gradient-text">Smarter Dementia</span>{" "}
          Care.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Lucidia combines Artificial Intelligence and IoT to provide real-time monitoring, emotional memory support, and caregiver alerts — ensuring safety, dignity, and independence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToFeatures}
            className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg glow-primary"
          >
            Explore Features
          </button>
          <button
            onClick={scrollToDemo}
            className="px-8 py-4 rounded-2xl glass-card text-foreground font-semibold text-base hover:-translate-y-0.5 transition-all duration-200 border border-primary/20"
          >
            View Live Demo
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { value: "94.6%", label: "Recognition Accuracy" },
            { value: "<3s", label: "Alert Latency" },
            { value: "97.8%", label: "Reminder Success" },
            { value: "24/7", label: "Real-Time Monitoring" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-heading font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground cursor-pointer"
        onClick={scrollToFeatures}
      >
        <span className="text-xs">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
