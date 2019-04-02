Using this blog:

In the `public/posts.js` add array objects to add more markers. Bottom post is the most recent, and added to the Latest Posts section on the homepage.

Here's a template.
```
const posts = [{  \
  "id":"Hi.there.world", //what 3 words 
  "date":"1/18/2019",
  "title":"hello world", //title and date are used for formatting 
  "lat":"38.955532",     //lat and lon are used to place the marker on the map
  "lon":"-77.364300",
  "post":"Here are some words. Today I am starting to work on this blog site. I want to chronical my adventures by where they happen, not when the happen. Blogs of today are chronilogical, which has advantages, but I am experimenting with something else. I think this format will be extra good once I start my long hike.<br><br>Some features I want to support with this are:<ul><li>Markdown editing support</li><li>A 'new post' section</li><li>storing posts in a sqLite db instead of json file</li><li>Auotmatic Backups</li><li>Custom map colors and styling</li><li>Commenting on each post</li></ul>",
  "img":""
}]

The `post` part of the object is thrown into HTMl, so it supports adding HTMl code