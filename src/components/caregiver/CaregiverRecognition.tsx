import { mockKnownFaces, mockRecognitionAccuracy } from "@/data/mockData";
import { ScanFace, Plus, Upload } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const CaregiverRecognition = () => {
  return (
    <div className="lucidia-card h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ScanFace className="w-5 h-5 text-foreground" />
          <h2 className="text-lg font-heading font-bold text-foreground">Face Recognition</h2>
        </div>
        <button className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
          <Upload className="w-3 h-3" /> Upload
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {mockKnownFaces.map(face => (
          <div key={face.id} className="flex items-center gap-3 p-2.5 rounded-xl bg-muted/50">
            <img src={face.photo} alt={face.name} className="w-10 h-10 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{face.name}</p>
              <p className="text-xs text-muted-foreground">{face.relation} • {face.recognitions} IDs</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xs font-semibold text-muted-foreground mb-2">Accuracy Trend</h3>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={mockRecognitionAccuracy}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(200, 10%, 45%)' }} />
            <YAxis hide domain={[80, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="accuracy" stroke="hsl(174, 40%, 51%)" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CaregiverRecognition;
