import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const PatientEmergency = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent pt-12 z-20">
      <div className="max-w-4xl mx-auto">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full patient-btn bg-destructive text-destructive-foreground flex items-center justify-center gap-3 text-xl shadow-lg shadow-destructive/20"
        >
          <Phone className="w-7 h-7" />
          Call Caregiver
        </motion.button>
      </div>
    </div>
  );
};

export default PatientEmergency;
