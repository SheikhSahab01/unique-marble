document.getElementById('slider1').addEventListener("mouseover", function () {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/s1.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
});

document.getElementById('slider2').addEventListener("mouseover", function () {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/highgloss.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
});

document.getElementById('slider3').addEventListener("mouseover", function () {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/matt.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
});

document.getElementById('slider4').addEventListener("mouseover", function () {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/carving.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
});

document.getElementById('slider5').addEventListener("mouseover", function () {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/decor.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
});

document.getElementById('slider6').addEventListener("mouseover", function () {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/punch.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
});




document.getElementById('slider1').addEventListener("click", function (event) {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/s1.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
    event.preventDefault();
});

document.getElementById('slider2').addEventListener("click", function (event) {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/highgloss.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
    event.preventDefault();
});

document.getElementById('slider3').addEventListener("click", function (event) {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/matt.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
    event.preventDefault();
});

document.getElementById('slider4').addEventListener("click", function (event) {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/carving.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
    event.preventDefault();
});

document.getElementById('slider5').addEventListener("click", function (event) {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/decor.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
    event.preventDefault();
});

document.getElementById('slider6').addEventListener("click", function (event) {
    document.getElementById("slider-main1").style.backgroundImage = "url('../assets/sliderimg/punch.jpg')";
    document.getElementById("slider-main1").style.transition = "all 1s ease";
    event.preventDefault();
});




const counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
    counter.innerText = '0';

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText;

        const increment = target/50;

        if(c< target){
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target
        }
    }
    updateCounter();
})



