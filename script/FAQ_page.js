const MAIN_LI_CLASS = document.getElementsByClassName("main-FAQ-li");
const SUB_LI_CLASS = document.getElementsByClassName("sub-FAQ-li");

const checkFn = (element) => {
  if (element.style.display === "block") {
    return (element.style.display = "none");
  }
  return (element.style.display = "block");
};

MAIN_LI_CLASS[0].addEventListener("click", () => checkFn(SUB_LI_CLASS[0]));
MAIN_LI_CLASS[1].addEventListener("click", () => checkFn(SUB_LI_CLASS[1]));
MAIN_LI_CLASS[2].addEventListener("click", () => checkFn(SUB_LI_CLASS[2]));
MAIN_LI_CLASS[3].addEventListener("click", () => checkFn(SUB_LI_CLASS[3]));
MAIN_LI_CLASS[4].addEventListener("click", () => checkFn(SUB_LI_CLASS[4]));
MAIN_LI_CLASS[5].addEventListener("click", () => checkFn(SUB_LI_CLASS[5]));
