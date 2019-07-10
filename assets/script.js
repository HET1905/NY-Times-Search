$('button').on("click", function () {
    var txtSearch = $("#txtSearch").val();
    var txtRecordsNum = $('#txtRecordsNum').val();
    var txtStartYear = $("#txtStartYear").val();
    var txtEndYear = $("#txtEndYear").val();
    var articleDiv = $("#articleDiv");
   
    var btnName = $(this).attr('data-name');
    
    var pubBeginDate = txtStartYear+"-01-01";
    var pubEndDate = txtEndYear + "-12-30";
   
    if (btnName === 'Search') {
        var apiKey = "&api-key=CxqL80Gok23rT2wvkbEST0HGyLKhK0OL";

        // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + txtSearch + apiKey;
        
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + pubBeginDate
        +"& end_date="+pubEndDate +"&q=" + txtSearch + apiKey;
        
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                
                var results = response.response.docs;

                for (var i = 0; i < txtRecordsNum; i++) {

                    var artDiv = $("<div>");
                    artDiv.attr('id', "artDiv");
                    var artHeading = $("<h2>");
                    var artPara = $("<p>");
                    var artUrl = $("<a>");
                    var pubDate = results[i].pub_date;
                    // alert (pubDate);

                    artHeading.text(results[i].headline.main);

                    artPara.text(results[i].lead_paragraph);

                    artUrl.attr('href', results[i].web_url);
                    artUrl.text(results[i].web_url);

                    artDiv.append(artHeading);
                    artDiv.append(artPara);
                    artDiv.append(artUrl);

                    articleDiv.prepend(artDiv);
                }
            });
    }

    if(btnName==='Clear'){
        $("#txtSearch").val("");
        $("#txtStartYear").val("");
         $("#txtEndYear").val("");
         $("#articleDiv").empty();
    }
});