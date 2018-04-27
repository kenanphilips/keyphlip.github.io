$(document).ready(function() {

    $('#someForm').on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var message = $('#message').val();

        //send to formspree
        $.ajax({
            url:'https://formspree.io/philipskenan@gmail.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                 email:email,
                message:message,
                _subject:'You got a message from kenanphilips.com!',
            },
            dataType:"json",
            success:function() {
                console.log('success');
                $('#form').hide();
                $('#thank_you').show();
            }

        });

    });

});
