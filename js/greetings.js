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

class Signin {
  constructor() {
    this.signinForm = document.querySelector("#signin-form");
    this.signinInput = document.querySelector("#signin-form input");
    this.greeting = document.querySelector("#greeting");

    this.HIDDEN_CLASSNAME = "hidden";
    this.USERNAME_KEY = "username";

    this.savedUsername = localStorage.getItem(this.USERNAME_KEY);
    if (this.savedUsername === null) {
      this.signinForm.classList.remove(this.HIDDEN_CLASSNAME);
      this.signinForm.addEventListener("submit", this.onLoginSubmit.bind(this));
    } else {
      this.paintGreetings(this.savedUsername);
    }
  }

  onLoginSubmit(event) {
    event.preventDefault();
    this.signinForm.classList.add(this.HIDDEN_CLASSNAME);
    const username = this.signinInput.value;
    localStorage.setItem(this.USERNAME_KEY, username);
    this.paintGreetings(username);
  }

  paintGreetings(username) {
    const hours = Number(myClock.clock.innerText.split(":")[0]);
    if (hours >= 12 && hours < 17) {
      this.greeting.innerText = `Good Afternoon, ${username}`;
    } else if (hours >= 17 && hours < 22) {
      this.greeting.innerText = `Good Evening, ${username}`;
    } else if (hours >= 22 && hours < 6) {
      this.greeting.innerText = `Good Night, ${username}`;
    } else {
      this.greeting.innerText = `Good Morning, ${username}`;
    }
    this.greeting.classList.remove(this.HIDDEN_CLASSNAME);
  }
}

const myClock = new Clock("clock");
myClock.start();

const signin = new Signin();
