const MAIN_LI_CLASS = document.getElementsByClassName("main-FAQ-li");
const SUB_LI_CLASS = document.getElementsByClassName("sub-FAQ-li");

const checkFn = (Array, element) => {
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] !== element) {
      Array[i].style.display = "none";
    }
  }
  return Array;
};
const visibleFn = (element) => {
  checkFn(SUB_LI_CLASS, element);
  //   SUB_LI_CLASS[0].style.display = "none";
  //   SUB_LI_CLASS[1].style.display = "none";
  //   SUB_LI_CLASS[2].style.display = "none";
  //   SUB_LI_CLASS[3].style.display = "none";
  //   SUB_LI_CLASS[4].style.display = "none";
  //   SUB_LI_CLASS[5].style.display = "none";
  if (element === SUB_LI_CLASS[0])
    return (SUB_LI_CLASS[0].style.display = "block");
  if (element === SUB_LI_CLASS[1])
    return (SUB_LI_CLASS[1].style.display = "block");
  if (element === SUB_LI_CLASS[2])
    return (SUB_LI_CLASS[2].style.display = "block");
  if (element === SUB_LI_CLASS[3])
    return (SUB_LI_CLASS[3].style.display = "block");
  if (element === SUB_LI_CLASS[4])
    return (SUB_LI_CLASS[4].style.display = "block");
  if (element === SUB_LI_CLASS[5])
    return (SUB_LI_CLASS[5].style.display = "block");
};

MAIN_LI_CLASS[0].addEventListener("click", () => visibleFn(SUB_LI_CLASS[0]));
MAIN_LI_CLASS[1].addEventListener("click", () => visibleFn(SUB_LI_CLASS[1]));
MAIN_LI_CLASS[2].addEventListener("click", () => visibleFn(SUB_LI_CLASS[2]));
MAIN_LI_CLASS[3].addEventListener("click", () => visibleFn(SUB_LI_CLASS[3]));
MAIN_LI_CLASS[4].addEventListener("click", () => visibleFn(SUB_LI_CLASS[4]));
MAIN_LI_CLASS[5].addEventListener("click", () => visibleFn(SUB_LI_CLASS[5]));
