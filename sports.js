var barrinha = document.getElementById('barrinhas')
barrinha.addEventListener('click', bb)
function bb(){
    grayzin.style.left = '990px'
    grayzin.style.transitionTimingFunction = 'ease'
    grayzin.style.transitionDuration = '1s'
    leb.style.left = '-0px'
    leb.style.transitionTimingFunction = 'ease'
    leb.style.transitionDuration ='1s'
    cri.style.left = '-570px'
    cri.style.transitionTimingFunction =' ease'
    cri.style.transitionDuration = '1s'
    goat.style.left = '180px'
    goat.style.transitionTimingFunction = 'ease'
    goat.style.transitionDuration ='1s'
    NBA.style.left = '2000px'
    nf.style.left = '2000px'
}
var grayzin = document.getElementById('menu')
var setin = document.getElementById('set')
setin.addEventListener('click', see)
function see(){
    grayzin.style.left = '2000px'
    leb.style.left = '300px'
    cri.style.left = '300px'
    goat.style.left = '760px'
}
var leb = document.getElementById('lebron')
var cri = document.getElementById('ronaldo')
var goat = document.getElementById('goats')
var NBA = document.getElementById('BS')
var bs = document.getElementById('NBA')
var st =document.getElementById('seta')
bs.addEventListener('click', cl)
function cl(){
    NBA.style.left ='990px'
    NBA.style.transitionTimingFunction = 'ease'
    NBA.style.transitionDuration = '1s'
    grayzin.style.left = '2000px'
    leb.style.left = '-0px'
    leb.style.transitionTimingFunction = 'ease'
    leb.style.transitionDuration ='1s'
    cri.style.left = '-570px'
    cri.style.transitionTimingFunction =' ease'
    cri.style.transitionDuration = '1s'
    goat.style.left = '180px'
    goat.style.transitionTimingFunction = 'ease'
    goat.style.transitionDuration ='1s'
    nf.style.left = '2000px'
}
st.addEventListener('click',ss)
function ss(){
    NBA.style.left = '2000px'
    grayzin.style.left = '2000px'
    leb.style.left = '300px'
    cri.style.left = '300px'
    goat.style.left = '760px'
}
var nf = document.getElementById('NFL')
var se = document.getElementById('setas')
var im = document.getElementById('nfl')
im.addEventListener('click', ses)
function ses(){
    nf.style.left = '990px'
    nf.style.transitionTimingFunction = 'ease'
    nf.style.transitionDuration = '1s'
    grayzin.style.left = '2000px'
    leb.style.left = '-0px'
    leb.style.transitionTimingFunction = 'ease'
    leb.style.transitionDuration ='1s'
    cri.style.left = '-570px'
    cri.style.transitionTimingFunction =' ease'
    cri.style.transitionDuration = '1s'
    goat.style.left = '180px'
    goat.style.transitionTimingFunction = 'ease'
    goat.style.transitionDuration ='1s'
    NBA.style.left = '2000px'
}
se.addEventListener('click', ims)
function ims(){
    nf.style.left = '2000px'
    NBA.style.left = '2000px'
    grayzin.style.left = '2000px'
    leb.style.left = '300px'
    cri.style.left = '300px'
    goat.style.left = '760px'
}