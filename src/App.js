import React, { Component } from 'react';
import SimpleReactGauge from './components/SimpleReactGauge';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      percent: 25,
      animate: true,
      halfCircle: false,
      label: '',
      containerWidth: 240,
      maxWidthEnabled: false,
      maxWidth: 200
    }
    this.randomizePercent = this.randomizePercent.bind(this);
    this.toggleAnimate = this.toggleAnimate.bind(this);
    this.toggleHalfCircle = this.toggleHalfCircle.bind(this);
    this.setLabel = this.setLabel.bind(this);
    this.setMaxWidthEnabled = this.setMaxWidthEnabled.bind(this);
    this.setMaxWidth = this.setMaxWidth.bind(this);
    this.randomizeContainerWidth = this.randomizeContainerWidth.bind(this);
  }

  randomizePercent() {
    const percent = Math.round(Math.random() * 100);
    this.setState({percent });
  }

  toggleAnimate() {
    this.setState({ animate: !this.state.animate });
  }

  toggleHalfCircle() {
    this.setState({ halfCircle: !this.state.halfCircle });
  }

  setLabel(evt) {
    this.setState({ label: evt.target.value })
  }

  setMaxWidthEnabled() {
    this.setState({ maxWidthEnabled: !this.state.maxWidthEnabled });
  }

  setMaxWidth(evt) {
    this.setState({ maxWidth: parseInt(evt.target.value) });
  }

  randomizeContainerWidth() {
    this.setState({ containerWidth: Math.floor(Math.random() * 300) + 100 });
  }

  render() {
    return (
      <div className="main">
        <div id="gaugeContainer" style={{ width: this.state.containerWidth}}>
          <SimpleReactGauge
            percent={this.state.percent}
            animate={this.state.animate}
            halfCircle={this.state.halfCircle}
            label={this.state.label}
            maxWidth={this.state.maxWidthEnabled ? this.state.maxWidth : 0}
            lineWidthPercent={13}
            color="#EE0"
          />
        </div>

        <div className="controls">
          <p>
            <label>percent: </label>
            <button onClick={this.randomizePercent}>randomize</button>
          </p>
          <p>
          <label>animate: </label><input type="checkbox" checked={this.state.animate} onChange={this.toggleAnimate} /> 
          </p>
          <p>
          <label>halfCircle: </label><input type="checkbox" checked={this.state.halfCircle} onChange={this.toggleHalfCircle} /> 
          </p>
          <p>
            <label>label: </label>
            <input type="text" value={this.state.label} onChange={this.setLabel} />
          </p>
          <p>
          <label>maxWidth: </label><input type="checkbox" checked={this.state.maxWidthEnabled} onChange={this.setMaxWidthEnabled} />
            <input type="text" value={this.state.maxWidth} onChange={this.setMaxWidth} disabled={!this.state.maxWidthEnabled} />
          </p>
          <hr></hr>
          <p>
            <label>Width of container: </label>
            <button onClick={this.randomizeContainerWidth}>randomize</button>
          </p>

        </div>
      </div>
    )
  }
}

export default App;
