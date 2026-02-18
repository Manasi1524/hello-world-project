import { mockPatient } from "@/data/mockData";
import { Activity, MapPin, Heart, Eye } from "lucide-react";

const stats = [
  { label: "Activity Today", value: "12 interactions", icon: Activity, color: "bg-primary/10 text-primary" },
  { label: "Location", value: "Safe Zone", icon: MapPin, color: "bg-success/10 text-success" },
  { label: "Emotional Interactions", value: "8 today", icon: Heart, color: "bg-peach text-peach-foreground" },
  { label: "Last Recognition", value: "2 min ago (94%)", icon: Eye, color: "bg-lavender text-lavender-foreground" },
];

const CaregiverPatientSummary = () => {
  return (
    <div className="lucidia-card">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-2xl font-bold font-heading text-secondary-foreground">
          {mockPatient.name[0]}
        </div>
        <div>
          <h2 className="text-xl font-heading font-bold text-foreground">{mockPatient.fullName}</h2>
          <p className="text-sm text-muted-foreground">Age {mockPatient.age} • Patient ID #1042</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(stat => (
          <div key={stat.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-sm font-semibold text-foreground">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaregiverPatientSummary;
