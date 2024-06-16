
item_list2(cate_no) 


$(document).ready(function(){

$('.main_title').click(function(){
    $('.main_title').css({
        fontWeight: `normal`
    })

    $('.main_title').eq($(this).index()).css({
        fontWeight: 900
    })
})




for (let i = 0; i < 2; i++) {
    $('.main_box0').append('<div class="color"></div>')
}
for (let i = 0; i < 7; i++) {
    $('.main_box1').append('<div class="color"></div>')
}
for (let i = 0; i < 4; i++) {
    $('.main_box2').append('<div class="color"></div>')
}
for (let i = 0; i < 4; i++) {
    $('.main_box3').append('<div class="color"></div>')
}
for (let i = 0; i < 1; i++) {
    $('.main_box4').append('<div class="color"></div>')
}
for (let i = 0; i < 6; i++) {
    $('.main_box5').append('<div class="color"></div>')
}
for (let i = 0; i < 2; i++) {
    $('.main_box6').append('<div class="color"></div>')
}
for (let i = 0; i < 3; i++) {
    $('.main_box7').append('<div class="color"></div>')
}

})

