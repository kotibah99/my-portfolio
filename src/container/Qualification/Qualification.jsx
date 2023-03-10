import { BsBriefcase } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";

import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { PanelItem } from "../../components/PanelItem/PanelItem";
import { TabPanels } from "../../components/Tabs/TabPanels/TabPanels";
import { Container } from "../../layout/Container/Container";
import { Section } from "../../layout/Section/Section";
import { TabList } from "../../components/Tabs/TabList/TabList";
import { Panel } from "../../components/Tabs/Panel/Panel";
import { Tabs } from "../../components/Tabs/Tabs";
import { Tab } from "../../components/Tabs/Tab/Tab";

export const Qualification = () => {
  return (
    <Section id="qualification">
      <SectionTitle title="Qualification" subtitle="Personal Journey" />

      <Container centerContent={true}>
        <Tabs>
          <TabList>
            <Tab id={0}>
              <SlGraduation /> Education
            </Tab>
            <Tab id={1}>
              <BsBriefcase /> Work
            </Tab>
          </TabList>

          <TabPanels>
            <Panel id={0}>
              <PanelItem
                title="Informatics engineering "
                subtitle="Tishreen University"
                date="2017 - 2022"
              />
              <PanelItem
                title="Accountant"
                subtitle="Damascus University"
                date="2017 - 2021"
                trackOnLeft={true}
              />
            </Panel>
            <Panel id={1}>
              <PanelItem
                title="Graduation Project"
                subtitle="Tishreen University"
                date="Feb 2022 - Oct 2022"
                trackOnLeft={true}
              />
            </Panel>
          </TabPanels>
        </Tabs>
      </Container>
    </Section>
  );
};
