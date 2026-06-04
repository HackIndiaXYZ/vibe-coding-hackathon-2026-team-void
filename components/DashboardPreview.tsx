export default function DashboardPage() {
return ( <main className="min-h-screen bg-black text-white p-4 md:p-10"> <div className="flex flex-wrap gap-4 mb-8 border-b border-zinc-800 pb-4 text-sm md:text-base"> <a href="/" className="text-cyan-400">Home</a> <a href="/dashboard" className="text-cyan-400">Dashboard</a> <a href="/analyze" className="text-cyan-400">Analyze</a> <a href="/forecast" className="text-cyan-400">Forecast</a> <a href="/heatmap" className="text-cyan-400">Heatmap</a> </div>

```
  <h1 className="text-5xl font-bold mb-4">
    SignalX Command Center
  </h1>

  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-8">
    <p className="text-cyan-400 font-semibold">
      ● LIVE MONITORING ACTIVE
    </p>

    <p className="text-zinc-300 mt-2">
      Monitoring 50,000+ students across engineering institutions.
      128 critical signals detected in the last 24 hours.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
    <div className="bg-zinc-900 p-6 rounded-xl">
      <h3 className="text-zinc-400">Students Monitored</h3>
      <p className="text-4xl font-bold text-cyan-400">50K+</p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl">
      <h3 className="text-zinc-400">Signal Accuracy</h3>
      <p className="text-4xl font-bold text-green-400">98%</p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl">
      <h3 className="text-zinc-400">Forecast Window</h3>
      <p className="text-4xl font-bold text-orange-400">90D</p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl">
      <h3 className="text-zinc-400">Active Alerts</h3>
      <p className="text-4xl font-bold text-red-400">128</p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl">
      <h3 className="text-zinc-400">AI Confidence</h3>
      <p className="text-4xl font-bold text-cyan-400">97.8%</p>
    </div>
  </div>
</main>


);
}
