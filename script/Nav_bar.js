const I_BOX = document.getElementsByClassName("i-box");
const NAV_UL = document.getElementById("nav-ul");

const navBar = () => {
  let x = NAV_UL;
  if (x.style.display === "block") {
    return (x.style.display = "none");
  }
  return (x.style.display = "block");
};
