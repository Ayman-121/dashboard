// let mainText = document.querySelector(".main-text");
// let achievements = document.querySelector(".achievements");
// let footer = document.querySelector(".footer");
// let goals = document.querySelector(".goals");
// let kkis = document.querySelector("#kkis");
// let numbers = document.querySelector("#kkis #numbers");
// let memberships = document.querySelector("#kkis #memberships"); 1

// window.onscroll = function () {
//   if (window.scrollY >= mainText.offsetTop - 600) {
//     mainText.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= footer.offsetTop - 600) {
//     footer.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= goals.offsetTop - 600) {
//     goals.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= kkis.offsetTop - 600) {
//     kkis.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= numbers.offsetTop - 600) {
//     numbers.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= memberships.offsetTop - 600) {
//     memberships.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= numbersSection.offsetTop + 300) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// window.onload = function () {

//   if (window.scrollY >= achievements.offsetTop - 600) {
//     achievements.style.cssText = "transform: translateY(0px);";
//   }
// }



//
//
//
//
//
//
//
//

// let numbersSection = document.querySelector("#kkis #numbers")
// let nums = document.querySelectorAll("#kkis #numbers p span")
// let started = false; // Function Started ? No

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 4000 / goal);
// }


//
//
//
//
//
//
//


// let dateDiv = document.querySelector("#date");

// let date = new Date();

// dateDiv.innerHTML = date.getFullYear();

//
//
//
//
//
//
//



// show Testimonials <[-?>

// let myFirstBox = document.querySelector(".testimonials .first-box");
// let mySecondBox = document.querySelector(".testimonials .second-box");
// let myThirdBox = document.querySelector(".testimonials .third-box");
// let myAllBoxes = document.querySelectorAll(".testimonials .box");

// myArray = [myFirstBox, mySecondBox, myThirdBox];

// function test() {
//   myFirstBox.style.display = "none";
//   mySecondBox.style.display = "none";
//   myThirdBox.style.display = "none";
//   let our = Math.floor(Math.random() * myAllBoxes.length);
//   let value = (myArray[our].style.display = "grid");

//   let dot1 = document.querySelector(`.testimonials #one`);
//   let dot2 = document.querySelector(`.testimonials #second`);
//   let dot3 = document.querySelector(`.testimonials #third`);

//   if (our === 0) {
//     dot1.style.cssText = "opacity:1";
//     dot2.style.cssText = "opacity:0.3";
//     dot3.style.cssText = "opacity:0.3";
//   } else if (our === 1) {
//     dot1.style.cssText = "opacity:0.3";
//     dot2.style.cssText = "opacity:1";
//     dot3.style.cssText = "opacity:0.3";
//   } else if (our === 2) {
//     dot1.style.cssText = "opacity:0.3";
//     dot2.style.cssText = "opacity:0.3";
//     dot3.style.cssText = "opacity:1";
//   }
// }
// setTimeout(test, 0);

let listShower = document.querySelector("#nav-hider");

listShower.onclick = function ayman() {
  let popup = document.createElement("div");
  popup.classList.add("popup");
  document.body.appendChild(popup);

  let elements = document.querySelectorAll(".left-bar ul li")

  elements.forEach((ele) => {

    for (var i = 0; i < 1; i++) {

      let Myele = document.createElement("div")
      Myele.innerHTML = ele.innerHTML;

      popup.appendChild(Myele)
    }

  })

  listShower.onclick = function () {
    popup.remove();
    listShower.onclick = function () {
      ayman();
    };
  };
};


//
//
//
//
//
//
//


let otherListShower = document.querySelector("#other-nav-hider");

otherListShower.onclick = function ayman2() {


  let popup = document.createElement("div"); 1
  popup.classList.add("popup", "popup2");
  document.body.appendChild(popup);

  let element = document.querySelector(".header .second input")

  let inputField = document.createElement("input")
  inputField.placeholder = "Search"
  popup.appendChild(inputField)

  otherListShower.onclick = function () {
    popup.remove();
    otherListShower.onclick = function () {
      ayman2();
    };
  };
};
