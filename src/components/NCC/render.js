import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Cards from "./Composants";


class Cat extends Component {
  render() {
    return (
      <Tabs
        defaultTab="Config"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList>
          <Tab tabFor="Config">Config</Tab>
          <Tab tabFor="Composants">Composants</Tab>
          <Tab tabFor="News">News</Tab>
        </TabList>
        <TabPanel tabId="Config">
          <p>Tab 1 content</p>
        </TabPanel>
        <TabPanel tabId="Composants">
          <Cards />
        </TabPanel>
        <TabPanel tabId="News">
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Cat;