
$(document).ready(function(){ 

$(window).scroll(function(){ 
        let big_h = $('.header').height() + $('.content_left').height() - $(window).height()
    
        console.log(big_h)
        if($(window).scrollTop() == 0 ){
            $('.content_right').css({
                position:'static',
                width:`100%`
            })
            $('.content_righ_box').css({
                position: `relative`,
            })
        }else if( big_h >= $(window).scrollTop() > 0 ){
            $('.content_right').css({
                position:'fixed',
                top:'90px',
                width: `372px`
            })
            $('.content_righ_box').css({
                position: `relative`,
            })
        }else if(big_h < $(window).scrollTop()  ){
            $('.content_righ_box').css({
                position: `absolute`,
                right: 0,
                bottom: 0
            
            })

            $('.content_right').css({
                position:'static',
                width:`100%`
            })
        }
    })





let box_count = $('.add_img_box').length;
let box_w = $('.add_img_box').outerWidth() + 20;
for(let i=0; i<box_count; i++) {
    $('.add_img_box').eq(i).css({left: box_w * i})
}


    let bang = 0;
    $('.right').click(function(){

        $('.add_img_box').animate({
            left: `-=${box_w}`
        }, 500, 'linear') 

        $('.add_img_box').eq(bang % box_count).animate({
            left: box_w * (box_count - 1)
        }, 0, 'linear')

        bang+=1;

    })
    $('.left').click(function(){

        $('.add_img_box').eq((bang - 1) % box_count).animate({
            left: -box_w
        }, 0, 'linear')

        
        $('.add_img_box').animate({
            left: `+=${box_w}`
        }, 500, 'linear') 

        bang-=1;

    })

})



// $(document).on('click','.choose_color_box' , function(){

    // let clicked_color = $(this).children('.chs_color_box').data('color');
    // $('.chs_color_box').css({
    //     border:'1px solid black'
    // })

    // $('.chs_color_box').eq($(this).index()).css({
    //     border:'2px solid black',
    //     boxSizing:'border-box'
    // })
    // $('.color_option').removeClass(`white`)
    // $('.color_option').removeClass(`black`)
    // $('.color_option').removeClass(`mix`)
    
    // if(!$('.color_option').hasClass(clicked_color)) {
    //     //컬러가 없으면 
    //         $('.color_option').text("[필수]" + clicked_color)
    //         $('.color_option').addClass(`${clicked_color}`)
    // }else{
    //     $('.color_option').removeClass(`${clicked_color}`)
    // }
// })


// <div class="ttt ${clicked_color}">-${clicked_color}</div>


    $(document).on('click','.size_box' , function(){
    let clicked_size = $(this).children('.item_size').data('size'); 
    $('.size_box').css({
        border:'1px solid grey'
    })

    $('.size_box').eq($(this).index()).css({
        border:'2px solid grey',
        boxSizing:'border-box'
    })

    
    $('.size_option').removeClass(`XS`)
    $('.size_option').removeClass(`S`)
    $('.size_option').removeClass(`M`)
    $('.size_option').removeClass(`L`)
    $('.size_option').removeClass(`XL`)
    $('.size_option').removeClass(`XXL`)
    
    
    if(!$('.size_option').hasClass(clicked_size)) {
        //컬러가 없으면 
            $('.size_option').text("[필수]" + clicked_size)
            $('.size_option').addClass(`${clicked_size}`)
    }else{
        $('.size_option').removeClass(`${clicked_size}`)
    }


        if( !$('.ttt2').hasClass(clicked_size)) {
            $('.selected_item_box').append(`
                <div class="selected_item">
                    <div class="si_1">
                        <div>${(ITEM_LIST[cate_no][item_no].txt)}</div>
                        <div class="ttt2 ${clicked_size}">-${clicked_size}</div>
                    </div>
                    <div class="si_2">
                        <input type="button" value="-" class="btn_qty_minus">
                        <input type="text" class="txt_qty" value="1">
                        <input type="button" value="+" class="btn_qty_plus">
                        <div class="btn_remove_item">X</div>
                    </div>
                    <div class="si_3">
                        <div class="each_price">${comma(ITEM_LIST[cate_no][item_no].price)}원</div>
                    </div> 
                </div>
            `)
        }
        else {
            alert("안됩니다.") 
        }
        total_price()
    })
    







$(document).on('click', '.btn_remove_item', function(){
    $(this).parents('.selected_item').remove();
    total_price()
});


$(document).on('click', '.btn_qty_minus', function(){
    let tmp = $(this).next('.txt_qty')
    if(+tmp.val() > 1) {
        tmp.val(   +tmp.val()-1    )
        console.log(  (ITEM_LIST[cate_no][item_no].price)  )
        total_price()
    }
    else {
        alert("최소 주문수량은 1개 입니다.")
    }

});




$(document).on('click', '.btn_qty_plus', function(){

    let tmp = $(this).prev('.txt_qty')
    tmp.val(   +tmp.val()+1    )

    total_price()
})




function total_price() {
    let total_price=0;
    let total_qty = 0;

    for(let i=0; i<$('.txt_qty').length; i++) {
        total_price += $('.txt_qty').eq(i).val() *(ITEM_LIST[cate_no][item_no].price);

        total_qty += +$('.txt_qty').eq(i).val();
    }
 
    $('.prize').text(comma(total_price) + "원")

    $('.final_qty').text((total_qty) + "개")
}