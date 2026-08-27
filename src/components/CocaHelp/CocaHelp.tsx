import { cocaHelpHeaderData } from "../../data";

import Section from "../templates/Section";
import HelpCards from "../HelpCards/HelpCards";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";

import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";

export default function CocaHelp() {
  return (
    <Section darkBg>
      {(isInView) => (
        <>
          <LeftToRightElement isInView={isInView} delay="0.2">
            <SectionTitle
              title={cocaHelpHeaderData.title}
              style={{ color: "var(--accent", width: "800px" }}
            />
          </LeftToRightElement>
          <LeftToRightElement isInView={isInView}>
            <SectionSubtitle
              text={cocaHelpHeaderData.subtitle}
              style={{ width: "660px" }}
            />
          </LeftToRightElement>
          <HelpCards isInView={isInView} />
        </>
      )}
    </Section>
  );
}
