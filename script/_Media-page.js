// ************Big Images Class***************
const BIG_IMG = document.getElementsByClassName("li-big");

// ************Gallery Images***************
const PIC1 = document.getElementById("pic1");
const PIC2 = document.getElementById("pic2");
const PIC3 = document.getElementById("pic3");
const PIC4 = document.getElementById("pic4");
const PIC5 = document.getElementById("pic5");
const PIC6 = document.getElementById("pic6");

// ************Gallery Pic Links****************
const IMAGE_LINK1 = document.getElementById("link1");
const IMAGE_LINK2 = document.getElementById("link2");
const IMAGE_LINK3 = document.getElementById("link3");
const IMAGE_LINK4 = document.getElementById("link4");
const IMAGE_LINK5 = document.getElementById("link5");
const IMAGE_LINK6 = document.getElementById("link6");
// ************Closer Links****************
const CLOSER_BTN = document.getElementById("close-img1");
document.getElementById("li-big1").style.zIndex = 0;

const onChangePic = (picture) => {
  if (picture) {
    document.getElementById("li-big1").style.zIndex = 21;
  }
  PIC1.style.scale = "0";
  PIC2.style.scale = "0";
  PIC3.style.scale = "0";
  PIC4.style.scale = "0";
  PIC5.style.scale = "0";
  PIC6.style.scale = "0";

  if (picture === PIC1)
    return (
      (PIC1.style.visibility = "visible"),
      (PIC1.style.scale = "1"),
      (CLOSER_BTN.style.scale = "1")
    );
  if (picture === PIC2)
    return (
      (PIC2.style.visibility = "visible"),
      (PIC2.style.scale = "1"),
      (CLOSER_BTN.style.scale = "1")
    );
  if (picture === PIC3)
    return (
      (PIC3.style.visibility = "visible"),
      (PIC3.style.scale = "1"),
      (CLOSER_BTN.style.scale = "1")
    );
  if (picture === PIC4)
    return (
      (PIC4.style.visibility = "visible"),
      (PIC4.style.scale = "1"),
      (CLOSER_BTN.style.scale = "1")
    );
  if (picture === PIC5)
    return (
      (PIC5.style.visibility = "visible"),
      (PIC5.style.scale = "1"),
      (CLOSER_BTN.style.scale = "1")
    );
  if (picture === PIC6)
    return (
      (PIC6.style.visibility = "visible"),
      (PIC6.style.scale = "1"),
      (CLOSER_BTN.style.scale = "1")
    );
};

const unvisibleFn = () => {
  CLOSER_BTN.style.scale = "0";
  (PIC1.style.visibility = "hidden"),
    (PIC2.style.visibility = "hidden"),
    (PIC3.style.visibility = "hidden"),
    (PIC4.style.visibility = "hidden"),
    (PIC5.style.visibility = "hidden"),
    (PIC6.style.visibility = "hidden"),
    (document.getElementById("li-big1").style.zIndex = -1);
};
// const unvisibleFn = (Array) => {
//     for (let i = 0; i < Array.length; i++) {
//         const element = Array[i].style.visibility = "hidden";
//         CLOSER_BTN.style.scale = "0";
//     }

// }

IMAGE_LINK1.addEventListener("click", () => onChangePic(PIC1));
IMAGE_LINK2.addEventListener("click", () => onChangePic(PIC2));
IMAGE_LINK3.addEventListener("click", () => onChangePic(PIC3));
IMAGE_LINK4.addEventListener("click", () => onChangePic(PIC4));
IMAGE_LINK5.addEventListener("click", () => onChangePic(PIC5));
IMAGE_LINK6.addEventListener("click", () => onChangePic(PIC6));

CLOSER_BTN.addEventListener("click", () => unvisibleFn());
// CLOSER_BTN.addEventListener("click", () => unvisibleFn(BIG_IMG));
