# scrollToTop

Introduction
A simple plug-in to add the scroll to top image/symbol to your web page

USAGE
Initialize the plugin with custom options:

```javascript
$(document).scrollToTop({
  bottom: "30px", // Bottom position
  right: "30px", // Right position
  bgColor: "#667eea", // Background color
  text: "↑ TOP", // Button text/icon
  fontSize: "14px", // Text font size
  scrollThreshold: 100, // Pixels to scroll before showing button
  duration: 300, // Animation duration in milliseconds
});
```
