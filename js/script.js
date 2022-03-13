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
    div.innerHTML = '<svg width="42px" height="42px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--accent-color)"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 7H4v9h16v-9zM5 6v2h2V6H5zm4 0v2h2V6H9z"/></g></svg>';}, 500)
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
        p2.innerHTML = "In the mobile age where a  <span class=\"bolded accented\">responsive & accessible</span> web presence is a must, it's my privilege to offer the opportunity to be seen on the web to small businesses and individuals around me."}, 500)
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
    div.innerHTML = '<svg width="42px" height="42px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--accent-color)"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"/></g></svg>'}, 500)
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
let nite = false;

const nitemodeBtn = document.querySelector("#nitemode");
nitemodeBtn.addEventListener('click', nitemode);
const root = document.querySelector(':root');

function nitemode(){
    if(nite === false){
        root.classList.add('dark');
        root.classList.remove('light');
        nitemodeBtn.innerHTML = '<svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--navbar-icon-color)"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/></g></svg>'
        nite = true;

    }else if(nite === true){
        const root = document.querySelector(':root');
        root.classList.add('light');
        root.classList.remove('dark');
        nitemodeBtn.innerHTML = '<svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--navbar-icon-color)"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/></g></svg>'
        nite = false;
    }

}
