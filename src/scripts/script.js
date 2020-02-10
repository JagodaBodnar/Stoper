function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

class Stopwatch extends React.Component {
  //class Stopwatch {
  // constructor(display) {
  //     this.running = false;
  //     this.display = display;
  //     this.reset();
  //     this.print(this.times);
  // }
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }
  // reset() {
  //     this.times = {
  //         minutes: 0,
  //         seconds: 0,
  //         miliseconds: 0
  //     };
  // }
  reset() {
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
  print() {
    this.setState({ display: this.format(this.state.times) });
  }

  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(
      Math.floor(times.miliseconds)
    )}`;
  }
  // start() {
  //     if (!this.running) {
  //         this.running = true;
  //         this.watch = setInterval(() => this.step(), 10);
  //     }
  // }
  start() {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.step(), 10);
    }
  }
  // step() {
  //     if (!this.running) return;
  //     this.calculate();
  //     this.print();
  // }
  step() {
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
  calculate() {
    let calTime = {
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
  stop() {
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
  render() {
    return (
      <div className="counter">
        <nav className="controls">
          <a className="button1" onClick={this.start}>
            <i className="fas fa-play"></i>Start
          </a>
          <a className="button2" onClick={this.stop}>
            <i className="fas fa-stop"></i>Stop
          </a>
          <a className="button3" onClick={this.reset}>
            <i className="fas fa-sync-alt"></i>Reset
          </a>
        </nav>
        <div className="stopwatch" id="watch">
          {this.state.display}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Stopwatch />, document.getElementById("app"));
