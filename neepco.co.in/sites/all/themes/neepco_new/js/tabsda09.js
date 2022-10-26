jQuery.noConflict()(function($) {
    "use strict";
    $(document).ready(function() {
		function redimensionnement() {

			if (window.matchMedia("(max-width: 768px)").matches) {
				$('.VerticalTab_hash_scroll .resp-tabs-container').removeClass('tabs_scroll');
				$(".VerticalTab_hash_scroll .tabs_scroll").niceScroll().remove();
			} else {
				$('.VerticalTab_hash_scroll .resp-tabs-container').addClass('tabs_scroll');
				$(".VerticalTab_hash_scroll .tabs_scroll").getNiceScroll().resize();
			}
		}

		
      /* ---------------------------------------------------------------------- */
       /*	------------------------- Horizontal Tab --------------------------- */
       /* ---------------------------------------------------------------------- */
	   
        $('.HorizontalTab').easyResponsiveTabs({
            type: 'default', 
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
			active_Hash: false,// activate hash
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
			
					/* ---------------------------------------------------------------------- */
		/*	--------------------------- Vertical Tab ---------------------------- */
		/* ---------------------------------------------------------------------- */	

		$('.fc_VerticalTab').easyResponsiveTabs({
			type: 'vertical', //Types: default, vertical, accordion
			width: 'auto', //auto or any width like 600px
			fit: true, // 100% fit in a container
			closed: '', // accordion or '' Start closed if in accordion view
			tabidentify: 'hor_1', // The tab groups identifier
			active_Hash: false,// activate hash
			activate: function(event) { // Callback function if tab is switched
				var $tab = $(this);
				var $info = $('#nested-tabInfo2');
				var $name = $('span', $info);
				$name.text($tab.text());
				$info.show();
			}
		});
				
		/* ---------------------------------------------------------------------- */
		/* ------------------------- Effect tabs -------------------------------- */
		/* ---------------------------------------------------------------------- */
		//effects 06-03-2017 gopi
		var animation_style_1 = 'fadeInUp';
		
		$('.HorizontalTab_1 ul.resp-tabs-list li[class^=tabs-]').click(function() {

			$('.HorizontalTab_1 .resp-tabs-container').addClass('animated ' + animation_style_1);
			$('.HorizontalTab_1 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$('.HorizontalTab_1 .resp-tabs-container').removeClass('animated ' + animation_style_1);
			});

			return false;
		});		
			var animation_style_1 = 'fadeInUp';
		
		$('.fc_VerticalTab ul.resp-tabs-list li[class^=tabs-]').click(function() {

			$('.fc_VerticalTab .resp-tabs-container').addClass('animated ' + animation_style_1);
			$('.fc_VerticalTab .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$('.fc_VerticalTab .resp-tabs-container').removeClass('animated ' + animation_style_1);
			});

			return false;
		});		
		

    }); 

}); 