import { cn } from "@/lib/utils";
import type { FC } from "react";

type ContainerProps = React.ComponentProps<"div">;

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
