$(document).ready(function(){
    
    /* ================ PRETTY PHOTO ================ */
    
    if(jQuery().prettyPhoto) {
        piPrettyphoto(); 
    }
        
    function piPrettyphoto(){
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
			social_tools: false,
			hook: 'data-gal'
		});
    }
    
    /* ================ PORTFOLIO QUICKSAND FILTER ================ */
    
    (function(){
        // get and assign the holder element to the
        // $holder varible for use later
        var $holder = $('ul#filter-item');

        // clone all items within the pre-assigned $holder element
        var $data = $holder.clone();
    
        // portfolio single filter
        $('#quicksand-filter li a').click(function() {
            var $filteredData;
            // reset the active class on all the buttons
            $('#quicksand-filter li').removeClass('active');

            // assign the class of the clicked filter option
            // element to our $filterType variable
            var $filterType = $(this).attr('class');
            // IE7 fix - Selectivizr brakes quicksand animation
            $filterType = $filterType.replace(/slvzr-hover|slvzr-focus/gi, '');
            $filterType = $filterType.replace(/^\s+|\s+/g, '');
            $(this).parent().addClass('active');
            if ($filterType === 'all') {            
                // assign all li items to the $filteredData var when
                // the 'All' filter option is clicked                       
                $filteredData = $data.children('li').not('li[class="clearfix"]');
            }
            else {            
                // find all li elements that have our required $filterType
                // values for the data-type element            
                $filteredData = $data.find('li[data-alpha*=' + $filterType + ']');
            }

            // call quicksand and assign transition parameters
            $holder.quicksand($filteredData, {
                duration: 800,
                easing: 'swing'
            },function() {
                // reload other plugins
                piPrettyphoto();
            });
            return false;
        });
    })();
	
	function is_touch_device() {
			  return 'ontouchstart' in window // works on most browsers 
				  || 'onmsgesturechange' in window; // works on ie10
	};
	
	
	jQuery(function(){
		if(is_touch_device()){
		$(".portfolio-hover").on('click', function(e){					
			$(this).find('.portfolio-hover').show();
		});
	}
	});
});