    
$(document).ready(function(){

                
        $('.hide_msg').mouseenter(function(){
            $('.header_pan_msg').css({
                display:'none'
            })
            $('.header_pan_msg').eq($(this).index()-3).css({
                display:'block'
            })
        })
        $('.hide_msg').mouseleave(function(){
            $('.header_pan_msg').eq($(this).index()-3).css({
                display:'none'
            })
        })
    
            $('.line').mouseenter(function(){
                $('.header_line').css({
                    pointerEvents: 'none'
                })

                $('.header_line').eq($(this).index()-1).css({
                    pointerEvents: 'all'
                }).animate({
                    width:'100%'
                }, 100)
    
                $('.header_txt').css({
                    color:'#353535',
                })
                $('.line').css({
                    opacity: '0.4'
                })
    
                $('.line').eq($(this).index()-1).css({
                    opacity: '1'
                })
                $('.header_txt').eq($(this).index()-2).css({
                    color:'black',
                })
                $('.header_pan_msg').eq($(this).index()-1).css({})

                $('.black_pan').css({
                    display:'block'
                })
            })
    
            $('.line').mouseleave(function(){
                $('.header_line').css({
                    pointerEvents: 'none'
                })


                $('.header_line').eq($(this).index()-1).css({
                    pointerEvents: 'all'
                }).animate({
                    width:'0%'
                }, 100)
    
                $('.header_txt').css({
                    color:'black',
                })
                $('.header_txt').eq($(this).index()-1).css({
                    color:'black'
                })
                $('.line').css({
                    opacity: '1'
                })
                
                $('.black_pan').css({
                    display:'none'
                })
            })
                $('.logo').html(`<img src="./img/logo/top_logo_pc.png">`)
                
                $('.header_txt').css({
                    color:'black'
                })
                $('.header').css({
                    backgroundColor: 'white',
                    Zindex: 99999
                })
                    $('.right_header_img').eq(0).html('<img src="./img/logo/top_search.png">')
                    $('.right_header_img').eq(1).html('<img src="./img/logo/top_wish.png" >')
                    $('.right_header_img').eq(2).html('<img src="./img/logo/top_cart_pc.png">')
                    $('.right_header_box').children('.my_page_img').css({
                        background:`url(./img/logo/top_mypage.png) no-repeat center / contain`
                    })
                })


                $('.header_pan_msg').mouseenter(function(){
                    $('.header_pan_msg').eq($(this).index()).css({
                        display:'block'
                    })

                })
                $('.header_pan_msg').mouseleave(function(){
                    $('.header_pan_msg').eq($(this).index()).css({
                        display:'none'
                    })

                })
    
    
    $('.scroll_move_top').click(function(){
            $( 'html, body').animate({
                scrollTop: 0
            }, 600)
    })

    $('.scroll_move_bottom').click(function(){
        $( 'html, body').animate({
            scrollTop: `${$(document).height()}`
        }, 600)
    })
    











