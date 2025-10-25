const FirstTest = () => {
  return (
    <main className="flex flex-col items-center justify-center pb-4">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 w-full">
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ viewTransitionName: "main-title" }}
          >
            First Test
          </h1>
          <p className="text-neutral-300 text-lg">Minimal design approach</p>
        </div>

        <div className="col-span-12 lg:col-span-8 p-8 rounded-2xl ">
          <h2 className="text-3xl font-bold mb-4">Content Section</h2>
          <p className="text-neutral-300 mb-6">
            This layout demonstrates a different content distribution while
            maintaining the same view transition elements for smooth animations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg">
              <div className="text-2xl font-bold text-neutral-50">42</div>
              <div className="text-sm text-neutral-300">Items</div>
            </div>
            <div className="p-4 rounded-lg">
              <div className="text-2xl font-bold text-neutral-50">100%</div>
              <div className="text-sm text-neutral-300">Complete</div>
            </div>
          </div>
        </div>

        <div className="col-span-6 lg:col-span-3 flex items-center justify-center">
          <div
            className="w-32 h-32 bg-red-500 rounded-2xl"
            style={{ viewTransitionName: "floating-element" }}
          />
        </div>

        <div className="col-span-6 lg:col-span-9 flex items-center justify-end">
          <p className="text-neutral-500 text-sm">First test layout variant</p>
        </div>
      </div>
    </main>
  );
};

export default FirstTest;
