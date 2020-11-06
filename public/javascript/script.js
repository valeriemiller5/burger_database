$(document).ready(function() {

$('.devour-form').on('submit', event => {
    event.preventDefault();

    const burgerInfo = {
        burger_id: $(this).children(".burger_id").val()
    }

    $.ajax({
        method: 'PUT',
        url: '/burgers/update',
        data: burgerInfo
    }).then(data => {
        location.reload();
    })

})


})