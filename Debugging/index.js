let inp = document.querySelectorAll(".form-control");
let select = document.querySelectorAll(".form-select ");



select.forEach(elem => {
  elem.addEventListener("input", e => {
    let selectValue = e.target.value;
    if (selectValue == "+") {
      let btn = document.querySelector(".btn");
      btn.addEventListener("click", () => {
        let heading = document.querySelector('h1');
        heading.innerHTML = Plus()
      });
    } else if (selectValue == "*") {
      inp.forEach(inpval => {
        inpval.addEventListener("input", function(e) {
          let value = e.target.value;
          let c = value * value;
          console.log(c);
        });
      });
    } else if (selectValue == "-") {
      inp.forEach(inpval => {
        inpval.addEventListener("input", function(e) {
          let value = e.target.value;
          let c = value - value;
          console.log(c);
        });
      });
    } else if (selectValue == "/") {
      inp.forEach(inpval => {
        inpval.addEventListener("input", function(e) {
          let value = e.target.value;
          let c = value / value;
          console.log(c);
        });
      });
    }
  });
});

function Plus() {
  inp.forEach(inpval => {
    inpval.addEventListener("input", function(e) {
      let value = e.target.value;
      let c = +value + +value;
        return console.log(c);
    });
  });
}
