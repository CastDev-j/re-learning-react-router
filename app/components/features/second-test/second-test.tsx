const SecondTest = () => {
  return (
    <main className="flex flex-col items-center justify-center pb-4">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 w-full">
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
          <h1
            className="text-6xl font-bold mb-4"
            style={{ viewTransitionName: "main-title" }}
          >
            Grid Explorer
          </h1>
          <p className="text-neutral-300 text-xl">Asymmetric design system</p>
        </div>

        <div
          className="col-span-12 lg:col-span-7 p-8 rounded-2xl shadow-lg"
          style={{ viewTransitionName: "feature-card" }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Analytics Dashboard
          </h2>
          <p className="text-neutral-300 mb-6">
            Comprehensive data visualization and monitoring tools for real-time
            insights and performance metrics across multiple platforms.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-neutral-800 p-4 rounded-lg">
              <div className="text-3xl font-bold text-neutral-200">128</div>
              <div className="text-xs text-neutral-400">Active Users</div>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg">
              <div className="text-3xl font-bold text-neutral-200">94%</div>
              <div className="text-xs text-neutral-400">Uptime</div>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg">
              <div className="text-3xl font-bold text-neutral-200">24/7</div>
              <div className="text-xs text-neutral-400">Monitoring</div>
            </div>
          </div>
        </div>

        <div className="col-span-6 lg:col-span-4 flex items-center justify-center">
          <div
            className="w-40 h-40 bg-blue-500 rounded-3xl shadow-lg transform rotate-12"
            style={{ viewTransitionName: "floating-element" }}
          />
        </div>

        <div className="col-span-6 lg:col-span-8 flex items-center justify-end">
          <p className="text-neutral-500 text-sm">Navigate between views</p>
        </div>
      </div>
    </main>
  );
};

export default SecondTest;
