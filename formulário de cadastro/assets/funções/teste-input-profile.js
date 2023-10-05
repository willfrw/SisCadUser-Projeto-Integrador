const inputFile = document.querySelector('#picture__input');

const pictureImage = document.querySelector('.picture__image');

const pictureImageTxt = "Foto 3x4";

pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    console.log(file);
});