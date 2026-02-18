import { mockReminderStats, mockAlertFrequency, mockRecognitionAccuracy } from "@/data/mockData";
import { BarChart3 } from "lucide-react";
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid,
} from "recharts";

const movementData = [
  { day: "Mon", km: 1.2 },
  { day: "Tue", km: 0.8 },
  { day: "Wed", km: 2.1 },
  { day: "Thu", km: 1.5 },
  { day: "Fri", km: 0.6 },
  { day: "Sat", km: 1.8 },
  { day: "Sun", km: 0.9 },
];

const CaregiverAnalytics = () => {
  return (
    <div className="lucidia-card">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-5 h-5 text-foreground" />
        <h2 className="text-lg font-heading font-bold text-foreground">Activity & Analytics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Reminder Completion */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Reminder Completion</h3>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={mockReminderStats}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(200, 10%, 45%)' }} />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="completed" fill="hsl(174, 40%, 51%)" radius={[3, 3, 0, 0]} />
              <Bar dataKey="missed" fill="hsl(0, 72%, 51%)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Alert Frequency */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Alert Frequency</h3>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={mockAlertFrequency}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(200, 10%, 45%)' }} />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="alerts" fill="hsl(38, 92%, 50%)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Movement */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Daily Movement (km)</h3>
          <ResponsiveContainer width="100%" height={140}>
            <AreaChart data={movementData}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(200, 10%, 45%)' }} />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="km" stroke="hsl(261, 47%, 60%)" fill="hsl(261, 47%, 84%)" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recognition Accuracy */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Recognition Accuracy</h3>
          <ResponsiveContainer width="100%" height={140}>
            <LineChart data={mockRecognitionAccuracy}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(200, 10%, 45%)' }} />
              <YAxis hide domain={[80, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="hsl(174, 40%, 51%)" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CaregiverAnalytics;
