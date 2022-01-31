const hamburger = document.querySelector('.hamburger')
const List = document.querySelector('.NavListMobile .List')
console.log(List);



hamburger.addEventListener('click', e => {
 
 if(List.classList.contains('hide')){
     List.classList.remove('hide')
     hamburger.src = '/images/icon-close.svg'
 }else{
    List.classList.add('hide')
    hamburger.src = '/images/icon-hamburger.svg'

 }
});