document.addEventListener("keydown", (event) => {
  if (event.key == "w") {
    let audio = new Audio("./sounds/1.mp3");
    audio.play();
    document.querySelector(".w").classList.add("pressed")
    setTimeout(()=>{
        document.querySelector(".w").classList.remove("pressed")
    }, 100)
  }
  if (event.key == "a") {
    let audio = new Audio("./sounds/2.mp3");
    audio.play();
    document.querySelector(".a").classList.add("pressed")
    setTimeout(()=>{
        document.querySelector(".a").classList.remove("pressed")
    }, 100)
  }
  if (event.key == "s") {
    let audio = new Audio("./sounds/3.mp3");
    audio.play();
    document.querySelector(".s").classList.add("pressed")
    setTimeout(()=>{
        document.querySelector(".s").classList.remove("pressed")
    }, 100)
  }
  if (event.key == "d") {
    let audio = new Audio("./sounds/4.mp3");
    audio.play();
    document.querySelector(".d").classList.add("pressed")
    setTimeout(()=>{
        document.querySelector(".d").classList.remove("pressed")
    }, 100)
  }
  if (event.key == "j") {
    let audio = new Audio("./sounds/5.mp3");
    audio.play();
    document.querySelector(".j").classList.add("pressed")
    setTimeout(()=>{
        document.querySelector(".j").classList.remove("pressed")
    }, 100)
  }
  if (event.key == "k") {
    let audio = new Audio("./sounds/6.mp3");
    audio.play();
    document.querySelector(".k").classList.add("pressed")
    setTimeout(()=>{
        document.querySelector(".k").classList.remove("pressed")
    }, 100)
  }
  if (event.key == "l") {
    let audio = new Audio("./sounds/7.mp3");
    audio.play();
    document.querySelector(".l").classList.add("pressed")
    setTimeout(()=>{
        document.querySelector(".l").classList.remove("pressed")
    }, 100)
  }
});