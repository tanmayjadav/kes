import React from "react";
import {
  Background,
  Container,
  TopBox,
  HelpCenterLink,
  TopBoxEndText,
  TopBoxMiddleText,
  TopBoxTitle,
  MinorContainer,
  IconsContainer,
  AccordianContainer,
  CustomAccordionDetails,
  CustomAccordion,
  CustomAccordionSummary,
} from "./style";
import { TopBoxText, TopBoxTitleText, scopeData, SpeedAnalysis } from "./constant";
import { SearchIcon, FilterIcon } from "../../../assets/images/svg/index";
import AccordianRecord from "../../../components/accordionRecord/AccordianRecord";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const MeasureDataUpload = () => {
  const uploadDataHandler = () => {
    console.log("data Upload");
  };
  const [expanded, setExpanded] = React.useState('Scope 1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
      <Background>
        <Container>
          <TopBox>
            <TopBoxTitle>{TopBoxTitleText}</TopBoxTitle>
            <TopBoxMiddleText>{TopBoxText}</TopBoxMiddleText>
            <TopBoxEndText>
              Visit the <HelpCenterLink href="#"> help center </HelpCenterLink>{" "}
              to get more Information
            </TopBoxEndText>
          </TopBox>
          <MinorContainer>
            <IconsContainer>
              <SearchIcon /> <FilterIcon />
            </IconsContainer>
            <AccordianRecord
              title={SpeedAnalysis.title}
              record={SpeedAnalysis.record}
              task={SpeedAnalysis.task}
              CO2Content={SpeedAnalysis.CO2Content}
              essential={SpeedAnalysis.title}
              uploadDataHandler={uploadDataHandler}
            />
             <AccordianContainer>
            {scopeData.map((scope, index) =>
                <CustomAccordion key={scope.title} expanded={expanded === scope.title} onChange={handleChange(scope.title)} >
                  <CustomAccordionSummary
                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }}/>}
                  >
                    {scope.title}
                  </CustomAccordionSummary>
                  <CustomAccordionDetails>
                    {scope.subRecords.map((subRecord) => (
                      <AccordianRecord
                        key={subRecord.title}
                        title={subRecord.title}
                        record={subRecord.record}
                        task={subRecord.task}
                        CO2Content={subRecord.CO2Content}
                        essential={subRecord.essential}
                        uploadDataHandler={uploadDataHandler}
                      />
                    ))}
                  </CustomAccordionDetails>
                </CustomAccordion>
              
            )}
          </AccordianContainer>
          </MinorContainer>
        </Container>
      </Background>
  );
};

export default MeasureDataUpload;
