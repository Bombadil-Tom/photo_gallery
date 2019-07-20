# Photo Gallery Exercise

Create a PhotoGallery component.
You can either use the same project as above and expand on your own webpack config, or create a new
project using React&#39;s &quot;Create React App&quot; from https://github.com/facebook/create-react-app.
The PhotoGallery component should take in an array of images.
Each image will have a url and a caption.
The captions should be displayed over the image.
The PhotoGallery should allow users to either click or swipe through images.
Smoothly animate the swipe and transition between images.
Handle any edge cases you can think of.

Plan:

## PhotoGallery Component

- fetches data.json
- creates Picture Components out of data.json
- renders Picture Components to the screen
- renders Loading Spinners

## Picture Component

- displays caption
- displays image
- on click: creates detail view

## DetailView Component

- displays image in the front
- renders navigation component (back and fourth)
- animates picture change

## Handle Edge Cases

- Image not found:
  Don't display image
- Image file corrupted:
  Don't display image
- No caption:
  Don't display caption
- No image url:
  Don't display image
- Image size large:
  First render spinner
  Then lazy load
- Landscape vs portrait photos:
  Have a column structure with set width and height
- Panorama photos:
  Shrink them down
