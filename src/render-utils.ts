import { ForecastItem } from "./types";

export function $el<T extends HTMLElement = HTMLElement>(
  selector: string
): T | null {
  return document.querySelector<T>(selector);
}

export function $renderForecast<T extends HTMLElement = HTMLElement>(
  weeklyForecast: ForecastItem[],
  element: T
) {
  for (const forecast of weeklyForecast) {
    const $forecast = document.createElement("div");
    $forecast.innerHTML = `<div class="forecast-ctr">
      <div>${new Date(forecast.data.time).toLocaleDateString()}</div>
      <div class="high">${forecast.high}</div>
      <div class="lo">${forecast.lo}</div>
    </div>`;
    element.appendChild($forecast);
  }
}
