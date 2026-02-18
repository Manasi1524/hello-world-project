export const mockPatient = {
  name: "Margaret",
  fullName: "Margaret Thompson",
  age: 78,
  recognitionResult: "Recognized",
  recognitionConfidence: 94,
  lastRecognized: "2 minutes ago",
};

export const mockReminders = [
  { id: 1, title: "Morning Medication", time: "8:00 AM", status: "completed" as const, type: "medicine" },
  { id: 2, title: "Drink Water", time: "9:30 AM", status: "completed" as const, type: "hydration" },
  { id: 3, title: "Afternoon Medication", time: "1:00 PM", status: "pending" as const, type: "medicine" },
  { id: 4, title: "Dr. Smith Appointment", time: "3:00 PM", status: "pending" as const, type: "appointment" },
  { id: 5, title: "Evening Medication", time: "7:00 PM", status: "pending" as const, type: "medicine" },
  { id: 6, title: "Hydration Check", time: "4:00 PM", status: "missed" as const, type: "hydration" },
];

export const mockMemoryFlashbacks = [
  { id: 1, name: "Sarah Thompson", relation: "Your daughter", message: "Sarah visited you last Sunday. You both enjoyed tea in the garden.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face" },
  { id: 2, name: "James Thompson", relation: "Your son", message: "James called you yesterday. He's coming to visit next week.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
  { id: 3, name: "Dr. Emily Chen", relation: "Your doctor", message: "Dr. Chen checks on you every Thursday. She's very kind.", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face" },
];

export const mockAlerts = [
  { id: 1, type: "Missed Reminder", message: "Hydration check was missed at 4:00 PM", severity: "medium" as const, timestamp: "4:15 PM", read: false },
  { id: 2, type: "Unknown Face", message: "An unrecognized person was detected at the front door", severity: "high" as const, timestamp: "2:30 PM", read: false },
  { id: 3, type: "Geo-fence Alert", message: "Patient approached boundary of safe zone", severity: "low" as const, timestamp: "11:45 AM", read: true },
  { id: 4, type: "Wandering Detected", message: "Unusual movement pattern detected in the evening", severity: "high" as const, timestamp: "Yesterday 9:00 PM", read: true },
];

export const mockReminderStats = [
  { day: "Mon", completed: 5, missed: 0 },
  { day: "Tue", completed: 4, missed: 1 },
  { day: "Wed", completed: 5, missed: 0 },
  { day: "Thu", completed: 3, missed: 2 },
  { day: "Fri", completed: 5, missed: 0 },
  { day: "Sat", completed: 4, missed: 1 },
  { day: "Sun", completed: 5, missed: 0 },
];

export const mockAlertFrequency = [
  { day: "Mon", alerts: 1 },
  { day: "Tue", alerts: 3 },
  { day: "Wed", alerts: 0 },
  { day: "Thu", alerts: 2 },
  { day: "Fri", alerts: 1 },
  { day: "Sat", alerts: 4 },
  { day: "Sun", alerts: 1 },
];

export const mockRecognitionAccuracy = [
  { month: "Jan", accuracy: 89 },
  { month: "Feb", accuracy: 91 },
  { month: "Mar", accuracy: 88 },
  { month: "Apr", accuracy: 93 },
  { month: "May", accuracy: 94 },
  { month: "Jun", accuracy: 96 },
];

export const mockKnownFaces = [
  { id: 1, name: "Sarah Thompson", relation: "Daughter", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face", recognitions: 142 },
  { id: 2, name: "James Thompson", relation: "Son", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", recognitions: 89 },
  { id: 3, name: "Dr. Emily Chen", relation: "Doctor", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face", recognitions: 34 },
  { id: 4, name: "Maria Garcia", relation: "Nurse", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face", recognitions: 67 },
];
