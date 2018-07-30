# simple-canvas-react-gauge

React component of a full or half-circle gauge with percent display and optional label. Uses canvas, supports reactivity, animation and customization of display.

![halfgaugenolabel](https://user-images.githubusercontent.com/535134/43424502-8eef8cd6-9404-11e8-8130-36d1f8a1f176.png)

![fullgaugewithlabel](https://user-images.githubusercontent.com/535134/43424503-8f18f09e-9404-11e8-9a57-36ff4e232e41.png)

## Installation
```
git clone https://github.com/gmanfredi/simple-canvas-react-gauge.git
cd simple-canvas-react-gauge
npm install
npm start
```

## Usage
Demo is the main app.  The gauge component is in /src/components/ folder.

### Properties available:
* percent: PropTypes.number.isRequired,
* animate: PropTypes.bool,
* bgcolor: PropTypes.string,
* color: PropTypes.string,
* halfCircle: PropTypes.bool,
* lineWidthPercent: PropTypes.number,
* maxWidth: PropTypes.number,
* startPercent: PropTypes.number,
* label: PropTypes.string,
* textColor: PropTypes.string

## License

The MIT License (MIT)

Copyright (c) 2017 Gary Manfredi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
