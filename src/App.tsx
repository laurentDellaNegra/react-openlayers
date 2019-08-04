import React from 'react';
import MapContainer from './map/MapContainer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
    <div className="header">HEADER</div>
    <div className="view">
      <div className="content">
        <MapContainer />
      </div>
      <div className="footer">FOOTER</div>
    </div>
    </div>
  );
}

export default App;
