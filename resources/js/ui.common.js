;(function($, win, doc, undefined) {

    'use strict';
    
    $plugins.common = {
 
        init: function(){
            $plugins.uiAjax({ id:'baseHeader', url:'./inc/header.html', page:true, callback:$plugins.common.header });
            $plugins.uiAjax({ id:'baseFooter', url:'./inc/footer.html', page:true, callback:$plugins.common.footer });
            
            console.log('------------------------------------------------------')
            
            $(win).on('scroll', function(){
               headerChange($(win).scrollTop())
            });

            function headerChange(v){
                v > 0 ? $('body').addClass('type-mini'): $('body').removeClass('type-mini');
            }
        },
        
        header: function(){
            console.log('header load');
            var timer;

            $('.nav-dep1-btn').on('mouseover', function(){
                clearTimeout(timer);
                $('.nav-dep2-wrap').removeClass('on');
                $(this).next('.nav-dep2-wrap').addClass('on');
            });
            $('.nav-dep2-wrap').on('mouseover', function(){
                clearTimeout(timer);
            });
            $('.nav-dep2-wrap').on('mouseleave', function(){
                navHide();
            });
            $('.nav-dep1-btn').on('mouseleave', function(){
                navHide();
            });
            $('.btn-menu').on('click', function(){
                $('body').addClass('menu-ready');
                setTimeout(function(){
                    $('body').addClass('menu-on');
                },200);
            });
             $('.btn-close').on('click', function(){
                $('body').removeClass('menu-on');
                setTimeout(function(){
                    $('body').removeClass('menu-ready');
                },500);
            });


            function navHide(){
                timer = setTimeout(function(){
                    $('.nav-dep2-wrap').removeClass('on');
                },500);
            }
           
        },
        
        footer: function(){
            console.log('footer load');
        }
    };

})(jQuery, window, document);
