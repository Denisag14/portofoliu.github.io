
const wrapper=document.querySelector(".wrapper")
const logo=document.querySelector(".logo-text")
const tab=document.querySelector("#tab")
const inscriere=document.querySelector("#inscriere")


function myFunction() {
    var txt;
    if (confirm("Ai fost inscris!")) {
      txt = "Ai fost inscris!";
    }
    document.getElementById("demo").innerHTML = txt;
  }



  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const btn3 = document.querySelector(".btn3");
  const cont1 = document.querySelector(".cont1");
  const cont2 = document.querySelector(".cont2");
  const cont3 = document.querySelector(".cont3");
  btn1.addEventListener("click", function () {
    cont2.classList.add("hidden");
    cont1.classList.remove("hidden");
    cont3.classList.add("hidden");
    btn1.style.backgroundColor = "black";
    btn3.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
  });
  btn2.addEventListener("click", function () {
    cont2.classList.remove("hidden");
    cont3.classList.add("hidden");
    btn2.style.backgroundColor = "black";
    btn3.style.backgroundColor = "transparent";
    btn1.style.backgroundColor = "transparent";
  });
  btn3.addEventListener("click", function () {
    cont1.classList.add("hidden");
    cont2.classList.add("hidden");
    cont3.classList.remove("hidden");
    btn3.style.backgroundColor = "black";
    btn2.style.backgroundColor = "transparent";
    btn1.style.backgroundColor = "transparent";
  });
  

