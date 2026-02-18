import { motion } from "framer-motion";
import { ArrowLeft, Bell, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import CaregiverAlerts from "@/components/caregiver/CaregiverAlerts";
import CaregiverPatientSummary from "@/components/caregiver/CaregiverPatientSummary";
import CaregiverReminders from "@/components/caregiver/CaregiverReminders";
import CaregiverRecognition from "@/components/caregiver/CaregiverRecognition";
import CaregiverAnalytics from "@/components/caregiver/CaregiverAnalytics";
import CaregiverLocation from "@/components/caregiver/CaregiverLocation";

const CaregiverDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-md border-b border-border px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-primary" />
            <h1 className="text-lg font-heading font-bold text-foreground">Caregiver Dashboard</h1>
          </div>
          <div className="relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-destructive" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <CaregiverPatientSummary />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <CaregiverAlerts />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <CaregiverLocation />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <CaregiverReminders />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <CaregiverRecognition />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <CaregiverAnalytics />
        </motion.div>
      </main>
    </div>
  );
};

export default CaregiverDashboard;
