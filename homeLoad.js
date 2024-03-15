document.addEventListener('DOMContentLoaded', function(){
    const fadeElement = document.getElementById('fadeElement')
    const topBar = document.getElementById('topBar')
    const watermarkLogo = document.getElementById('watermarkLogo')

    fadeElement.style.opacity = 0
    setTimeout(function(){
        fadeElement.style.display = 'none'
    }, 1000)

    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        if(scrollY >= 1){
            topBar.style.backgroundColor = 'rgb(75, 75, 75, 1)'
            watermarkLogo.style.opacity = '1'
        }
        else{
            topBar.style.backgroundColor = 'rgb(75, 75, 75, 0)'
            watermarkLogo.style.opacity = '0'
        }
    });
})

