$(document).ready(function() {

$('.devour-form').on('click', function(event){
    event.preventDefault();

    const burgerInfo = {
        burger_id: $(this).children(".burger_id").val()
    }
    console.log(this)
    console.log(burgerInfo)

    $.ajax({
        method: 'PUT',
        url: '/burgers/update',
        data: burgerInfo
    }).then(data => {
        console.log(data)
        location.reload();
    })

})


})