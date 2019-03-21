function postPage(){
    $.post(page + '.html', {}, function (rt, callback) {
        console.log(rt)
        // loading(false);
        // $('.main').html(rt).addClass('fadeIn');
        // if ($.isFunction(callback)) callback();
    })
}
