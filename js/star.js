class StarLight {
  constructor() {
    this.body = document.querySelector("body");
    this.appearInterval = 100;
    this.disappearInterval = 1000;
    this.disappearDuration = 2;
  }

  createStar() {
    const star = document.createElement("div");
    star.style.height = "8px";
    star.style.width = "8px";
    star.style.position = "absolute";
    star.style.top = `${Math.random() * 90}%`;
    star.style.left = `${Math.random() * 90}%`;
    star.style.backgroundColor = "#fff58c";
    star.style.borderRadius = "50%";
    this.body.appendChild(star);
    setTimeout(() => {
      this.body.removeChild(star);
    }, this.disappearInterval);
  }

  start() {
    setInterval(() => {
      this.createStar();
    }, this.appearInterval);
  }
}

const star = new StarLight();
star.start();

// class Star {
//   constructor() {
//     this.appearInterval = 1000; // Interval for star to appear (in milliseconds)
//     this.disappearInterval = 2000; // Interval for star to disappear (in milliseconds)
//     this.fadeDuration = 2; // Duration for star to fade in/out (in seconds)
//     this.body = document.querySelector("body");
//   }

//   createStar() {
//     const star = document.createElement("div");
//     star.style.height = "8px";
//     star.style.width = "8px";
//     star.style.position = "absolute";
//     star.style.top = `${Math.random() * 100}%`;
//     star.style.left = `${Math.random() * 100}%`;
//     star.style.backgroundColor = "white";
//     star.style.borderRadius = "50%";
//     star.style.transition = `opacity ${this.fadeDuration}s`;
//     star.style.opacity = 0;
//     this.body.appendChild(star);
//     setTimeout(() => {
//       star.style.opacity = 1;
//       setTimeout(() => {
//         star.style.opacity = 0;
//         setTimeout(() => {
//           this.body.removeChild(star);
//         }, this.fadeDuration * 1000);
//       }, this.disappearInterval);
//     }, this.fadeDuration * 1000);
//   }

//   start() {
//     setInterval(() => {
//       this.createStar();
//     }, this.appearInterval);
//   }
// }
