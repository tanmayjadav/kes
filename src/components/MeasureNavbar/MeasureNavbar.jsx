import * as React from 'react';

import { TabListContainer, TabLists,CustomIcon, Tabs, LastUpdatedSpan, LastUpdatedDateAndTimeSpan, CustomTabPanel, CustomTabContext } from './style';
import MeasureDataUpload from '../../pages/Measure/dataUpload/MeasureDataUpload';
import { Background } from './style';
import { LastUpdatedDateAndTime } from './constant';
import { CalenderIcon } from '../../assets/images/svg/index.js';

export default function MeasureNavbar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Background>
      <CustomTabContext value={value}>
        <TabListContainer>
          <TabLists onChange={handleChange} aria-label="lab API tabs example">
            <Tabs label="Data Upload" value="1" />
            <Tabs label="Speed Data Review" value="2" />
            <Tabs label="Activity Data Review" value="3" />
          </TabLists>
          <LastUpdatedSpan> <CustomIcon><CalenderIcon /></CustomIcon>  Last Updated:{<LastUpdatedDateAndTimeSpan>{LastUpdatedDateAndTime}</LastUpdatedDateAndTimeSpan>}</LastUpdatedSpan>
        </TabListContainer>
        <CustomTabPanel value="1" ><MeasureDataUpload/></CustomTabPanel>
        <CustomTabPanel value="2" >Speed Data Review</CustomTabPanel>
        <CustomTabPanel value="3" >Activity Data Review</CustomTabPanel>
      </CustomTabContext>
    </Background>
  );
}