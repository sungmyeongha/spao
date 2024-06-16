
$(document).ready(function(){

var swiper = new Swiper(".mySwiper", {
    slidesPerView :`auto`, // 한 슬라이드에 보여줄 갯수
    spaceBetween : 20, // 슬라이드 사이 여백
    slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
    loop:true,
    pagination :false, // pager 여부
    autoplay: {
        delay: 3000 // setInterval 같은거
    }, 
    speed: 1000,  // 들어올때까지 걸리는 시간
    navigation: {   // 버튼 사용자 지정
    nextEl: '.swiper_btn_right',
    prevEl: '.swiper_btn_left',
    },
});


$('.mySwiper').hover(function(){

    swiper.autoplay.stop()
}, function(){

    swiper.autoplay.start()
})


let bang_length =  $('.main_banner_img').length

let bang= 0;
let timer = 500;
    

$('.main_banner_img').eq(0).css({
    zIndex:9,
    opacity: 1,
})

// 인디케이터
for(let i=0; i<bang_length; i++) {  
$('.banner_indi').append(`<div class="banner_circle"></div>`) 
}
$('.banner_circle').eq(0).addClass('banner_active');


$(document).on('click', '.right', function(){ 
    slide((bang + 1) % bang_length) 
});

$(document).on('click', '.left', function(){ 
    slide((bang - 1) % bang_length) 
});


function slide(c_bang) {
    $('.main_banner_btn').css({pointerEvents:'none'})
setTimeout(function(){
    $('.main_banner_btn').css({pointerEvents:'auto'})
}, timer)

$('.banner_circle').removeClass('banner_active')
$('.banner_circle').eq(c_bang).addClass('banner_active')

$('.main_banner_img').eq(bang % bang_length).css({
        opacity: 0,
        transition: 'opacity 0s .5s',
        zIndex:1
})
$('.main_banner_img').eq(c_bang).css({
    opacity: 1,
    transition: 'opacity .5s 0s',
    zIndex:99
})
bang = c_bang
}


// 자동 돌리기
let auto_interval;
function auto_slide() {
auto_interval=setInterval(function(){
$('.right').trigger('click')
}, timer + 5000);
}
auto_slide()

$('.main_banner_box').hover(function(){
clearInterval(auto_interval)
}, function(){
auto_slide()
})



$('.banner_circle').click(function(){
if($('.banner_active').index() != $(this).index()) {
    slide($(this).index()) 
}
})


///////////////레이어


$('.x').click(function(){
    $('.layer_papup').css({
        display:"none"
    });
})



$('.layer_papup').mousedown(function(e){
    let m_posx = e.clientX - $('.layer_papup').position().left
    let m_posy = e.clientY - $('.layer_papup').position().top

    $(document).on('mousemove', function(e){
        let m_x = e.clientX;
        let m_y = e.clientY;

        $('.layer_papup').css({
            left: m_x - m_posx,
            top: m_y - m_posy
        })
    })
}) 

$('.layer_papup').mouseup(function(){
    $(document).off('mousemove')
})


$('.item_type').click(function(){
    $('.main_line').animate({
        width:'0'
    }, 100)

    $('.main_line').eq($(this).index()).animate({
        width:'100%'
    }, 100)
})


})
