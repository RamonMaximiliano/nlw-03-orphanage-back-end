const database = require('../../src/database/db')

console.log(database)
/*

FREE MAPS API: https://leafletjs.com/examples/quick-start/  

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
crossorigin="" />

<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
crossorigin=""></script>

As duas tags acima precisam estar no header do HTML onde estará a div com o map ID

*/

const map = L.map('map' ).setView([-30.0275, -51.2278], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


/*CRIANDO O ICONE*/
const icon = L.icon(
    {
        iconUrl: "./images/map-marker.svg",
        iconSize:[58,68],
        iconAnchor:[29,68],
   }
)


/*MARCANDO O MAPA CONFORME CLICAR*/
let marker;
 
map.on('click',(event) =>{
    const lat = event.latlng.lat
    const long = event.latlng.lng

    marker && map.removeLayer(marker)

    marker = L.marker([lat,long], {icon}).addTo(map)
})


