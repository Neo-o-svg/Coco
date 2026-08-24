import type { ReactNode } from "react";

import useInView from "../../../hooks/useInView";

import Container from "../../Container/Container";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";

interface SectionWrapperProps {
  children: ReactNode;
  title: string;
  text: string;
  headerClassName?: string;
  wrapperClassName?: string;
  animateClassName?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  title,
  text,
  headerClassName = "",
  wrapperClassName = "",
  animateClassName = "",
  id = "",
}: SectionWrapperProps) {
  const { ref, isInView } = useInView();

  return (
    <Container>
      <div
        id={id}
        ref={ref}
        className={`section fullHeightWrapper  ${wrapperClassName} ${isInView ?? animateClassName}`}
      >
        <SectionHeader title={title} text={text} className={headerClassName} />
        {children}
      </div>
    </Container>
  );
}
