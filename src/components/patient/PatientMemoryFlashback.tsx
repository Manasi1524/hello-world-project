import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { mockMemoryFlashbacks } from "@/data/mockData";

const PatientMemoryFlashback = () => {
  const [current, setCurrent] = useState(0);
  const person = mockMemoryFlashbacks[current];

  const next = () => setCurrent(i => (i + 1) % mockMemoryFlashbacks.length);
  const prev = () => setCurrent(i => (i - 1 + mockMemoryFlashbacks.length) % mockMemoryFlashbacks.length);

  return (
    <div className="lucidia-card-patient bg-peach/30">
      <div className="flex items-center gap-2 mb-6">
        <Heart className="w-6 h-6 text-destructive" />
        <h2 className="text-2xl font-heading font-bold text-foreground">Memory Flashback</h2>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={person.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <img
            src={person.photo}
            alt={person.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-card shadow-lg mb-4"
          />
          <p className="text-lg font-bold text-foreground">{person.name}</p>
          <p className="text-primary font-semibold text-lg mb-2">{person.relation}</p>
          <p className="text-muted-foreground max-w-sm">{person.message}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-6 mt-6">
        <button onClick={prev} className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {mockMemoryFlashbacks.map((_, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} />
          ))}
        </div>
        <button onClick={next} className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PatientMemoryFlashback;
