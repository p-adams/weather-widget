import { $el, $renderForecast } from "./utils";
import { getForecast } from "./weather-utils";

export async function setupWidget(element: HTMLDivElement) {
  let query = "";
  let weeklyForecast = await getForecast("Fremont, CA");
  element.innerHTML = `<div class="widget-outer">
    <input class="input-ctrl"/>
    <button class="send-btn">send</button>
    <div class="widget-inner"/>
  </div>`;

  const widgetCtr = $el<HTMLDivElement>(".widget-inner");
  const inputCtrl = $el<HTMLInputElement>(".input-ctrl");
  const sendBtn = $el<HTMLButtonElement>(".send-btn");

  $renderForecast<HTMLDivElement>(weeklyForecast, widgetCtr!);

  inputCtrl?.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    query = target.value;
  });

  sendBtn?.addEventListener("click", async () => {
    if (query.trim() !== "") {
      weeklyForecast = await getForecast(query);
      widgetCtr!.innerHTML = "";
      $renderForecast<HTMLDivElement>(weeklyForecast, widgetCtr!);
    }
  });
}
