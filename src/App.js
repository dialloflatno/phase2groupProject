import React from "react";
import Weather from "./Weather";
import Map from "./Map";
import TodoList from "./TodoList.js";
import "./App.css";

import ExchangeRateConverter from "./ExchangeRateConverter";

function App() {
  return (
    <div className="App">
      <div className ="Us">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="110.18" height="45.02" viewBox="0 0 110.18 45.02"><path d="M226.48,179.15a49,49,0,0,1,7.34-.56c5,0,8.49,1.15,10.84,3.34s3.77,5.28,3.77,9.6-1.35,7.94-3.85,10.41-6.63,3.85-11.83,3.85a55.21,55.21,0,0,1-6.27-.32Zm3.45,23.66a21.57,21.57,0,0,0,3.49.2c7.39,0,11.4-4.13,11.4-11.36,0-6.31-3.54-10.32-10.84-10.32a19.44,19.44,0,0,0-4,.36Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M252.81,192.33c0-2.26,0-4.21-.16-6h3.06l.12,3.78H256a5.76,5.76,0,0,1,5.31-4.21,3.81,3.81,0,0,1,1,.12v3.29a5.26,5.26,0,0,0-1.19-.12c-2.46,0-4.21,1.87-4.69,4.49a9.78,9.78,0,0,0-.16,1.63v10.24h-3.45Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M276.24,205.55l-.28-2.42h-.12A7.14,7.14,0,0,1,270,206a5.48,5.48,0,0,1-5.88-5.52c0-4.65,4.13-7.19,11.55-7.15v-.4c0-1.58-.43-4.44-4.36-4.44a9.53,9.53,0,0,0-5,1.43l-.79-2.31a11.94,11.94,0,0,1,6.31-1.7c5.88,0,7.31,4,7.31,7.86v7.18a28,28,0,0,0,.31,4.61Zm-.52-9.81c-3.81-.08-8.14.6-8.14,4.33a3.1,3.1,0,0,0,3.3,3.34,4.77,4.77,0,0,0,4.64-3.22,3.67,3.67,0,0,0,.2-1.11Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M285.78,186.33l3.77,10.8c.63,1.75,1.15,3.34,1.55,4.93h.12c.43-1.59,1-3.18,1.62-4.93l3.73-10.8h3.66l-7.55,19.22h-3.33L282,186.33Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M319.61,200.31c0,2,0,3.73.16,5.24h-3.1l-.2-3.14h-.07A7.25,7.25,0,0,1,310,206c-3,0-6.63-1.67-6.63-8.42V186.33h3.5V197c0,3.66,1.11,6.12,4.29,6.12a4.93,4.93,0,0,0,4.92-5v-11.8h3.49Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M324.94,202a9.21,9.21,0,0,0,4.61,1.39c2.54,0,3.73-1.28,3.73-2.86s-1-2.58-3.58-3.54c-3.45-1.23-5.08-3.13-5.08-5.44,0-3.09,2.51-5.63,6.63-5.63a9.54,9.54,0,0,1,4.73,1.19l-.88,2.54a7.42,7.42,0,0,0-3.93-1.11c-2.06,0-3.21,1.19-3.21,2.62,0,1.59,1.15,2.3,3.65,3.25,3.33,1.27,5,2.94,5,5.8,0,3.37-2.62,5.76-7.18,5.76a11,11,0,0,1-5.4-1.31Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M252.4,211.7a9,9,0,0,1,1.35-.1,2.79,2.79,0,0,1,2,.61,2.25,2.25,0,0,1,.69,1.76,2.61,2.61,0,0,1-.7,1.9,3,3,0,0,1-2.17.71c-.45,0-.83,0-1.15-.06ZM253,216a3.82,3.82,0,0,0,.64,0,1.88,1.88,0,0,0,2.08-2.08,1.74,1.74,0,0,0-2-1.89,3.22,3.22,0,0,0-.74.07Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M259.17,216.53l-.05-.44h0a1.34,1.34,0,0,1-1.08.52,1,1,0,0,1-1.07-1c0-.85.75-1.31,2.11-1.31v-.07a.72.72,0,0,0-.8-.81,1.7,1.7,0,0,0-.91.26l-.15-.42a2.17,2.17,0,0,1,1.16-.31c1.07,0,1.33.73,1.33,1.43v1.32a5.35,5.35,0,0,0,.06.84Zm-.1-1.79c-.69,0-1.48.11-1.48.79a.56.56,0,0,0,.6.61.87.87,0,0,0,.85-.59.69.69,0,0,0,0-.2Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M261.47,212v1h.91v.48h-.91v1.9c0,.43.12.68.48.68a1.59,1.59,0,0,0,.37,0l0,.48a1.54,1.54,0,0,1-.56.08.89.89,0,0,1-.69-.26,1.33,1.33,0,0,1-.25-.92V213.5h-.54V213h.54v-.85Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M265.05,216.53l-.05-.44h0a1.34,1.34,0,0,1-1.08.52,1,1,0,0,1-1.07-1c0-.85.75-1.31,2.11-1.31v-.07a.72.72,0,0,0-.8-.81,1.77,1.77,0,0,0-.92.26l-.14-.42a2.16,2.16,0,0,1,1.15-.31c1.08,0,1.34.73,1.34,1.43v1.32a5.35,5.35,0,0,0,.06.84Zm-.1-1.79c-.69,0-1.49.11-1.49.79a.57.57,0,0,0,.61.61.88.88,0,0,0,.85-.59.69.69,0,0,0,0-.2Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M268.21,216.53v-3h-.49V213h.49v-.17a1.67,1.67,0,0,1,.41-1.23,1.23,1.23,0,0,1,.85-.33,1.47,1.47,0,0,1,.55.11l-.09.49a1,1,0,0,0-.41-.08c-.54,0-.68.48-.68,1V213h.85v.48h-.85v3Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M273.35,214.75a1.72,1.72,0,0,1-1.75,1.86,1.67,1.67,0,0,1-1.68-1.81,1.71,1.71,0,0,1,1.74-1.86A1.66,1.66,0,0,1,273.35,214.75Zm-2.79,0c0,.77.45,1.35,1.07,1.35s1.07-.57,1.07-1.36c0-.6-.3-1.35-1.05-1.35S270.56,214.11,270.56,214.78Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M274.16,214.11c0-.41,0-.77,0-1.09h.56l0,.69h0a1.05,1.05,0,0,1,1-.77.52.52,0,0,1,.18,0v.6l-.22,0a.9.9,0,0,0-.86.82,2.53,2.53,0,0,0,0,.3v1.87h-.63Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M278.73,212.17h-1.49v-.53h3.63v.53h-1.5v4.36h-.64Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M281.06,214.11c0-.41,0-.77,0-1.09h.56l0,.69h0a1,1,0,0,1,1-.77.52.52,0,0,1,.18,0v.6l-.22,0a.88.88,0,0,0-.85.82,1.39,1.39,0,0,0,0,.3v1.87h-.64Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M285.35,216.53l-.05-.44h0a1.34,1.34,0,0,1-1.08.52,1,1,0,0,1-1.07-1c0-.85.75-1.31,2.11-1.31v-.07a.72.72,0,0,0-.8-.81,1.76,1.76,0,0,0-.91.26l-.15-.42a2.17,2.17,0,0,1,1.16-.31c1.07,0,1.33.73,1.33,1.43v1.32a5.35,5.35,0,0,0,.06.84Zm-.09-1.79c-.7,0-1.49.11-1.49.79a.56.56,0,0,0,.6.61.87.87,0,0,0,.85-.59.71.71,0,0,0,0-.2Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M287.1,213l.69,2c.11.32.21.61.28.9h0c.08-.29.18-.58.3-.9l.68-2h.67l-1.38,3.51h-.61L286.41,213Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M290.63,214.89a1.12,1.12,0,0,0,1.2,1.22,2.37,2.37,0,0,0,1-.18l.11.46a3,3,0,0,1-1.17.21,1.63,1.63,0,0,1-1.73-1.77,1.7,1.7,0,0,1,1.65-1.89,1.49,1.49,0,0,1,1.45,1.65c0,.13,0,.23,0,.3Zm1.87-.46a.91.91,0,0,0-.88-1,1.08,1.08,0,0,0-1,1Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M293.91,211.38h.64v5.15h-.64Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M297.14,216.53c0-.24,0-.59,0-.91v-4.24h.63v2.2h0a1.32,1.32,0,0,1,1.2-.64,1.57,1.57,0,0,1,1.48,1.79,1.67,1.67,0,0,1-1.57,1.88,1.24,1.24,0,0,1-1.18-.66h0l0,.58Zm.66-1.41a1,1,0,0,0,1,1c.67,0,1.07-.54,1.07-1.35s-.37-1.31-1.05-1.31a1,1,0,0,0-1,.79,1,1,0,0,0,0,.26Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M301.49,213l.76,2.07c.08.24.17.51.23.72h0c.07-.21.14-.48.23-.73l.7-2.06h.67l-1,2.5a5.25,5.25,0,0,1-1.2,2.2,1.73,1.73,0,0,1-.79.42l-.16-.54a1.67,1.67,0,0,0,.56-.31,1.89,1.89,0,0,0,.54-.71.47.47,0,0,0,.05-.16.5.5,0,0,0,0-.16l-1.3-3.24Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M306.87,211.64v2.89c0,1.1.49,1.57,1.14,1.57s1.19-.48,1.19-1.57v-2.89h.64v2.85c0,1.5-.79,2.12-1.85,2.12s-1.76-.57-1.76-2.09v-2.88Z" transform="translate(-226.48 -173.12)" fill="#fff"/><path d="M310.79,215.88a1.7,1.7,0,0,0,.84.25c.46,0,.68-.23.68-.52s-.18-.47-.65-.65c-.63-.22-.93-.57-.93-1a1.08,1.08,0,0,1,1.21-1,1.85,1.85,0,0,1,.87.21l-.16.47a1.38,1.38,0,0,0-.72-.2c-.38,0-.59.21-.59.48s.21.42.67.59c.61.23.92.54.92,1.06s-.48,1-1.32,1a1.92,1.92,0,0,1-1-.24Z" transform="translate(-226.48 -173.12)" fill="#fff"/><ellipse cx="64.66" cy="8.55" rx="4.29" ry="3.96" fill="#fff"/><path d="M282.07,184.42c0-5.41,4.06-9.8,9.07-9.8s9.07,4.39,9.07,9.8" transform="translate(-226.48 -173.12)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/></svg>
      </div>
      <div classname="map">
        <Map />
        <Weather />
        <ExchangeRateConverter />
      </div>
      <div className="EXC">
      </div>
      <TodoList />
      <div className="closing">
        <p></p>
        </div>
    </div>
  );
}
export default App;
