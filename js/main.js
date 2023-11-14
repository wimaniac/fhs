var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 3000); 
}
 
//------/--------------------------------------//

//---------------------------------------------///
let index=0
const rightbtntwo =document.querySelector('.fa-chevron-right-1')
const leftbtntwo =document.querySelector('.fa-chevron-left-1')
const imgNuberone= document.querySelectorAll('.slider-product-one-content-items1')
rightbtntwo.addEventListener("click",function(){
    index =index+1
    if (index>imgNuberone.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content1").style.right= index *100+"%"
})
leftbtntwo.addEventListener("click",function(){
    index =index-1
    if (index<=0){
        index=imgNuberone.length-1
    }
    document.querySelector(".slider-product-one-content-items-content1").style.right=index *100+"%"
})
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
let myindex=0
const rightbtntwo2 =document.querySelector('.fa-chevron-right-2')
const leftbtntwo2 =document.querySelector('.fa-chevron-left-2')
const imgNubertwo= document.querySelectorAll('.slider-product-one-content-items2')
rightbtntwo2.addEventListener("click",function(){
    myindex =myindex+1
    if (myindex>imgNubertwo.length-1){
        myindex=0
    }
    document.querySelector(".slider-product-one-content-items-content2").style.right= myindex *100+"%"
})
leftbtntwo2.addEventListener("click",function(){
    myindex =myindex-1
    if (myindex<=0){
        myindex=imgNubertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content2").style.right=myindex *100+"%"
})
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
let mangaindex=0
const rightbtn3 =document.querySelector('.fa-chevron-right-3')
const leftbtn3 =document.querySelector('.fa-chevron-left-3')
const imgNuber3= document.querySelectorAll('.slider-product-one-content-items2')
rightbtn3.addEventListener("click",function(){
  mangaindex =mangaindex+1
    if (mangaindex>imgNuber3.length-1){
      mangaindex=0
    }
    document.querySelector(".slider-product-one-content-items-content3").style.right= mangaindex *100+"%"
})
leftbtn3.addEventListener("click",function(){
  mangaindex =mangaindex-1
    if (mangaindex<=0){
      mangaindex=imgNuber3.length-1
    }
    document.querySelector(".slider-product-one-content-items-content3").style.right=mangaindex *100+"%"
})