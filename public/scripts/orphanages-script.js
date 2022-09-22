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

const map = L.map('map').setView([-30.0275, -51.2278], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


const icon = L.icon(
    {
        iconUrl: "./images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    }
)




//USING FAKE DATA

// 5 - STEP - usando os dados para criar 2 markers e pop ups no mapa
function addMarker({id,name,lat,lng}) {
    //create popup
    var popup = L.popup(
        {
            closeButton: false,
            className: "map-popup",
            minWidth: 240,
            minHeight: 240
        }
    ).setContent(`${name}! <a href='hope?${id}'><img src='./images/arrow-white.svg'></a>`)

    //create and add marker
    L.marker([lat,lng], { icon: icon }).addTo(map).bindPopup(popup)
}


// 3 - STEP - Pegando os items span da dom da pagina "orphanages.hbs"
const orphanagesSpans = document.querySelectorAll(".orphanages span")

// 4 - STEP - jogando os dados deles para a função criada "addMarker"
for (item of orphanagesSpans){
    const singleOrphanage = {
        id: item.dataset.id,
        name: item.dataset.name,
        lat: item.dataset.lat,
        lng: item.dataset.lng
    } 
     addMarker(singleOrphanage) 
}

//USING FAKE DATA







