var api_key = 'YOUR KEY HERE'

var imdb = {
  search_: function(imdb_id, sender) {
    var rotten_url = 'http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?type=imdb&apikey=' + api_key + '&id=' + imdb_id;
    jQuery.ajax({
        url: rotten_url,
        type: 'GET',
        dataType: 'json'
    }).done(function(result) {
        chrome.tabs.sendMessage(sender.tab.id, {ratings: result.ratings, links: result.links}, function(response) {
          console.log("Ratings sent");
        });
    });
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {                
    imdb.search_(request.imdb_id, sender);
  }
);

