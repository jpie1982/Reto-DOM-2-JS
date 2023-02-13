/* CAMBIAR TEMAS DE COLOR */


function color1(){
  document.body.style.background = location.reload();
  
 
}
function color2(){
  document.body.style.background = "#ff5f40";
 
}
function color3(){
  document.body.style.background = "#ffc7c7";
 
}


/* CAMBIAR COLOR PAR E IMPAR */

const selectElement = document.getElementById('selector');
const fruits = document.getElementsByTagName("li");

selectElement.addEventListener('change', (event) => {
    switch(event.target.value) {
        case "1":
            location.reload();
            break;
        case "2":
            for (let i = 0; i < fruits.length; i++) {
                if (i % 2 === 0) {
                    fruits[i].style.color = "black";
                   
                } else {
                    fruits[i].style.color = "red";
                    document.body.style.background = "#ffc7c7";
                    
                }
            }
            break;
        case "3":
            for (let i = 0; i < fruits.length;i++) {
                if (i % 2 !== 0) {
                    fruits[i].style.color = "black";
                    
                } else {
                    fruits[i].style.color = "blue";
                    document.body.style.background = "#ff5f40";
      
                    
                }
            }
            break;
        
    }
});



