export default function Feature({ featureName, featureValue, children }: any) {
  return (
    <div className="border-2 border-gray-300 rounded-xl px-4 py-1.5 relative">
      <div className="absolute -top-1.5 left-2 bg-blend-lighten bg-gray-200 rounded-sm px-0.5 text-[8px] text-gray-500 tracking-widest font-bold">
        {featureName}
      </div>
      <span className="text-gray-500 dark:text-gray-300 text-lg">
        {children}
        {featureValue}
      </span>
    </div>
  );
}
