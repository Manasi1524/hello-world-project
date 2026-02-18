import { mockAlerts } from "@/data/mockData";
import { AlertTriangle, Eye, Bell } from "lucide-react";

const severityStyles = {
  high: "severity-high",
  medium: "severity-medium",
  low: "severity-low",
};

const CaregiverAlerts = () => {
  const unread = mockAlerts.filter(a => !a.read).length;

  return (
    <div className="lucidia-card h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-foreground" />
          <h2 className="text-lg font-heading font-bold text-foreground">Alerts</h2>
        </div>
        {unread > 0 && (
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-destructive/10 text-destructive">
            {unread} new
          </span>
        )}
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {mockAlerts.map(alert => (
          <div
            key={alert.id}
            className={`p-3 rounded-xl border ${severityStyles[alert.severity]} ${!alert.read ? "ring-1 ring-offset-1" : "opacity-70"}`}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-sm">{alert.type}</p>
                  <span className="text-xs opacity-70 flex-shrink-0">{alert.timestamp}</span>
                </div>
                <p className="text-xs mt-1 opacity-80">{alert.message}</p>
              </div>
            </div>
            <button className="mt-2 text-xs font-medium flex items-center gap-1 hover:underline">
              <Eye className="w-3 h-3" /> View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaregiverAlerts;
