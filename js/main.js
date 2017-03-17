function sel(a){
    return document.querySelector(a);
}
var puctures = ['slide1.jpeg', 'slide2.jpeg', 'slide3.jpeg'];
var i = 0;
var inputs = document.querySelectorAll('.picture');

function goRight(){
    ++i;
    if(i>puctures.length-1) i = 0;
    sel('.slider').style.background = 'url(img/'+puctures[i]+')';
    sel('.slider').style.backgroundSize = 'cover';
    inputs[i].checked = true;
}

function goLeft(){
    --i;
    if(i<0) i = puctures.length-1;
    sel('.slider').style.background = 'url(img/'+puctures[i]+')';
    sel('.slider').style.backgroundSize = 'cover';
    inputs[i].checked = true;
}


sel('.right_arrow').addEventListener('click', goRight);
sel('.slider').addEventListener('touchstart', goRight);
sel('.left_arrow').addEventListener('click', goLeft);


function btnMousedown(){
    sel('.button').style.boxShadow = '-1px -2px 1px #bebdbd';
}
function btnMouseup(){
    sel('.button').style.boxShadow = '1px 2px 1px #bebdbd';
}

sel('.button').addEventListener('mousedown', btnMousedown);
sel('.button').addEventListener('touchstart', btnMousedown);
sel('.button').addEventListener('mouseup', btnMouseup);
sel('.button').addEventListener('touchend', btnMouseup);




$(function(){
    $('.menu_trigger').click(function(){
        $('.menu').slideToggle(400, function(){
            $(this).toggleClass('nav-expanded').css('display','');
        });
       $('.content').toggleClass('content-down').css('margin-top','');
   
    });
//    $('.button').mousedown(function(){
//        $(this).css('box-shadow', '-1px -2px 1px #bebdbd');
//    });
//    
//    $('.button').mouseup(function(){
//        $(this).css('box-shadow', '1px 2px 1px #bebdbd');
//    });
    
})