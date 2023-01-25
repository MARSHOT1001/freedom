class Clock {
  constructor(elementId) {
    this.clock = document.querySelector(`h2#${elementId}`);
  }

  getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    this.clock.innerText = `${hours}:${minutes}:${seconds}`;
  }

  start() {
    this.getClock();
    setInterval(this.getClock.bind(this), 1000);
  }
}

const myClock = new Clock("clock");
myClock.start();
