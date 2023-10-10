function mascaraCPF(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

 function mascaraRG(i){
   
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "12");
   if (v.length == 2 || v.length == 6) i.value += ".";
   if (v.length == 10) i.value += "-";

}

function mascaraNIS(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 9) i.value += ".";
  if (v.length == 12) i.value += "-";

}

function mascaraSUS(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "18");
  if (v.length == 3 || v.length == 8 || v.length == 13) i.value += " ";

}

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