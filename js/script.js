

let items = document.querySelectorAll(".item");

function nextSlide() {
    let currentSlide = document.querySelector(".active");
    currentSlide.classList.remove("active");

    if (currentSlide.nextElementSibling == null) {
        items[0].classList.add("active");
        items[0].style.animation = "nextAnima .4s linear"
    } else {
        currentSlide.nextElementSibling.classList.add("active");
        currentSlide.nextElementSibling.style.animation = "nextAnima .4s linear";
    }
}


function prevSlide() {
    let currentSlide = document.querySelector(".active");
    currentSlide.classList.remove("active");
    if (currentSlide.previousElementSibling == null) {
        items[items.length - 1].classList.add("active");
        items[items.length - 1].style.animation = "prevAnima .4s linear";
    } else {
        currentSlide.previousElementSibling.classList.add("active");
        currentSlide.previousElementSibling.style.animation = "prevAnima .4s linear";
    }
}



let interval = setInterval(nextSlide, 2000);


let parent = document.querySelector(".wrapper");

parent.addEventListener("mouseenter", function(){
    clearInterval(interval);
})


parent.addEventListener("mouseleave", function(){
    interval = setInterval(nextSlide, 2000);
})

//  function test(){
//      console.log("ldsgjhsfbk")
//  }

// let interval = setInterval(test, 1000);


// setTimeout(function(){
//     clearInterval(interval);
// }, 10000);

// window.addEventListener("click", function(){
//     clearInterval(interval);
// })


// setTimeout(nextSlide, 3000);   // one time work




window.addEventListener("keydown", function (windovObj) {
    if (windovObj.key == "ArrowRight") {
        nextSlide();
    } else if(windovObj.key == "ArrowLeft"){
        prevSlide();
    }
});

// window.addEventListener("click", function(){
//     window.removeEventListener("keydown", test);
// })