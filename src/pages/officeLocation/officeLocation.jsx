import { Container, Step, Stepper, Typography } from "@mui/material";
import {
  CompleteIcon,
  InActiveIcon,
  DropdownIcon,
  YellowIconTracker,
} from "../../assets/images/svg";
import Navbar from "../../components/navbar";
import AddIcon from "@mui/icons-material/Add";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import {
  AccordionBody,
  AccordionContainer,
  Background,
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionSummary,
  CustomAddMoreButton,
  CustomAddMoreButtonTypography,
  CustomDetails,
  CustomFooterRightText,
  CustomOfficeLocation,
  CustomStepLabel,
  CustomSubDetails,
  CustomWelcome,
  FooterButtons,
  FooterLeftButton,
  FooterRightButton,
  LeftContainer,
  OfficeLocationBox,
  QontoConnector,
  RightContainer,
  SubCustomCompanyTitle,
  WelcomeStack,
} from "./style";
import { steps, accordionDetails, heading, rows } from "./constant";
import { useState } from "react";
import AccordionTable from "../../components/accordionTable/accordionTable";

const OfficeLocation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepBack = () => {
    setActiveStep((prevState) => prevState > 0 && prevState - 1);
  };

  const handleStepNext = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  const getStepIcon = (index) => {
    if (index === activeStep) {
      return <YellowIconTracker />;
    } else if (index < activeStep) {
      return <CompleteIcon />;
    } else {
      return <InActiveIcon />;
    }
  };

  return (
    <>
      <Background>
        <Container maxWidth="lg">
          <OfficeLocationBox>
            <Navbar />
            <WelcomeStack>
              <LeftContainer>
                <CustomWelcome>Welcome</CustomWelcome>
                <SubCustomCompanyTitle variant="h6" color="white">
                  ACME CORP
                </SubCustomCompanyTitle>
              </LeftContainer>
              <RightContainer>
                <Stepper
                  activeStep={activeStep}
                  alternativeLabel
                  connector={<QontoConnector />}
                >
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <CustomStepLabel icon={getStepIcon(index)}>
                        {label}
                      </CustomStepLabel>
                    </Step>
                  ))}
                </Stepper>
              </RightContainer>
            </WelcomeStack>
            <AccordionBody>
              <CustomOfficeLocation>Office Locations</CustomOfficeLocation>
              <CustomDetails>
                Provide details about locations you have offices in
              </CustomDetails>
              <CustomSubDetails>
                If you operate in more than one office locations then it’s
                advisable to add your different office locations here.
              </CustomSubDetails>
              <CustomSubDetails>
                This allows you to report the emissions and performance of all
                your different locations.
              </CustomSubDetails>
              <AccordionContainer>
                {accordionDetails.map((item, index) => (
                  <CustomAccordion key={index}>
                    <CustomAccordionSummary
                      expandIcon={<DropdownIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>{item.summary}</Typography>
                    </CustomAccordionSummary>
                    <CustomAccordionDetails>
                      <AccordionTable heading={heading} rows={rows} />
                      <CustomAddMoreButton>
                        <AddIcon fontSize="20" />
                        <CustomAddMoreButtonTypography>
                          Add More
                        </CustomAddMoreButtonTypography>
                        <AddIcon fontSize="16" />
                      </CustomAddMoreButton>
                    </CustomAccordionDetails>
                  </CustomAccordion>
                ))}
              </AccordionContainer>
              <FooterButtons>
                <FooterLeftButton
                  onClick={handleStepBack}
                  disabled={activeStep === 0}
                >
                  <KeyboardDoubleArrowLeftIcon />
                  <Typography>Previous</Typography>
                </FooterLeftButton>
                <FooterRightButton onClick={handleStepNext}>
                  <CustomFooterRightText>
                    I don’t have any additional office location to add
                  </CustomFooterRightText>
                  <KeyboardDoubleArrowRightIcon />
                </FooterRightButton>
              </FooterButtons>
            </AccordionBody>
          </OfficeLocationBox>
        </Container>
      </Background>
    </>
  );
};

export default OfficeLocation;
