// ************Slider Images***************
const PIC1 = document.getElementById("pic1");
const PIC2 = document.getElementById("pic2");
const PIC3 = document.getElementById("pic3");
const PIC4 = document.getElementById("pic4");
const PIC5 = document.getElementById("pic5");

// ************Slider Links****************
const IMAGE_LINK1 = document.getElementById("image-link1");
const IMAGE_LINK2 = document.getElementById("image-link2");
const IMAGE_LINK3 = document.getElementById("image-link3");
const IMAGE_LINK4 = document.getElementById("image-link4");
const IMAGE_LINK5 = document.getElementById("image-link5");

const onChangePic = (picture) => {
  PIC1.style.display = "none";
  PIC2.style.display = "none";
  PIC3.style.display = "none";
  PIC4.style.display = "none";
  PIC5.style.display = "none";
  if (picture === PIC1) return (PIC1.style.display = "block");
  if (picture === PIC2) return (PIC2.style.display = "block");
  if (picture === PIC3) return (PIC3.style.display = "block");
  if (picture === PIC4) return (PIC4.style.display = "block");
  if (picture === PIC5) return (PIC5.style.display = "block");
};

IMAGE_LINK1.addEventListener("click", () => onChangePic(PIC1));
IMAGE_LINK2.addEventListener("click", () => onChangePic(PIC2));
IMAGE_LINK3.addEventListener("click", () => onChangePic(PIC3));
IMAGE_LINK4.addEventListener("click", () => onChangePic(PIC4));
IMAGE_LINK5.addEventListener("click", () => onChangePic(PIC5));
