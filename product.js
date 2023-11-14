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