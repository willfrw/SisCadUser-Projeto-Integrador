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

document.getElementById('uploadForm').addEventListener('submit', function(e) {
   e.preventDefault();

   var fileInput = document.getElementById('photo');
   var file = fileInput.files[0];
   if (file) {
       var reader = new FileReader();

       reader.onload = function(e) {
           var previewDiv = document.getElementById('preview');
           previewDiv.innerHTML = '<img src="' + e.target.result + '" alt="Foto 3x4">';
       }

       reader.readAsDataURL(file);
   }
});