import type { AnimatedElementProps } from "../../types";

export default function AnimatedElement({
  children,
  duration = "1",
  delay = "0.5",
  distance = "100",
  className,
}: AnimatedElementProps) {
  return (
    <div
      className={className}
      style={
        {
          "--duration": `${duration}s`,
          "--delay": `${delay}s`,
          "--distance": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
