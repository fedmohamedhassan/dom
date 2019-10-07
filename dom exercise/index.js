let imgs = document.querySelectorAll("img");
let pop = document.querySelector(".pop-upp");
let inner = document.querySelector(".inner");
let close = document.querySelector("#wclose");
let right = document.querySelector("#right");
let left = document.querySelector("#left");
let index = 0;
let box = [];
for (let i = 0;i<imgs.length;i++) {
    box.push(imgs[i]);
    imgs[i].addEventListener("click",function(e){
            pop.style.display = "flex";
            inner.style.backgroundImage = `url("${e.target.src}")`;
            index = box.indexOf(imgs[i]);
        });
}

pop.addEventListener("click",function() {
       pop.style.display = "none";
});
inner.addEventListener("click",function(e) {
       e.stopPropagation();
});
function rightt() {
    index++;
    if (index === 6) index = 0;
    inner.style.backgroundImage = `url("${box[index].src}")`;
}
function leftt() {
    index--;
    if (index < 0) index = box.length -1;
    inner.style.backgroundImage = `url("${box[index].src}")`;
}
// start icons function
close.addEventListener("click",function() {
    pop.style.display = "none";
});
right.addEventListener("click",function() {
    rightt();
});
left.addEventListener("click",function() {
    leftt();
});
// end icons function
// start keycode function 
document.addEventListener("keydown",function(e) {
    if (e.keyCode === 39) {
        rightt();
    }
});
document.addEventListener("keydown",function(e) {
    if (e.keyCode === 37) {
        leftt();
    }
});
document.addEventListener("keydown",function(e) {
    if (e.keyCode === 27) {
        pop.style.display = "none";
    }
});