import { MapPin, Shield, AlertTriangle } from "lucide-react";

const PatientSafety = () => {
  const isSafe = true;

  return (
    <div className={`lucidia-card-patient ${isSafe ? "bg-success/5" : "bg-destructive/5"}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isSafe ? "bg-success/10" : "bg-destructive/10"}`}>
          {isSafe ? <Shield className="w-7 h-7 text-success" /> : <AlertTriangle className="w-7 h-7 text-destructive" />}
        </div>
        <div>
          <h2 className="text-xl font-heading font-bold text-foreground">Safety Status</h2>
          <p className={`font-semibold ${isSafe ? "text-success" : "text-destructive"}`}>
            {isSafe ? "You are in a safe zone" : "Outside safe zone!"}
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-muted h-40 flex items-center justify-center border border-border overflow-hidden">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <MapPin className="w-8 h-8" />
          <span className="text-sm">Live Map Preview</span>
          <span className="text-xs">GPS: Active</span>
        </div>
      </div>
    </div>
  );
};

export default PatientSafety;
