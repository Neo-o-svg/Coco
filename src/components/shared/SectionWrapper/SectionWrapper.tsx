import type { ReactNode } from "react";

import useInView from "../../../hooks/useInView";

import Container from "../../Container/Container";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  animateClassName?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  animateClassName = "",
  id,
}: SectionWrapperProps) {
  const { ref, isInView } = useInView();

  return (
    <Container>
      <div
        id={id}
        ref={ref}
        className={`section fullHeightWrapper  ${className} ${isInView ?? animateClassName}`}
      >
        {children}
      </div>
    </Container>
  );
}
