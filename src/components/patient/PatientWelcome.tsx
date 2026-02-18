import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
import { mockPatient } from "@/data/mockData";

const PatientWelcome = () => {
  return (
    <div className="lucidia-card-patient bg-secondary/40">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <UserCheck className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-bold text-foreground">Recognition Status</h2>
          <p className="text-muted-foreground">{mockPatient.recognitionResult} • {mockPatient.lastRecognized}</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Confidence</span>
          <span className="font-semibold text-primary">{mockPatient.recognitionConfidence}%</span>
        </div>
        <div className="confidence-bar">
          <motion.div
            className="confidence-fill"
            initial={{ width: 0 }}
            animate={{ width: `${mockPatient.recognitionConfidence}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientWelcome;
