(jQuery)(function ($) {
    /* ================ 960GS NESTED COLUMN MARGINS ================ */

    (function () {
        $('*[class*="grid_"] > :last-child').not('.grid_2, .grid_1, .grid_10, .grid_11').each(function () {
            var $this = $(this);
            if ($this.hasClass('clear')) {
                if ($this.prev('*[class*="grid_"]')) {
                    $this.parent('*[class*="grid_"]').css('margin-bottom', 0);
                }
            } else if ($this.is('*[class*="grid_"]')) {
                $this.parent('*[class*="grid_"]').css('margin-bottom', 0);
            }
        });
    })();


    /* ================ ACCORDION ================ */

    (function () {
        $('.accordion').on('click', '.title', function (event) {
            event.preventDefault();
            var $this = $(this);
            $this.closest('.accordion').find('.active').next().slideUp('normal');
            $this.closest('.accordion').find('.title').removeClass("active");
            if ($this.next().is(':hidden') === true) {
                $this.next().slideDown('normal');
                $this.addClass("active");
            }
        });
        $('.accordion .content').hide();
        $('.accordion .active').next().slideDown('normal');
    })();

    (function () {

        /* ================ PLACEHOLDER PLUGIN ================ */
        $('input[placeholder], textarea[placeholder]').placeholder();
    })();

});
