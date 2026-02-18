import { motion } from "framer-motion";
import { Heart, Users, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    id: "patient",
    title: "I'm a Patient",
    description: "Access your reminders, memories, and voice assistant",
    icon: Heart,
    color: "bg-peach text-peach-foreground",
    path: "/patient",
  },
  {
    id: "caregiver",
    title: "I'm a Caregiver",
    description: "Monitor patients, manage alerts and reminders",
    icon: Users,
    color: "bg-secondary text-secondary-foreground",
    path: "/caregiver",
  },
  {
    id: "admin",
    title: "Administrator",
    description: "Full system access and management",
    icon: Shield,
    color: "bg-lavender text-lavender-foreground",
    path: "/caregiver",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Lucidia
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Compassionate care, powered by recognition. Supporting memory, safety, and connection.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {roles.map((role, i) => (
          <motion.button
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            onClick={() => navigate(role.path)}
            className="lucidia-card text-left group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-2xl ${role.color} flex items-center justify-center mb-4`}>
              <role.icon className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-heading font-bold text-foreground mb-2">
              {role.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {role.description}
            </p>
          </motion.button>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-sm text-muted-foreground"
      >
        Secure • WCAG AA Accessible • HIPAA Compliant
      </motion.p>
    </div>
  );
};

export default Index;
