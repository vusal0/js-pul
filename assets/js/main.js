$(document).ready( function () {

    $('button').click(function () {
        $('ul').append(`<li>${$('#add').val()}</li>`);
        $('#add').val('')
    })


    $('#find').keyup(function () {
        var findText = $(this).val();

        $('li').each( function (){
            var listItem = $(this).text().toLowerCase();

            if (listItem.includes(findText) || listItem == '') {
                $(this).addClass('active');
                $(this).removeClass('passive')

            }  else {
                $(this).removeClass('active');
                $(this).addClass('passive')
            } 
        })
    })
})