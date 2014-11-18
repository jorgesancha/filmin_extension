chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

  var rotten_tomatoes = $("<div id='rotten_tomatoes' class='rate'/>");
  var icon     = $("<div class='icon'/>");
  
  switch(request.ratings.critics_rating) {
  case "Certified Fresh":
    icon.addClass('certified_fresh');
    break;
  case "Fresh":
    icon.addClass('fresh');
    break;
  case "Rotten":
    icon.addClass('rotten')
    break;
  default:
    icon.addClass('rotten')
    break;
  }
  
  var rating   = $("<a id='rotten_rating' target='_blank' href='" + request.links.alternate + "'>" + request.ratings.critics_score + "%</a>");
  $('#film_rated').append(rotten_tomatoes.append(icon, rating));
    
  }
);


$(document).ready(function() {
  
  $('#film_rated #rank_vote').css({width: '275px', float: 'left'});
  
  var imdb_id = $("a.main_imdb").attr('href').match(/\d*$/)[0];
  console.log(imdb_id);
  
  if (imdb_id != undefined) {
    chrome.runtime.sendMessage({imdb_id: imdb_id}, function(response) {
      console.log("Message sent");
    });
  } else {
    console.log("IMDB_ID NOT FOUND");
  }
})

