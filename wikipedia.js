/**
 * Created by Nicholas on 7/16/2016.
 */
$(document).ready(function() {
    $("form").submit(function() {
        var url = $(this).serialize();
        url = url.split("=").pop();

        url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&titles=&srsearch="+url+"&srprop=titlesnippet%7Csnippet&srenablerewrites=1&callback=?";
        alert(url);

        $.getJSON(url, function(display) {
            alert("success");
           // var test = display.continue.sroffset;
           // alert(test);
            });


















    });














})