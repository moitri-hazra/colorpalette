Color Palette React Component

This is a React component that displays a color palette consisting of three randomly generated colors. Each color is displayed in a separate card, and the component includes a "Generate" button that, when clicked, generates three new random colors and updates the display.

USAGE

To use the Color Palette component in your React project, simply import it into your code and include it in your JSX:

import ColorPalette from './components/ColorPalette';

function App() {
  return (
    <div className="App">
      <ColorPalette />
    </div>
  );
}


FEATURES

The Color Palette component includes the following features:

1.Displays three random colors in a grid format
2.Updates the colors when the "Generate" button is clicked
3.Uses React state management to store the current color values
4.Uses CSS styling to display the colors in a visually appealing way

GETTING STARTED

To run the component locally, follow these steps:

Clone this repository to your local machine
Install the dependencies by running npm install in the project directory
Start the development server by running npm start
Open your web browser and navigate to http://localhost:3000 to see the Color Palette component in action


TECHNOLOGIES USED 

The Color Palette component was built using the following technologies:

React
JavaScript
CSS
