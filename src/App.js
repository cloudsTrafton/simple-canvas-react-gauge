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
      label: ''
    }
    this.randomizePercent = this.randomizePercent.bind(this);
    this.toggleAnimate = this.toggleAnimate.bind(this);
    this.toggleHalfCircle = this.toggleHalfCircle.bind(this);
    this.setLabel = this.setLabel.bind(this);
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

  setLabel(evt, val) {
    this.setState({ label: evt.target.value })
  }

  render() {
    return (
      <div className="main">
        <SimpleReactGauge
          percent={this.state.percent}
          animate={this.state.animate}
          halfCircle={this.state.halfCircle}
          label={this.state.label}
          maxWidth={200}
          lineWidthPercent={13}
        />

        <div className="controls">
          <p>
            <label>Percent: </label>
            <button onClick={this.randomizePercent}>randomize</button>
          </p>
          <p>
            <input type="checkbox" checked={this.state.animate} onChange={this.toggleAnimate} /> animate
          </p>
          <p>
            <input type="checkbox" checked={this.state.halfCircle} onChange={this.toggleHalfCircle} /> half circle
          </p>
          <p>
            <label>Label: </label>
            <input type="text" value={this.state.label} onChange={this.setLabel} />
          </p>

        </div>
      </div>
    )
  }
}

export default App;
