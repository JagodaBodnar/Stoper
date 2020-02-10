"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function pad0(value) {
  var result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

var Stopwatch = (function(_React$Component) {
  _inherits(Stopwatch, _React$Component);

  //class Stopwatch {
  // constructor(display) {
  //     this.running = false;
  //     this.display = display;
  //     this.reset();
  //     this.print(this.times);
  // }
  function Stopwatch(props) {
    _classCallCheck(this, Stopwatch);

    var _this = _possibleConstructorReturn(
      this,
      (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(
        this,
        props
      )
    );

    _this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
    _this.start = _this.start.bind(_this);
    _this.stop = _this.stop.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }
  // reset() {
  //     this.times = {
  //         minutes: 0,
  //         seconds: 0,
  //         miliseconds: 0
  //     };
  // }

  _createClass(Stopwatch, [
    {
      key: "reset",
      value: function reset() {
        this.setState(
          {
            times: {
              minutes: 0,
              seconds: 0,
              miliseconds: 0
            }
          },
          this.print.bind(this)
        );
      }
      // print() {
      //     this.display.innerText = this.format(this.times);
      // }
    },
    {
      key: "print",
      value: function print() {
        this.setState({ display: this.format(this.state.times) });
      }
    },
    {
      key: "format",
      value: function format(times) {
        return (
          pad0(times.minutes) +
          ":" +
          pad0(times.seconds) +
          ":" +
          pad0(Math.floor(times.miliseconds))
        );
      }
      // start() {
      //     if (!this.running) {
      //         this.running = true;
      //         this.watch = setInterval(() => this.step(), 10);
      //     }
      // }
    },
    {
      key: "start",
      value: function start() {
        var _this2 = this;

        if (!this.state.running) {
          this.setState({ running: true });
          this.watch = setInterval(function() {
            return _this2.step();
          }, 10);
        }
      }
      // step() {
      //     if (!this.running) return;
      //     this.calculate();
      //     this.print();
      // }
    },
    {
      key: "step",
      value: function step() {
        if (!this.state.running) return;
        this.calculate();
        this.print();
      }
      // calculate() {
      //     this.times.miliseconds += 1;
      //     if (this.times.miliseconds >= 100) {
      //         this.times.seconds += 1;
      //         this.times.miliseconds = 0;
      //     }
      //     if (this.times.seconds >= 60) {
      //         this.times.minutes += 1;
      //         this.times.seconds = 0;
      //     }
      // }
    },
    {
      key: "calculate",
      value: function calculate() {
        var calTime = {
          minutes: this.state.times.minutes,
          seconds: this.state.times.seconds,
          miliseconds: this.state.times.miliseconds
        };
        calTime.miliseconds += 1;
        if (calTime.miliseconds >= 100) {
          calTime.seconds += 1;
          calTime.miliseconds = 0;
        }
        if (calTime.seconds >= 60) {
          calTime.minutes += 1;
          calTime.seconds = 0;
        }
        this.setState({ times: calTime });
      }
      // stop() {
      //     this.running = false;
      //     clearInterval(this.watch);
      // }
    },
    {
      key: "stop",
      value: function stop() {
        this.setState({ running: false });
        clearInterval(this.watch);
      }

      // const stopwatch = new Stopwatch(
      //     document.querySelector('.stopwatch'));

      //     let startButton = document.getElementById('start');
      //     startButton.addEventListener('click', () => stopwatch.start());

      //     let stopButton = document.getElementById('stop');
      //     stopButton.addEventListener('click', () => stopwatch.stop());

      //     let resetButton = document.getElementById('reset');
      //     resetButton.addEventListener('click', () => stopwatch.restart());
    },
    {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "counter" },
          React.createElement(
            "nav",
            { className: "controls" },
            React.createElement(
              "a",
              { className: "button1", onClick: this.start },
              React.createElement("i", { className: "fas fa-play" }),
              "Start"
            ),
            React.createElement(
              "a",
              { className: "button2", onClick: this.stop },
              React.createElement("i", { className: "fas fa-stop" }),
              "Stop"
            ),
            React.createElement(
              "a",
              { className: "button3", onClick: this.reset },
              React.createElement("i", { className: "fas fa-sync-alt" }),
              "Reset"
            )
          ),
          React.createElement(
            "div",
            { className: "stopwatch", id: "watch" },
            this.state.display
          )
        );
      }
    }
  ]);

  return Stopwatch;
})(React.Component);

ReactDOM.render(
  React.createElement(Stopwatch, null),
  document.getElementById("app")
);
