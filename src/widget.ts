import { getGeocodeData } from "./weather-utils";

export async function setupWidget(element: HTMLDivElement) {
  const data = await getGeocodeData("Fremont, CA");
  console.log(data);
  element.innerHTML = `<div class="widget-outer">
    widget
  </div>`;
}
