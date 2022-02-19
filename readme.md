# Animated Popup box using HTML, CSS and JS

## script.js

```shell
/*
OUR JS part is all about implemention of classList
*/

const section = document.querySelector("section"),
  hireBtn = section.querySelector("#hireBtn"),
  closeBtn = section.querySelectorAll("#close");

hireBtn.addEventListener("click", () => {
  section.classList.add("show");
});

closeBtn.forEach((cBtn) => {
  cBtn.addEventListener("click", () => {
    section.classList.remove("show");
  });
});

```

## style.css for hiding the profile for showing POPup

```shell

section .profile {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
section.show .profile {
  display: none;
}

```

## style.css for closing the POPup and showing profile

```shell

section .popup-outer {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
}
section.show .popup-outer {
  opacity: 10;
  pointer-events: auto;
}

```
