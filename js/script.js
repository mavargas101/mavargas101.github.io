const button1 = document.querySelector('.site');
button1.addEventListener('click', changeToSite);

const button2 = document.querySelector('.dev');
button2.addEventListener('click', changeToDev);
function changeToSite(){
    const h2 = document.querySelector('.section1 > h2');
    const p1 = document.querySelector('.section1 p');
    const p2 = document.querySelector('.section1 p + p');
    h2.classList.add('hide');
    setTimeout(function(){
        h2.innerHTML = "Is your website working for you?"}, 500)
    setTimeout(function() { 
        h2.classList.remove('hide')
    }, 500);
    p1.classList.add('hide');
    setTimeout(function(){
        p1.innerHTML = "When someone comes to your website looking for what you provide, will they have a good experience? How will the site look if they reach it on a phone? A tablet?"}, 500)
    setTimeout(function() { 
        p1.classList.remove('hide')
    }, 500);
    p2.classList.add('hide');
    setTimeout(function(){
        p2.innerHTML = "In the mobile age where a  <span class=\"bolded\">responsive & accessible</span> web presence is a must, it's my privilege to offer the opportunity to be seen on the web to small businesses and individuals around me."}, 500)
    setTimeout(function() { 
        p2.classList.remove('hide')
    }, 500);
}

function changeToDev(){
    let h2 = document.querySelector('.section1 > h2');
    let p1 = document.querySelector('.section1 p');
    let p2 = document.querySelector('.section1 p + p');

    h2.classList.add('hide');
    setTimeout(function(){
        h2.innerHTML = "Looking for a new Developer?"}, 500)
    setTimeout(function() { 
        h2.classList.remove('hide')
    }, 500);
    p1.classList.add('hide');
    setTimeout(function(){
        p1.innerHTML = "Passion for learning and improvement has always been part of me. While working across diverse industries, I worked to make processes for companies simpler, smoother, and more efficient."}, 500)
    setTimeout(function() { 
        p1.classList.remove('hide')
    }, 500);
    p2.classList.add('hide');
    setTimeout(function(){
        p2.innerHTML = "Between work and pursuing my own outside interests, I have seen just how much the right technology can help people every day. Now I devote my time to building those products and improving the world a little bit at a time."}, 500)
    setTimeout(function() { 
        p2.classList.remove('hide')
    }, 500);
}