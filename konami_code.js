const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];



function init() {
  // your code here
  //attaching event listeners to keydown events in correct order
  //of konami code above
  let index = 0;
  document.querySelector.addEventListener('keydown', onKeyDownHandler)
  }

  function onKeyDownHandler(e) {
    const key = e.key
    if(key === codes[index]) {
      index++;
      if(index === codes.length) {
        alert("Hurray!");
        index = 0
      }
    }
    else {
      index = 0
    }
  }

init()
