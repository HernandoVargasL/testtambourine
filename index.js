function openForm() {
    var form = document.getElementById('form')
    $('#book__button').toggleClass('append')
    if ($('#book__button').hasClass('append')) {
        $(form).show()
        $('body').addClass('no-scroll')
        $('body').append('<div class="backdropx" onclick="openForm()" style="display-none"></div>')
        $('.backdropx').show()
    } else {
        $(form).hide()
        $('body').removeClass('no-scroll')
        $('.backdropx').remove()
    }
}