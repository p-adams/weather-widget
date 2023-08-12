import { $el } from "./utils";
import { getForecast } from "./weather-utils";

export async function setupWidget(element: HTMLDivElement) {
  let query = "Fremont, CA";
  const forecast = await getForecast(query);
  console.log(forecast);
  element.innerHTML = `<div class="widget-outer">
    <input/>
    <div class="widget-inner"/>
  </div>`;

  const widgetCtr = $el(".widget-inner");
  for (const item of forecast) {
    const $item = document.createElement("div");
    $item.innerHTML = `<div>${item.high}</div>`;
    widgetCtr?.appendChild($item);
  }
}
