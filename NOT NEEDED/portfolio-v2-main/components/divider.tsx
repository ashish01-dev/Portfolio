import { cn } from "@/lib/utils";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className="w-full">
      <div
        className={cn(
          "relative z-0 mx-auto h-px max-w-3xl overflow-visible",
          className,
        )}
      >
        <div className="bg-border absolute left-full h-px w-full" />
        <div className="bg-border h-px w-full" />

        <span className="ring-foreground/10 absolute -top-0.5 -left-0.5 size-1.5 rounded-full bg-[#f9f9f9] ring-1 dark:bg-zinc-800"></span>
        <span className="ring-foreground/10 absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-[#f9f9f9] ring-1 dark:bg-zinc-800"></span>
      </div>
    </div>
  );
};

export default Divider;
