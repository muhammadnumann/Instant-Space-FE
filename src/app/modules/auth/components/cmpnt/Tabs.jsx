import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLocation } from 'react-router-dom';
import '../cmpnt.css'

function ModalTabs(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(props.tabs[0].name);
  const location = useLocation();
  useEffect(() => {
    // get the tab name from the URL
    const tabName = location.hash.substring(1);
    // find the index of the tab with the matching name
    const tabIndex = tabName ? props.tabs.findIndex(tab => tab.name === tabName) : 0;
    setActiveTabIndex(tabIndex);
  }, [location]); 
  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
    window.open(`#${props.tabs[index].name}`,"_self");
  };
  return (
    <Tabs selectedIndex={activeTabIndex} 
      onSelect={handleTabSelect}
       >
      <TabList className="flex mediaTabs flex-wrap h-20 pl-0 pb-2 !text-base text-center mb-0 ml-2 h-16  items-center content-center w-full justify-around custom-tabs-head "  >
        {props.tabs.map((tab, name) => (
          
          <Tab  key={name}  className= {`${activeTabIndex === name ? 'color-white fill-white text-white bg-[#0064FA]' : 'bg-[#F1F6F7] '} mediaSingleTab w-[26rem] custom-tabs inline-block sm:p-4 pb-0 pt-3 md:px-4 px-0 text-[#92929D] rounded-lg cursor-pointer fw-bold w-[145px] xl:w-[90px] lg:w-[75px] md:w-[80px] w-[65px] outline-none`}><p id={tab.name} className="mb-6 pl-12 pr-5" >{tab.title}</p></Tab>
          ))}  
      </TabList>
      {props.tabs.map((tab, index) => (
        <TabPanel key={index}>
          <div>{tab.content}</div>
        </TabPanel>
      ))}
    </Tabs>

  );
}

export default ModalTabs;