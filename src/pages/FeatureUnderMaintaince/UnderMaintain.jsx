import React from 'react'
import { Background,  ContentContainer, TextContainer, TextDetail, TextNote, TextTitle,} from './style';
import {UnderMaintenanceImg} from '../../assets/images/svg/UnderMaintenanceImg';
import { details, thankYouNote, title } from './constant';

const UnderMaintain = () => {
  return (
    <>
    <Background>
        <ContentContainer>
          <UnderMaintenanceImg />
          <TextContainer>
            <TextTitle>{title}</TextTitle>
            <TextDetail>{details}</TextDetail>
            <TextNote>{thankYouNote}</TextNote>
          </TextContainer>
        </ContentContainer>
    </Background>
    </>
  )
}

export default UnderMaintain
