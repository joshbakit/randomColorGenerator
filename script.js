const containerEl = document.querySelector(".container");
const colorContainer = document.querySelector(".color-container");


for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  const copyBtn = document.createElement("button");
  
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
  copyBtn.innerText = "copy";
  containerEl.appendChild(copyBtn);

}


const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
  colorContainerEls.forEach(
    (colorContainerEl) => {
      const newColorCode = randomColor();
      console.log(newColorCode);
      colorContainerEl.style.backgroundColor = "#" + newColorCode;
      colorContainerEl.innerText = "#" + newColorCode; 
  })
}


 function randomColor(){
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
   
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
    
    
  }  
  return colorCode;
 }