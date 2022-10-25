const beforeBtn = document.querySelector(".beforeBtn");
const nextBtn = document.querySelector(".nextBtn");
const imgBox = document.querySelector(".img-box");
const dotBtn = document.querySelector(".dotBtns");
const slideNums = document.querySelectorAll(".slideNum");
const width = 8;

let i = 1;

//next버튼
function clickNext(){
    if(i<6){
        //console.log("다음버튼="+width*i+"00");
        imgBox.style.transform = "translateX(-"+(width*i)+"00px)";
        i++;

        /*하단도트같이움직임*/
        slideNums.forEach(function(img){
            img.classList.remove("moveImg");
        })
        const pick = document.getElementById("dotimg"+i);
        pick.classList.add("moveImg");
      
    }else{
        i=i-6;
        }
    }


//before버튼
function clickBefore(){
    if(i>1){
        //console.log("처음="+i);
        i=i-1;
        imgBox.style.transform = "translateX(-"+width*(i-1)+"00px)";
        //console.log("클릭후"+width*(i-1)+"00");
        //console.log("result="+i);

         /*하단도트같이움직임*/
         slideNums.forEach(function(img){
            img.classList.remove("moveImg");
        })
        const pick = document.getElementById("dotimg"+i);
        pick.classList.add("moveImg");
        
    }else{
        i=i+6;
    }
}


/*하단 도트 버튼*/
function clickDot(e){
    
    const clickImg = e.target.dataset.id;
    const array = [1,2,3,4,5,6];

    array.forEach(function(element){
        //console.log("array= "+element)
        if(element==clickImg){
            //console.log("result i값="+i);
            i=clickImg;
            //console.log(" i값="+i);
            //console.log("clickImg= "+clickImg);
            imgBox.style.transform = "translateX(-"+width*(element-1)+"00px)";
        }
      })

    slideNums.forEach(function(img){
        img.classList.remove("moveImg");
    })
    
    const pick = document.getElementById("dotimg"+clickImg);
    pick.classList.add("moveImg");
};

function init(){
    nextBtn.addEventListener("click", clickNext);
    beforeBtn.addEventListener("click", clickBefore);
    dotBtn.addEventListener("click", clickDot);
}

init();