var $ = jQuery.noConflict();
		$(document).ready(function() {

			//menu focus
			$(".vc-mm-menu").children('li').children('a').focus(function (){
					$('.menu-item').removeClass('mn_open');
					$(this).parent().addClass('mn_open');
				});
				
	/* focus active */
			$('.hd_links > li a').each(function(e){
					$(this).focus(function(){
						$(this).closest('li').siblings().removeClass('open');
						$(this).closest('li').addClass('open');				
					});
				});
			
			$('')
			
			$( "body" ).delegate( ".click_search", "focus blur", function() {
				  var elem = $( this );
				  setTimeout(function() {
					elem.addClass( "focused", elem.is( ":focus" ) );
				  }, 0 );
			});
			
			$( ".search_btn" ).blur(function() {
 				$('.click_search').removeClass('focused');
			});
				
			$(".brand_link ul li").children("ul").parent().addClass("top_sub_drop");
			$(".brand_link ul li").children("ul").addClass("top_sub_drop_down");

			if($(window).width() < 1024) {
				$(".top_sub_drop").prepend('<span class="sub_drop_click"></span>');
				$(".sub_drop_click").click(function() {
					$(this).next().next().slideToggle();
					$(this).toggleClass("sub_drop_click_act");
					$(this).parent().toggleClass("top_sub_drop_act");
				})

			} else {
				
				$('.brand_link ul li').hover(function(){
					$(this).addClass("top_sub_drop_act");
					$(this).children("ul").fadeIn();
				}, function() {
					$(this).removeClass("top_sub_drop_act");
					$(this).children("ul").fadeOut();
				});
			}

			$('#banner_block').owlCarousel({
	            loop:true,
	            items: 1,
	            margin: 0,
	            stagePadding: 0,
	            smartSpeed: 450,
	            autoplay:true,
				autoplayTimeout:6000,
				nav:false,
				dots:true 
	        });

	        $('#award_block').owlCarousel({
	            loop:true,
	            items: 1,
	            margin: 0,
	            stagePadding: 0,
	            smartSpeed: 450,
	            autoplay:true,
				autoplayTimeout:3000,
				nav: true,
				dots: false
	        });

	        $('#brand_block').owlCarousel({
	            loop:true,
	            items: 4,
	            margin: 25,
	            stagePadding: 0,
	            autoplay:true,
	            autoplayHoverPause: true,
				autoplayTimeout:4000,
				nav:true,
				dots:false,
				responsive:{
			        0:{
			            items:1,
			            nav:true
			        },
			        380:{
			            items:2,
			            nav:true
			        },
			        600:{
			            items:3,
			            nav:true
			        },
			        1000:{
			            items:4,
			            nav:true
			        },
			        1250:{
			            items:5,
			            nav:true,
			            loop:true
			        }
			    }
	        });


			
			
			$('#csr_img_block').owlCarousel({
	            autoPlay: 3000,
				items : 4,
				pagination: true,  
				navigation: false
	        });

		$('#csr_img_block_2').owlCarousel({
	            autoPlay: 3000,
				items : 4,
				pagination: true,  
				navigation: false
	        });


       var maxHeight = 0;
	   $(".icon_block .ab_col").each(function(){
		  var thisH = $(this).height();
		  if (thisH > maxHeight) { maxHeight = thisH; }
	   });

	   $(".icon_block .ab_col").height(maxHeight);






















			
			$('#swach_img_slider').owlCarousel({
			   loop:false,
			   items: 1,
			   margin: 0,
			   stagePadding: 0,
			   smartSpeed: 450,
			   autoplay:true,
			   autoplayTimeout:1500,
			   nav: true,
			   dots:false
		   });
	        

	        $('.gal_slider').owlCarousel({
	            loop:false,
	            items: 1,
	            margin: 0,
	            stagePadding: 0,
	            smartSpeed: 450,
	            autoplay:true,
				autoplayTimeout:3000,
				nav: true,
				dots: false
	        });
	        
	        // gallery popup
			$('.gal_pop').lightGallery();	


	        $("#main_nav > li").hover(function() {
	        	$(this).children("ul").fadeIn(500);
	        }, function() {
	        	$(this).children("ul").fadeOut(500);
	        });

	        /* Responsive */
	        $(".nav-wrap").prepend('<a href="javascript:void(0)" class="nav_c_btn"><span>nav_c_btn</span></a>');
	        $(".brand_link").prepend('<a href="javascript:void(0)" class="logol_c_btn">logol_c_btn</a>');
	        $(".search_block").prepend('<a href="javascript:void(0)" class="logol_s_btn">logol_c_btn</a>');
	        $(".nav_c_btn").click(function(){
	        	$(this).toggleClass("nav_c_btn_act");
	        	$(this).next("ul").toggleClass("main_nav_toggle");
	        });
	        $(".logol_c_btn").click(function(){
	        	$(this).toggleClass("logol_c_btn_act");
	        	$(this).next("ul").slideToggle();
	        });
	        $(".logol_s_btn").click(function(){
	        	$(this).toggleClass("logol_s_btn_act");
	        	$(this).next("form").slideToggle();
	        });
			jQuery(".click_search").click(function(){
	if(jQuery(this).hasClass('searcH_active')) {
	       jQuery(this).removeClass('searcH_active');
	   } else {
	      jQuery(this).addClass('searcH_active');
	   }
	   jQuery(".search_block").slideToggle("slow");
	});
		//news scroll
	$("#myUl").endlessRiver({speed: 50,buttons: true});
	        
	        /* sticky js*/

			$(window).scroll(function() {
			    if ($(this).scrollTop() > 1){  
			        $('.site_header').addClass("sticky");
			}
			else{
			    $('.site_header').removeClass("sticky");
				}
			});
			
			// scroll top
			//Check to see if the window is top if not then display button
			jQuery(window).scroll(function(){
				if (jQuery(this).scrollTop() > 100) {
					jQuery('.scrollToTop').fadeIn();
				} else {
					jQuery('.scrollToTop').fadeOut();
				}
			});
			
			//Click event to scroll to top
			jQuery('.scrollToTop').click(function(){
				jQuery('html, body').animate({scrollTop : 0},800);
				return false;
			}); 
			
	        // accordian
	        $(".accor_tab").smk_Accordion({
				closeAble: true
			});	
			//$(".accor_tab_1 li").addClass('tabactive');
			$(".accor_tab_1 li .tab_head").click(function() {
				//$(this).parent().addClass('tabactive').siblings().removeClass('tabactive');
				$(this).parent().toggleClass('tabactive');
				$(this).next().slideToggle();
			});
	        

(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-awesome-work').cubeportfolio({
        filters: '#js-filters-awesome-work',
        loadMore: '#js-loadMore-awesome-work',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'scaleSides',
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 400,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
    });
})(jQuery, window, document);


//events
		$('#js-grid-masonry').cubeportfolio({
		        filters: 'false',
		        layoutMode: 'grid',
		        defaultFilter: '*',
		        animationType: 'slideDelay',
		        gapHorizontal: 20,
		        gapVertical: 20,
		        gridAdjustment: 'responsive',
		        mediaQueries: [{
		            width: 1500,
		            cols: 5
		        }, {
		            width: 1100,
		            cols: 4
		        }, {
		            width: 800,
		            cols: 3
		        }, {
		            width: 480,
		            cols: 2
		        }, {
		            width: 320,
		            cols: 1
		        }],
		        caption: 'overlayBottomAlong',
		        displayType: 'bottomToTop',
		        displayTypeSpeed: 100,
		
		        // lightbox
		        lightboxDelegate: '.cbp-lightbox',
		        lightboxGallery: true,
		        lightboxTitleSrc: 'data-title',
		        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
		    });
		    
		    var content = $(".field-content").html(); 
		   //console.log(content);
            $('span.field-content').replaceWith('<div class="field-content">' + content + '</div>');


            $('.csr_img_block .owl-item .item img').click(function(){              
              var imgsrc=$(this).attr('src');
              var caption=$(this).next().html();  
              //console.log(caption);
              $(".csr_dflt_img img").attr("src",imgsrc);
			  $(".csr_dflt_img a").attr("data-src",imgsrc);
			  $(".csr_img_tit").html(caption);
			  $(".csr_dflt_img img").attr("alt",caption);
          	});

			jQuery('.csr_img_block .owl-item .item img').click(function(){
				$('html, body').animate({
        		'scrollTop' : $(".csr_dflt_img").position().top - 50
			}); 

			
    	});

			$('.last_update_node').wrap('<div class="last_update_div"></div>');
			if($('.inner_cont_block .last_update_div p').is('.last_update_node')) {
				var up_date = $('.inner_cont_block .last_update_node').html();
				$('.bread-crumbs .container').append('<p class="last_update_node">'+ up_date +'</p>');
			}
			if($('.csr_block .last_update_div p').is('.last_update_node')) {
				var up_date1 = $('.csr_block .last_update_node').html();
				$('.bread-crumbs .container').append('<p class="last_update_node">'+ up_date1 +'</p>');
			} 
          
		  
		  
			

            

		})
		
