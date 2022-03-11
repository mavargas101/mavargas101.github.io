const logo = document.querySelector('#logo');
logo.addEventListener('click', scrollToTop);

const button1 = document.querySelector('.site');
button1.addEventListener('click', changeToSite);

const button2 = document.querySelector('.dev');
button2.addEventListener('click', changeToDev);

function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function changeToSite(){
    const div = document.querySelector('.section1 > div > div');

    const h2 = document.querySelector('.section1 > div > h2');
    const p1 = document.querySelector('.section1 p');
    const p2 = document.querySelector('.section1 p + p');

    div.classList.add('hide');
    setTimeout(function(){
    div.innerHTML = '<svg width="42px" height="42px" viewBox="0 0 24 24" fill="var(--accent-color)" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h20.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0122.25 22H1.75A1.75 1.75 0 010 20.25V3.75zm1.75-.25a.25.25 0 00-.25.25V5.5h4v-2H1.75zM7 3.5v2h4v-2H7zm5.5 0v2h10V3.75a.25.25 0 00-.25-.25H12.5zm10 3.5h-21v13.25c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7z"/></svg>'}, 500)
    setTimeout(function() { 
    div.classList.remove('hide')
    }, 500);
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
    const div = document.querySelector('.section1 > div > div');
    const h2 = document.querySelector('.section1 > div > h2');
    const p1 = document.querySelector('.section1 p');
    const p2 = document.querySelector('.section1 p + p');

    div.classList.add('hide');
    setTimeout(function(){
    div.innerHTML = '<svg fill="var(--accent-color)" width="42px" height="42px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path  d="M10.3 8.24a.75.75 0 01-.04 1.06L7.352 12l2.908 2.7a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 011.06.04zm3.44 1.06a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.908-2.7-2.908-2.7z"/><path fill-rule="evenodd" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0120.25 22H3.75A1.75 1.75 0 012 20.25V3.75zm1.75-.25a.25.25 0 00-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H3.75z"/> </svg>'}, 500)
    setTimeout(function() { 
    div.classList.remove('hide')
    }, 500);

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