console.log("Script Running!");
document.addEventListener("DOMContentLoaded", function () {
    const inputFile = document.querySelector("#picture__input");
    const pictureImage = document.querySelector("#picture__image");
    const pictureImageTxt = "Foto 3x4";
    pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
    console.log("File input changed!");
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
});


function cmToPixels(cm) {
    const inchToCm = 2.54;
    const pixelsPerInch = 96; // Ajuste conforme a resolução do dispositivo
    return cm * inchToCm * pixelsPerInch;
  }