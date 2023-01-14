import { CiMedal } from "react-icons/ci";
import { FaHackerrank } from "react-icons/fa";
import { BiCertification } from "react-icons/bi";
import { SiLeetcode, SiCodeforces, SiUdemy } from "react-icons/si";

import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { PanelItem } from "../../components/PanelItem/PanelItem";
import { TabPanels } from "../../components/Tabs/TabPanels/TabPanels";
import { Container } from "../../layout/Container/Container";
import { Section } from "../../layout/Section/Section";
import { TabList } from "../../components/Tabs/TabList/TabList";
import { Panel } from "../../components/Tabs/Panel/Panel";
import { Tabs } from "../../components/Tabs/Tabs";
import { Tab } from "../../components/Tabs/Tab/Tab";

export const Achievements = () => {
  return (
    <Section>
      <SectionTitle
        title="Achievements"
        subtitle="Consistency leads to great achievements"
      />

      <Container centerContent={true}>
        <Tabs>
          <TabList>
            <Tab id={0}>
              <BiCertification /> Certifications & Licenses
            </Tab>
            <Tab id={1}>
              <CiMedal /> Competitive Programming
            </Tab>
          </TabList>

          <TabPanels>
            <Panel id={0}>
              <PanelItem
                title="Complete NodeJS Developer in 2023 (GraphQL, MongoDB)"
                subtitle={
                  <>
                    <SiUdemy /> Udemy
                  </>
                }
                date="Oct 2022 - No Expiration Date"
                link="https://www.udemy.com/certificate/UC-c3e1452d-7d8e-4211-af18-45b0548ba64/"
                text="Show credential"
              />
              <PanelItem
                title="React - The Complete Guide (incl Hooks, React Router, Redux)"
                subtitle={
                  <>
                    <SiUdemy /> Udemy
                  </>
                }
                date="Oct 2022 - No Expiration Date"
                link="https://www.udemy.com/certificate/UC-1a1ee55d-18c8-43a1-9264-b1c9ba1dc6a/"
                text="Show credential"
                trackOnLeft={true}
              />
              <PanelItem
                title="The Complete JavaScript Course 2022: From Zero to Expert!"
                subtitle={
                  <>
                    <SiUdemy /> Udemy
                  </>
                }
                date="July 2022 - No Expiration Date"
                link=""
                text="Show credential"
              />
              <PanelItem
                title="Build Responsive Real-World Websites with HTML and CSS"
                subtitle={
                  <>
                    <SiUdemy /> Udemy
                  </>
                }
                date="May 2022 - No Expiration Date"
                link=""
                text="Show credential"
                trackOnLeft={true}
              />
            </Panel>
            <Panel id={1}>
              <PanelItem
                title="SQL Gold Badge"
                subtitle={
                  <>
                    <FaHackerrank /> hackerrank
                  </>
                }
                date="December 2021 - No Expiration Date"
                link="https://www.hackerrank.com/kotibahmohamad"
                text="Show profile"
                trackOnLeft={true}
              />
              <PanelItem
                title="50+ Problems"
                subtitle={
                  <>
                    <SiCodeforces /> CodeForces
                  </>
                }
                date="May 2021 - No Expiration Date"
                link="https://codeforces.com/profile/kotibahmohamad"
                text="Show profile"
              />

            </Panel>
          </TabPanels>
        </Tabs>
      </Container>
    </Section>
  );
};
