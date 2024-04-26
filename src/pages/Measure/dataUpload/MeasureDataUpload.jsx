import React, { useState ,useEffect} from "react";
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
  SearchIconWrapper,
  Search,
  StyledInputBase,
  CustomButtonFilterIcon,
  CustomPopover,
  PopoverText,
  CustomIconButton,
} from "./style";
import {
  TopBoxText,
  TopBoxTitleText,
  scopeData,
  SpeedAnalysis,
} from "./constant";
import CloseIcon from '@mui/icons-material/Close';
import { SearchIcon, FilterIcon } from "../../../assets/images/svg/index";
import AccordianRecord from "../../../components/accordionRecord/AccordianRecord";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useForm, useWatch, FormProvider } from 'react-hook-form';

const MeasureDataUpload = () => {

  const methods = useForm(); 
  const { register, setValue, watch } = methods; 

  const searchText = watch('search'); 

  const uploadDataHandler = () => {
    console.log("data Upload");
  };
  const [expanded, setExpanded] = useState("Scope 1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const FilterIconButton = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "filter-popover" : undefined;

  return (
    <FormProvider {...methods}>
    <Background>
      <Container>
        <TopBox>
          <TopBoxTitle>{TopBoxTitleText}</TopBoxTitle>
          <TopBoxMiddleText>{TopBoxText}</TopBoxMiddleText>
          <TopBoxEndText>
            Visit the <HelpCenterLink href="#"> help center </HelpCenterLink> to
            get more Information
          </TopBoxEndText>
        </TopBox>
        <MinorContainer>
          <IconsContainer>
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchText}
                {...register('search')}
              />
              {searchText && (
                <CustomIconButton onClick={() => setValue('search', '')}> {/* Use CustomIconButton */}
                  <CloseIcon fontSize="small"/>
                </CustomIconButton>
              )}
            </Search>{" "}
            <CustomButtonFilterIcon
              aria-describedby={id}
              variant="contained"
              onClick={FilterIconButton}
            >
              <FilterIcon /> {/* Render your filter icon here */}
            </CustomButtonFilterIcon>
            <CustomPopover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <PopoverText>Essential</PopoverText>
              <PopoverText>Recommended</PopoverText>
              <PopoverText>Mandatory</PopoverText>
            </CustomPopover>
          </IconsContainer>
          <AccordianRecord
            title={SpeedAnalysis.title}
            record={SpeedAnalysis.record}
            task={SpeedAnalysis.task}
            CO2Content={SpeedAnalysis.CO2Content}
            category={SpeedAnalysis.category}
            uploadDataHandler={uploadDataHandler}
            infoToolTip={SpeedAnalysis.infoToolTip}
            // ButtonHandler={ButtonHandler}
          />
          <AccordianContainer>
            {scopeData.map((scope, index) => (
              <CustomAccordion
                key={scope.title}
                expanded={expanded === scope.title}
                onChange={handleChange(scope.title)}
              >
                <CustomAccordionSummary
                  expandIcon={
                    <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                  }
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
                      category={subRecord.category}
                      uploadDataHandler={uploadDataHandler}
                      infoToolTip={subRecord.infoToolTip}
                    />
                  ))}
                </CustomAccordionDetails>
              </CustomAccordion>
            ))}
          </AccordianContainer>
        </MinorContainer>
      </Container>
    </Background>
    </FormProvider>
  );
};

export default MeasureDataUpload;
