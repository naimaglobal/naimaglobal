var modal1 = document.getElementById("myModal1");
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img01");
img1.onclick = function () {
  modal1.style.display = "block";
  modalImg1.src = this.src;
};

var modal2 = document.getElementById("myModal2");
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
};

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal1.style.display = "none";
};

var span = document.getElementsByClassName("close")[1];
span.onclick = function () {
  modal2.style.display = "none";
};
