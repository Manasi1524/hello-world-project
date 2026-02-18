import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff } from "lucide-react";

const PatientVoiceAssistant = () => {
  const [listening, setListening] = useState(false);

  return (
    <div className="lucidia-card-patient bg-lavender/30 flex flex-col items-center text-center">
      <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Voice Assistant</h2>
      <p className="text-muted-foreground mb-6">Tap to talk to Lucidia</p>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setListening(!listening)}
        className={`w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
          listening
            ? "bg-primary text-primary-foreground animate-pulse-soft shadow-primary/30"
            : "bg-card border-2 border-primary text-primary hover:bg-primary/5"
        }`}
      >
        {listening ? <Mic className="w-12 h-12" /> : <MicOff className="w-12 h-12" />}
      </motion.button>

      <p className="mt-4 text-sm text-muted-foreground">
        {listening ? "Listening... say something" : "\"Talk to Lucidia\""}
      </p>

      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        {["What is my schedule?", "Where am I?", "Call caregiver"].map(cmd => (
          <span key={cmd} className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
            "{cmd}"
          </span>
        ))}
      </div>
    </div>
  );
};

export default PatientVoiceAssistant;
