import React from 'react';
import MapContainer from './map/MapContainer';
import './App.css';

class App extends React.Component {
  openRightPanel = () => {
    console.log(this.refs.rightPanel);
    (this.refs.rightPanel as any).classList.toggle('opened');
  }
  render() {
    return (
      <div className="App">
      <div className="header">HEADER</div>
      <div className="view">
        <div className="content">
          <MapContainer />
          <div ref="rightPanel" className="right-panel">
            <div className="panel">
            RIGHT PANEL
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            </div>
          </div>
        </div>
        <div className="footer">
          FOOTER
          <button onClick={this.openRightPanel}>Open</button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
