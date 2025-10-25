export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pb-4">
      <div className="max-w-4xl mx-auto grid grid-cols-12 gap-6 w-full">
        <div className="col-span-12 text-center mb-12">
          <h1
            className="text-6xl font-bold mb-4"
            style={{ viewTransitionName: "main-title" }}
          >
            Welcome
          </h1>
          <p className="text-neutral-300 text-xl">
            Explore different layouts and animations
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">First Layout</h2>
          <p className="text-neutral-300 mb-6">
            A clean and modern design with smooth transitions between views.
          </p>
          <div className="flex gap-4">
            <div className="p-4 rounded-lg flex-1">
              <div className="text-2xl font-bold text-neutral-50">3</div>
              <div className="text-sm text-neutral-400">Pages</div>
            </div>
            <div className="p-4 rounded-lg flex-1">
              <div className="text-2xl font-bold text-neutral-50">CSS</div>
              <div className="text-sm text-neutral-400">Animations</div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 bg-neutral-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Second Layout</h2>
          <p className="text-neutral-300 mb-6">
            Dark theme with elegant transitions and modern design patterns.
          </p>
          <div className="flex gap-4">
            <div className="bg-neutral-700 p-4 rounded-lg flex-1">
              <div className="text-2xl font-bold text-white">Grid</div>
              <div className="text-sm text-neutral-400">System</div>
            </div>
            <div className="bg-neutral-700 p-4 rounded-lg flex-1">
              <div className="text-2xl font-bold text-white">View</div>
              <div className="text-sm text-neutral-400">Transitions</div>
            </div>
          </div>
        </div>

        <div className="col-span-12 flex justify-center mt-8">
          <div
            className="w-24 h-24 bg-yellow-500 rounded-xl transform rotate-45"
            style={{ viewTransitionName: "floating-element" }}
          />
        </div>
      </div>
    </main>
  );
}
