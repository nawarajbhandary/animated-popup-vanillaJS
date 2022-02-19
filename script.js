/* 
OUR JS part is all about implemention of classList
*/

const section = document.querySelector("section"),
  hireBtn = section.querySelector("#hireBtn"),
  closeBtn = section.querySelectorAll("#close"),
  mailBtn = section.querySelector("#send"),
  mailBody = section.querySelector("#textArea").value;

hireBtn.addEventListener("click", () => {
  section.classList.add("show");
});

closeBtn.forEach((cBtn) => {
  cBtn.addEventListener("click", () => {
    section.classList.remove("show");
  });
});

mailBtn.addEventListener("click", () => {
  window.location.assign("mailto:nawarajbhandary03@gmail.com?body" + mailBody);
});
