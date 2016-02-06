$( document ).ready(function() {
    
    console.log('script loaded')
    
    var output = $('#output');
    var apiUrlCloud = 'https://url-shortnr-jjamesg.c9users.io/new?url=';
    var apiUrlHero = 'https://shrtner.herokuapp.com/new?url='
    
    //fix this ^^^^^
    
    $('#input').val('http://');

    $('#submit').click(function() {
        
        var input = $('#input').val();

        $.get(apiUrlHero + input, function(data){
            console.log('data: ' + data);
        output.val('http://shrtner.herokuapp.com/s/' + data);
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

    