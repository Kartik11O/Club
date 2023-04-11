var NavPhone = document.getElementById("NavPhone")
var Page4_Main = document.getElementById("Page4_Main")

function Open_Close(){

   if(NavPhone.style.display == "none"){
    NavPhone.style.display = "block"
    Page4_Main.style.display = "none"
   }

   else{
    NavPhone.style.display = "none"
    Page4_Main.style.display = "block"
   }

}