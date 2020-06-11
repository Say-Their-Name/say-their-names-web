import React from 'react';
import PropTypes from 'prop-types';
import { TabActive, TabInactive, TabNav } from './styles';

const Tabs = ({ locations, currentTab, setState }) => {
  const Tab = ({ index, label }) => {
    Tab.propTypes = {
      index: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    };

    if (index === undefined && currentTab === null) {
      return <TabActive onClick={() => setState(index)}>{label}</TabActive>;
    }
    if (index === currentTab) {
      return <TabActive onClick={() => setState(index)}>{label}</TabActive>;
    }
    return <TabInactive onClick={() => setState(index)}>{label}</TabInactive>;
  };

  return (
    <TabNav>
      <Tab index={undefined} label="All" />
      {locations.map((item, i) => (
        <Tab key={item} index={i} label={item} />
      ))}
    </TabNav>
  );
};

// Example Usage
// const sampleData = ['One', 'Two', 'Three'];
// const [activeTab, setActiveTab] = useState();
// <Tabs locations={sampleData} setState={setActiveTab} currentTab={activeTab}/>

Tabs.defaultProps = {
  currentTab: null
};

Tabs.propTypes = {
  locations: PropTypes.instanceOf(Array).isRequired,
  currentTab: PropTypes.number,
  setState: PropTypes.func.isRequired
};

export default Tabs;
