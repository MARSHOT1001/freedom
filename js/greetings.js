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
    this.greeting.innerText = `Good Morning, ${username}`;
    this.greeting.classList.remove(this.HIDDEN_CLASSNAME);
  }
}

const signin = new Signin();
