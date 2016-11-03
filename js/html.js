jQuery(document).ready(function () {
    $('[data-html]').each(function () {
        $(this).load('html/' + this.dataset.html + '.html');
    });
});
