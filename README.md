# Weather Widget

The **Weather Widget** is a simple and customizable web widget that displays current weather information for a specified location. This widget can be easily integrated into websites, blogs, or any web-based application to provide users with real-time weather updates.

## Features

- **Current Weather**: The widget displays the current weather conditions for a user-specified location.

- **Customization**: The widget's appearance can be customized using CSS to match the style of the hosting website or application.

## Future Features

- **Temperature**: The temperature is displayed in degrees Fahrenheit or Celsius, depending on user preferences.

- **Weather Icons**: The widget shows weather icons corresponding to the current weather conditions, making it visually appealing and easy to understand.

- **Location**: Users can set their preferred location to receive weather updates for that specific area.

## Installation

To integrate the Weather Widget into your website, follow these steps:

1. Clone or download the repository:

   ```
   git clone https://github.com/p-adams/weather-widget.git
   ```

2. Include the necessary files in your HTML:

   ```html
   <!-- Link to the CSS file for styling -->
   <link rel="stylesheet" href="path/to/style.css" />

   <!-- Place the following script where you want the widget to appear -->
   <div id="widget"></div>
   <script src="path/to/widget.ts"></script>
   ```

3. Configure the widget:
   In the `widget.ts` file, you'll find a section where you can customize the widget's behavior. You can set your preferred location, temperature unit, and more.

## Configuration (IN PROGRESS)

You can configure the Weather Widget by modifying the settings in the `widget.ts` file:

```TypeScript
// Weather Widget Configuration
const widgetSettings = {
  apiKey: 'YOUR_OPENWEATHERMAP_API_KEY',
  location: 'New York, US', // Set your preferred location here
  temperatureUnit: 'celsius', // Choose between 'celsius' and 'fahrenheit'
};
```

Replace `'YOUR_OPENWEATHERMAP_API_KEY'` with your actual OpenWeatherMap API key. If you don't have an API key, you can obtain one by signing up on the [OpenWeatherMap website](https://openweathermap.org/).

## Customization

You can customize the appearance of the widget by editing the `style.css` file. Adjust the styles to match your website's design.

## Contributions

Contributions to the Weather Widget project are welcome. If you have any bug fixes, improvements, or new features to add, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/p-adams/weather-widget/blob/main/LICENSE) file for details.
