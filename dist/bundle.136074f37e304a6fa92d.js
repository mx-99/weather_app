(()=>{"use strict";function t(t){document.getElementById("weather-info").innerHTML=`<div class="error-message">Error: ${t}</div>`}async function n(n){try{if(!n||!n.currentConditions)throw new Error("Incomplete data received from API.");const t={area:n.resolvedAddress||"Unknown location",temp:n.currentConditions.temp||"N/A",description:n.description||"No description",timezone:n.timezone||"Unknown",latitude:n.latitude||"N/A",longitude:n.longitude||"N/A",currentConditions:{datetime:n.currentConditions.datetime||"N/A",conditions:n.currentConditions.conditions||"No conditions",humidity:n.currentConditions.humidity||"N/A",windspeed:n.currentConditions.windspeed||"N/A"}};return console.log(t),function(t){const n=document.getElementById("weather-info");t.error?n.innerHTML=`<div class="error-message">Error: ${t.error}</div>`:n.innerHTML=`\n        <h2>Weather Information</h2>\n        <table>\n            <tr>\n                <th>Location</th>\n                <td>${t.area}</td>\n            </tr>\n            <tr>\n                <th>Temperature</th>\n                <td>${t.temp}°C</td>\n            </tr>\n            <tr>\n                <th>Description</th>\n                <td>${t.description}</td>\n            </tr>\n            <tr>\n                <th>Timezone</th>\n                <td>${t.timezone}</td>\n            </tr>\n            <tr>\n                <th>Latitude</th>\n                <td>${t.latitude}</td>\n            </tr>\n            <tr>\n                <th>Longitude</th>\n                <td>${t.longitude}</td>\n            </tr>\n        </table>\n        \n        <h3>Current Conditions:</h3>\n        <table>\n            <tr>\n                <th>Datetime</th>\n                <td>${t.currentConditions.datetime}</td>\n            </tr>\n            <tr>\n                <th>Conditions</th>\n                <td>${t.currentConditions.conditions}</td>\n            </tr>\n            <tr>\n                <th>Humidity</th>\n                <td>${t.currentConditions.humidity}%</td>\n            </tr>\n            <tr>\n                <th>Windspeed</th>\n                <td>${t.currentConditions.windspeed} km/h</td>\n            </tr>\n        </table>\n    `}(t),t}catch(n){return t(`Error fetching or processing weather data: ${n}`),console.error("Error fetching or processing weather data:",n),{error:n.message}}}function e(){return document.getElementById("location").value.trim().toLowerCase()}async function r(n){if(!n){const t=["Accra","Moscow","Tokyo","New York City","Sydney","Cape Town","Lagos","Nairobi","Rio de Janeiro","Cairo"];n=t[Math.floor(Math.random()*t.length)]}try{const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=FTRT7DE4HGYMP8S8V6G95NNFP`,{mode:"cors"});if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(n){return t(`Error fetching weather: ${n.message}`),console.log(`There was a problem with the fetch operation: ${n.message}`),null}}document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("btn");let o=e();o||(o=void 0),o||r().then((t=>{t&&n(t)})).catch((t=>{console.log("Error fetching weather:",t)})),t.addEventListener("click",(t=>{t.preventDefault(),o=e(),o||(o=void 0),r(o).then((t=>{t&&n(t)})).catch((t=>{console.log("Error fetching weather:",t)}))}))}))})();
//# sourceMappingURL=bundle.136074f37e304a6fa92d.js.map