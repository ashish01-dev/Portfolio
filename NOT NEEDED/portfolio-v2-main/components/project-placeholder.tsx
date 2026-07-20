const pattern =
  "bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]";

const ProjectPlaceholderSkeleton = () => {
  return (
    <div className="group flex flex-col gap-4 rounded-lg pb-4">
      <div className="relative aspect-60/40 overflow-hidden rounded-lg border border-(--pattern-fg) transition-all duration-300 group-hover:scale-[1.05]">
        <div className={`absolute inset-0 ${pattern} bg-size-[10px_10px]`} />
        <div className="relative flex h-full items-center justify-center">
          <span className="bg-(--pattern-fg) bg-clip-text font-serif text-2xl italic text-transparent">
            Coming Soon
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 transition-all duration-300 group-hover:translate-x-4">
        <span
          className={`inline-block h-5 w-3/5 rounded-sm ${pattern} bg-size-[6px_6px]`}
        />
        <span
          className={`inline-block h-4 w-full rounded-sm ${pattern} bg-size-[6px_6px]`}
        />
        <span
          className={`mb-1 inline-block h-4 w-4/5 rounded-sm ${pattern} bg-size-[6px_6px]`}
        />
        <div className="mt-auto flex items-center -space-x-2 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className={`inline-block h-7 w-7 rounded-full border border-(--pattern-fg) ${pattern} bg-size-[6px_6px]`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPlaceholderSkeleton;
