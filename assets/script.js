$('button').on("click", function () {
    var txtSearch = $("#txtSearch").val();
    var txtRecordsNum = $('#txtRecordsNum').val();
    var txtStartYear = $("#txtStartYear").val();
    var txtEndYear = $("#txtEndYear").val();
    var btnName = $(this).attr('data-name');
    var articleDiv = $("#articleDiv");

    if (btnName === 'Search') {
        var apiKey = "&api-key=CxqL80Gok23rT2wvkbEST0HGyLKhK0OL";
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + txtSearch + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.response.docs;

            for (var i = 0; i < txtRecordsNum; i++) {

                var artDiv = $("<div>");
                artDiv.attr('id',"artDiv");
                var artHeading = $("<h2>");
                var artPara = $("<p>");
                var artUrl = $("<a>");
                
                

                artHeading.text(results[i].headline.print_headline);

                artPara.text(results[i].lead_paragraph);

                artUrl.attr('src',results[i].web_url);

                artDiv.append(artHeading);
                artDiv.append(artPara);
                artDiv.append(artUrl);

                articleDiv.prepend(artDiv);
            }
        });
    }
    // -------------------------------------
});