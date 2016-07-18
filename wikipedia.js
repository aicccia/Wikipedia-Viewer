/**
 * Created by Nicholas on 7/16/2016.
 */
$(document).ready(function() {

    $(".term").submit(function() {
        $(".contentBox").remove();
        var url = $(this).serialize();
        var num = $("#numberInputID").val();
        url = url.split("=").pop();
        url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&titles=&srsearch="+url+"&srprop=titlesnippet%7Csnippet&srlimit="+num+"&prop=info&inprop=url&callback=?";
        $(".searchInstructions").remove();
        $(".searchbox").animate({marginTop: 1}, 200).css("height", "150px");
        $(".randomInstructions").animate({height: 55}, 200);
        $(".searchBar").css("height", "40px");

        $.getJSON(url, function(display) {
            for(var i=0; i<num; i++) {
                $(".searchbox").after("" +
                    "<div class=\"contentBox\">" +
                    "<a href=\"#\" class><div class=\"title\">" + display.query.search[i].title + "</div>" +
                    "<div class=\"snippet\">" + display.query.search[i].snippet+ "</div>" +
                    "</a>" +
                    "</div>");
                 }

            });
         });
    });