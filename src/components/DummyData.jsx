export const DummyData = {
  totalPatients: 150,
  todayAppointments: [
    { id: 'a1', time: '10:00 AM', patient: 'Alice Johnson' },
    { id: 'a2', time: '11:30 AM', patient: 'Bob Smith' },
  ],
  upcomingAppointments: [
    { id: 'u1', date: '2025-06-20', time: '09:00 AM', patient: 'Carol White' },
    { id: 'u2', date: '2025-06-21', time: '02:00 PM', patient: 'David Brown' },
  ],
  patientTrends: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],//x-axis
    datasets: [
      {
        label: 'Patient Visits',
        data: [65, 59, 80, 81, 56, 55],//y-axis
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  },
  appointmentStatus: {
    labels: ['Confirmed', 'Pending', 'Canceled'],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ['#4f46e5', '#facc15', '#ef4444'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 1,
      },
    ],
  },
};

// export default DummyData;
