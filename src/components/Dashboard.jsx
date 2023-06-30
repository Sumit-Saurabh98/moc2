import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tracker from './Tracker';
import Analytics from './Analytics';
import History from './History';
import style from '../Styles/Dashboard.module.css';

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedComponent, setSelectedComponent] = useState(searchParams.get('q') || 'Tracker');

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
    setSearchParams({ q: component });
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Tracker':
        return <Tracker />;
      case 'Analytics':
        return <Analytics />;
      case 'History':
        return <History />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className={style.buttonContainer}>
        <button
          className={selectedComponent === 'Tracker' ? style.activeButton : ''}
          onClick={() => handleButtonClick('Tracker')}
        >
          Tracker
        </button>
        <button
          className={selectedComponent === 'Analytics' ? style.activeButton : ''}
          onClick={() => handleButtonClick('Analytics')}
        >
          Analytics
        </button>
        <button
          className={selectedComponent === 'History' ? style.activeButton : ''}
          onClick={() => handleButtonClick('History')}
        >
          History
        </button>
      </div>
      <div className={style.componentContainer}>{renderComponent()}</div>
    </div>
  );
}

export default Dashboard;
