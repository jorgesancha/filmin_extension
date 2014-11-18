# Rotten Tomatoes Ratings in filmin.es. A chrome extension.

I'm a fan of [filmin.es](filmin.es), but [I decide what movies to watch](http://jorgesancha.ghost.io) based on rotten tomatoes ratings. This extension uses the rotten tomatoes API to extract their ratings and includes them on the filmin title page for each movie.



## How to install

Since it is not distributed to the Chrome Extension store yet (might be soon), you need to:

1. [Register for an API KEY](http://developer.rottentomatoes.com/) in Rotten Tomatoes. 
2. Clone this repo
3. Edit the bg_rotten.js file to include your API KEY
4. Browse in chrome to chrome://extensions and load the extension via the 'Load unpacked extension...' button.
5. Browse through filmin.es and enjoy

## Known Issues

* The extension doesn't work for those films on filmin.es that don't have the IMDB ID set. 
* The extension currently grabs the rotten tomatoes icons directly from their website, which is served over http. Filmin is served over https, which causes the "mixed content" warning icon to show up when running the extension.
* Often films don't have a rotten tomatoes rating... Nothing much I can do about that.

## To Do

* Try to find the film by original title in Rotten Tomatoes for those that don't have IMDB ID