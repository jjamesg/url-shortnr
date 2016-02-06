console.log('script loaded');

$( document ).ready(function() {
    
    var output = $('#output');
    var apiUrl = 'https://url-shortnr-jjamesg.c9users.io/new?url=';
    
    $('#input').val('http://');

    $('#submit').click(function() {
        
        var input = $('#input').val();

        $.get(apiUrl + input, function(data){
            console.log('data: ' + data);
        output.val('https://url-shortnr-jjamesg.c9users.io/s/' + data);
        })
    });
    
    $(document).keypress(function(e){
    if (e.which == 13){
        $("#submit").click();
    }
    
    $('#output').click(function() {
        this.select();
    })
});
})

    