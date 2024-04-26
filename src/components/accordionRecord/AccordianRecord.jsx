import React from "react";
import {
  Background,
  CO2TextContainer,
  CustomIconButton,
  CustomTooltip,
  EssentialSpan,
  MandatorySpan,
  RecommendedSpan,
  RecordTextContainer,
  RowDetailContainer,
  RowTitle,
  TasksTextContainer,
  UploadDataLink,
  AccordionButton,
  RowTitleContainer
} from "./style";
import { InfoIcon } from "../../assets/images/svg";
import { IconButton, Tooltip } from "@mui/material";

const AccordianRecord = ({
  title,
  record,
  task,
  CO2Content,
  category,
  uploadData,
  infoToolTip,
  ButtonHandler,
}) => {
  return (
    <AccordionButton onClick={ButtonHandler}>
      <Background>
        {category === "Essential" && (
          <EssentialSpan component="span">{category}</EssentialSpan>
        )}
        {category === "Recommended" && (
          <RecommendedSpan component="span">{category}</RecommendedSpan>
        )}
        {category === "Mandatory" && (
          <MandatorySpan component="span">{category}</MandatorySpan>
        )}

        <RowTitleContainer>
        <RowTitle>
          <CustomTooltip title={infoToolTip}>
          {title} {" "} 
            <CustomIconButton>
              <InfoIcon />
            </CustomIconButton>
          </CustomTooltip>
        </RowTitle>
        </RowTitleContainer>
        <RowDetailContainer>
          <RecordTextContainer>{record} &nbsp; Records </RecordTextContainer>
          <TasksTextContainer>{task} &nbsp; Tasks</TasksTextContainer>
          <CO2TextContainer>{CO2Content} &nbsp; tCO2e</CO2TextContainer>
          <UploadDataLink to={uploadData}>Upload Data &gt;&gt;</UploadDataLink>
        </RowDetailContainer>
      </Background>
    </AccordionButton>
  );
};

export default AccordianRecord;
