const menu = document.querySelector(".tab-menu");
const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
const imgs = document.querySelectorAll(".img");

/* 원리 설명 */
/* 
각각의 버튼 tab-btn의 data-id와 내용인 tab-content의 id를 같게 만들고
e.target.dataset.id으로 이벤트가 발생된 data-id를 const id 안에 저장해둔다.

버튼을 누르면 각 버튼마다 active클래스명을 삭제하고
 e.target으로 발생한 한 버튼 객체에만 active클래스명을 추가해준다.

각 내용마다 active클래스명을 삭제하고
처음에 저장해둔 data-id를 getElementById의 id명으로 설정하고 element에 저장한다.
이렇게 하면 data-id와 같은 tab-content의 id를 불러올 수 있다. 
element에 저장한 id에 classList로 active를 추가해준다.

*/

menu.addEventListener("click",function(e){
    
    /*클릭한 버튼 색상 바뀌게 */
    const id = e.target.dataset.id;
    btns.forEach(function(btn){
        btn.classList.remove("active");
    });
    e.target.classList.add("active");

    /*클릭한 내용 바뀌게 */
    contents.forEach(function(content){
        content.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");


    /*사진도 바뀌게 해보기! */
    imgs.forEach(function(img){
        img.classList.remove("imgActive");
    })

    const pic = document.getElementById(id+1);
    pic.classList.add("imgActive");

})

/* 
사진도 같은 방법으로 content랑 똑같이 코드를 짰는데
content의 id와 img의 id가 겹쳐서 뒤죽박죽되어버림.
구분하기 위해 img id에는 1을 추가하고 
data-id에 1을 추가한 것을 document.getElementById로 선택하고
pic에 저장해서  imgActive 클래스 추가
*/