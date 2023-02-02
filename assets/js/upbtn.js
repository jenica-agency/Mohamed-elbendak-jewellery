let upbtn = document.getElementById("upbtn");
upbtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (window.scrollY >= 600) {
    upbtn.style.display = "block";
  } else {
    upbtn.style.display = "none";
  }
};
