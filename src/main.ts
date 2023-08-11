import "./style.css";
import { setupWidget } from "./widget.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   
    <h1>Weather Widget</h1>
    <div id="widget"/>
  </div>
`;

setupWidget(document.querySelector<HTMLDivElement>("#widget")!);
