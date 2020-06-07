import React from 'react';
import PropTypes from 'prop-types';
import { TabActive, TabInactive } from './styles';

const Tabs = ({ locations, currentTab, setState }) => {
  const Tab = ({ index, label }) => {
    Tab.propTypes = {
      index: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    };

    if (index === currentTab) {
      return <TabActive onClick={() => setState(index)}>{label}</TabActive>;
    }
    return <TabInactive onClick={() => setState(index)}>{label}</TabInactive>;
  };

  return (
    <nav style={{ marginTop: '100px' }}>
      <Tab index={undefined} label="All" />
      {locations.map((item, i) => (
        <Tab index={i} label={item} />
      ))}
    </nav>
  );
};


// Example Usage
// const sampleData = ['One', 'Two', 'Three'];
// const [activeTab, setActiveTab] = useState();
// <Tabs locations={sampleData} setState={setActiveTab} currentTab={activeTab}/>

Tabs.propTypes = {
  locations: PropTypes.instanceOf(Array).isRequired,
  currentTab: PropTypes.number.isRequired,
  setState: PropTypes.func.isRequired
};
