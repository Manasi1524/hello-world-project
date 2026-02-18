import { MapPin, Shield } from "lucide-react";

const CaregiverLocation = () => {
  return (
    <div className="lucidia-card h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-foreground" />
          <h2 className="text-lg font-heading font-bold text-foreground">Live Location</h2>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-success/10 text-success">
          <Shield className="w-3 h-3" /> In Safe Zone
        </span>
      </div>

      <div className="rounded-xl bg-muted h-64 flex items-center justify-center border border-border overflow-hidden relative">
        {/* Map placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/5" />
        <div className="relative flex flex-col items-center gap-3 text-muted-foreground">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-foreground">123 Oak Street, Home</p>
            <p className="text-xs">Last updated: 30s ago</p>
          </div>
        </div>
        {/* Safe zone circle indicator */}
        <div className="absolute inset-8 rounded-full border-2 border-dashed border-primary/20" />
      </div>

      <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
        <span>📍 Current: Home</span>
        <span>📏 0.2 km from center</span>
        <span>🔵 Boundary: 500m</span>
      </div>
    </div>
  );
};

export default CaregiverLocation;
