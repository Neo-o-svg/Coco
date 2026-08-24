import useInView from "../../hooks/useInView";

import Container from "../Container/Container";
import HelpCards from "../HelpCards/HelpCards";
import SectionSubtitle from "../shared/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

import LeftToRightElement from "../animationElements/LeftToRightElement/LeftToRightElement";

import sharedStyles from "../shared/Section.module.scss";

export default function CocaHelp() {
  const { ref, isInView } = useInView();

  const headerData = {
    title: `Coca help our client solve complex customer problems with date
            that does more.`,
    text: `Our platform offers the modern enterprise full control of how date
            can be access and used with industry leading software solutions
            for identity, activation, and date collaboration`,
  };

  return (
    <div className={sharedStyles.darkBgWrapper}>
      <Container>
        <div ref={ref} className="section">
          <LeftToRightElement isInView={isInView} delay="0.2">
            <SectionTitle
              title={headerData.title}
              style={{ color: "var(--accent", width: "800px" }}
            />
          </LeftToRightElement>
          <LeftToRightElement isInView={isInView}>
            <SectionSubtitle
              text={headerData.text}
              style={{ width: "660px" }}
            />
          </LeftToRightElement>
          <HelpCards isInView={isInView} />
        </div>
      </Container>
    </div>
  );
}
