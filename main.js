var widt = $(window).width();
console.log(widt);
$(window).scroll(function(){
    var i = $(window).scrollTop();
    if ( i > 100){
        $('#home').css({'background-size':''+ i-50 +'%',})
        $('.black-sheet').css({'opacity':''+ i/800 +'',})
    }
    else if(i>70){
        $('#home').css({'background-size':'50%',})
        $('.black-sheet').css({'opacity':'0',})
        if(widt < 600){
            $('#home').css({'background-size':'100%',})
        }
    }
})

