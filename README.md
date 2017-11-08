# React-Gif-Search
## Concept
The idea was to create a react app that utilizes the giphy api. This is the initial mockup for the project.
</br>
![Screenshot](screenshots/react-gif-search.bmpr.png 'initial mockup for the app')

### Component Breakdown
#### App
The App component is a bucket for the rest of the modules, it manages the base state and coordinates the child components underneath it.
#### SearchBar
The SearchBar component watches for a change to the user input and poasses the search terms back up to the App component when needed.
#### GifList 
The GifList maps the array of gifs returned from the Giphy API and renders the individual GifItems
#### GifItems 
This just displays the gifs

