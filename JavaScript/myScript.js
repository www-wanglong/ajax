function changeImage() {
  let scr = document.getElementById('myImage').src
  document.getElementById('myImage').src = scr.includes('off') ? '../image/on.png': '../image/off.png'  
}