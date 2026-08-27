import useInView from "../../hooks/useInView";

import Container from "./Container/Container";

interface SectionProps {
  darkBg?: boolean;
  className?: string;
  children: (isInView: boolean) => React.ReactNode;
}

export default function Section({
  darkBg,
  className = "",
  children,
}: SectionProps) {
  const { ref, isInView } = useInView();

  const content = (
    <Container>
      <div ref={ref} className={`section ${className}`}>
        {children(isInView)}
      </div>
    </Container>
  );

  return darkBg ? <div className="darkBgWrapper">{content}</div> : content;
}
