import { motion } from "framer-motion";
import { ArrowLeft, Sun, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { mockPatient } from "@/data/mockData";
import PatientWelcome from "@/components/patient/PatientWelcome";
import PatientReminders from "@/components/patient/PatientReminders";
import PatientMemoryFlashback from "@/components/patient/PatientMemoryFlashback";
import PatientVoiceAssistant from "@/components/patient/PatientVoiceAssistant";
import PatientSafety from "@/components/patient/PatientSafety";
import PatientEmergency from "@/components/patient/PatientEmergency";

const PatientDashboard = () => {
  const now = new Date();
  const greeting = now.getHours() < 12 ? "Good Morning" : now.getHours() < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-md border-b border-border px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6 pb-32">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-2">
            <Sun className="w-8 h-8 text-warning" />
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              {greeting}, {mockPatient.name}
            </h1>
          </div>
        </motion.div>

        <PatientWelcome />
        <PatientReminders />
        <PatientMemoryFlashback />
        <PatientVoiceAssistant />
        <PatientSafety />
      </main>

      <PatientEmergency />
    </div>
  );
};

export default PatientDashboard;
