import React from 'react'
import { Background, CO2TextContainer, EssentialSpan, RecordTextContainer, RowDetailContainer, RowTitle, TasksTextContainer, UploadDataLink } from './style'
import { InfoIcon } from '../../assets/images/svg'

const AccordianRecord = ({title, record,task,CO2Content,essential,uploadData }) => {
  return (
    <>
    <Background>
          {essential ? (
            <EssentialSpan component="span">Essential</EssentialSpan>
          ) : (
            <></>
          )}
        <RowTitle>{title} <InfoIcon /></RowTitle>
        <RowDetailContainer>
            <RecordTextContainer>{record} &nbsp; Records </RecordTextContainer>
            <TasksTextContainer>{task} &nbsp; Tasks</TasksTextContainer>
            <CO2TextContainer>{CO2Content} &nbsp; tCO2e</CO2TextContainer>
            <UploadDataLink to={uploadData}>Upload Data &gt;&gt;</UploadDataLink>
        </RowDetailContainer>
    </Background>   
    </>
  )
}

export default AccordianRecord
