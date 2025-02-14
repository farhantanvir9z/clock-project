function toogleMenu() {
  const header = document.getElementById("header");
  header.style.height = (header.style.height === "60px") ? "210px" : "60px"
  // if (header.style.height === "60px") {
  //   header.style.height = "210px"
  // } else {
  //   header.style.height = "60px"
  // }
}



function init() {
  console.log("Javascript initialized.")
  toogleMenu()
};
init()