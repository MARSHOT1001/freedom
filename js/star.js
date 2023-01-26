class Starlight {
  static starColor = [
    "#C77AA4",
    "#5572AB",
    "#D2F0FF",
    "#949EAA",
    "#AE673B",
    "#E2EDF4",
  ];

  MIN_DURATION = 3;
  body = document.querySelector("body");

  create() {
    const starlight = document.createElement("div");
    const initialOpacity = Math.random();
    const delay = Math.random() * 10;
    const duration = Math.random() * 20 + this.MIN_DURATION;

    starlight.classList.add("starlight");
    starlight.style.left = `${Math.random() * 90}%`;
    starlight.style.top = `${Math.random() * 90}%`;
    starlight.style.animationDelay = `${delay}s`;
    starlight.style.opacity = initialOpacity;
    starlight.style.animation = `starlight ${duration}s ease-in-out`;
    starlight.style.backgroundColor = `${
      Starlight.starColor[
        Math.floor(Math.random() * Starlight.starColor.length)
      ]
    }`;
    starlight.style.boxShadow = `0px 0px 10px ${
      Starlight.starColor[
        Math.floor(Math.random() * Starlight.starColor.length)
      ]
    }`;
    this.body.appendChild(starlight);

    setTimeout(() => {
      this.body.removeChild(starlight);
      this.create();
    }, (duration + delay) * 1000);
  }

  start() {
    for (let index = 0; index < 50; index++) {
      setTimeout(() => this.create(), 500 * index);
    }
  }
}

const starlight = new Starlight();
starlight.start();
