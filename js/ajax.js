$(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                  console.log('success');
                  $('#form').hide();
                  $('#thank_you').show();
                }else{
                    alert("An error occured: " + response.message);
                }
            }
        });
    });
});
