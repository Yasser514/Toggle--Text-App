ToggleApp
A simple React component to toggle the visibility of a message with an accessible button.

Features
Toggle visibility of a message on button click.
Button updates its label and icon based on the toggle state.
Accessible with proper ARIA attributes (aria-expanded and aria-label).
Usage
Import the component:
jsx


import { ToggleApp } from './ToggleApp';
Use it inside your React application:
jsx


function App() {
  return (
    <div>
      <ToggleApp />
    </div>
  );
}
How it works
The component has a state variable isVisible that controls whether the message is shown.
The button click triggers handleToggleVisibility to toggle the isVisible state.
When isVisible is true, the message "💖 I love freeCodeCamp!" is displayed.
The button’s icon and text change based on the current visibility state.
ARIA attributes make it screen reader friendly.
