import 'vite/modulepreload-polyfill';

import 'leaflet';


const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    attributionControl: false,
    renderer: L.canvas()
});



const bulbIcon = L.icon({
    iconUrl: 'data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!--%20License%3A%20Apache.%20Made%20by%20Mozilla%3A%20https%3A%2F%2Fgithub.com%2Fmozilla%2Ffxemoji%20--%3E%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--fxemoji%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%3Cpath%20fill%3D%22%23FFE46A%22%20d%3D%22M411.111%20183.926c0-87.791-68.91-158.959-153.914-158.959S103.283%2096.136%20103.283%20183.926c0%2039.7%2014.093%2075.999%2037.392%20103.856h-.001l33.666%2061.027c8.793%2016.28%2012.057%2026.792%2026.792%2026.792h109.774c14.736%200%2019.071-11.07%2026.792-26.792l36.022-61.027h-.002c23.299-27.857%2037.393-64.156%2037.393-103.856z%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22%23FFF0B7%22%20d%3D%22M112.805%20203.285c0-90.721%2068.378-165.701%20157.146-177.719a150.851%20150.851%200%200%200-13.319-.599c-85.004%200-153.914%2071.169-153.914%20158.959c0%2028.89%207.469%2055.974%2020.512%2079.319c-6.75-18.749-10.425-38.932-10.425-59.96z%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22%23FFDA00%22%20d%3D%22M411.111%20184.266c0-31.445-8.843-60.755-24.097-85.428a160.416%20160.416%200%200%201%204.917%2039.416c0%20104.454-101.138%20189.522-227.481%20192.967l9.89%2017.929c8.793%2016.28%2012.057%2026.792%2026.792%2026.792h109.774c14.736%200%2019.071-11.07%2026.792-26.792l36.022-61.027h-.002c23.299-27.858%2037.393-64.157%2037.393-103.857z%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22%23FAAF63%22%20d%3D%22M321.905%20211.203c.149-.131.297-.251.447-.395c2.787-2.667%205.082-6.921%203.161-10.867c-7.879-16.176-31.97-21.308-49.524-15.951c-.889.271-1.751.566-2.588.885c-9.562-5.583-21.434-6.925-32.001-3.569a35.399%2035.399%200%200%200-3.678%201.394c-5.785-3.38-12.552-5.066-19.294-4.414c-14.112%201.365-26.375%2012.81-28.805%2026.752l-1.112.688c9.617%2015.541%2034.93%2060.071%2036.552%2079.233c2.045%2024.174.002%2089.793-.019%2090.453l11.994.379c.086-2.723%202.086-66.978-.019-91.844c-.938-11.087-7.722-28.758-20.164-52.521c-5.807-11.092-11.445-20.83-14.858-26.576c2.36-7.646%209.61-13.848%2017.586-14.619c2.429-.235%204.893.037%207.251.729a22.68%2022.68%200%200%200-2.32%203.638c-4.047%207.935-2.356%2017.898%203.933%2023.176c3.725%203.125%209.137%204.276%2014.127%203c4.647-1.188%208.239-4.242%209.854-8.379c1.451-3.718%201.328-8.01-.367-12.756a30.665%2030.665%200%200%200-4.05-7.655a28.134%2028.134%200%200%201%2013.61.744c-1.715%201.975-3.027%204.173-3.89%206.556c-1.844%205.101-1.029%2011.163%202.128%2015.822c2.721%204.016%206.856%206.403%2011.348%206.551c.15.005.301.008.45.008c3.935%200%207.67-1.692%2010.562-4.797c3.397-3.647%205.126-8.71%204.624-13.544c-.319-3.073-1.412-6.079-3.172-8.867c12.236-2.223%2024.205%201.911%2029.383%208.186c-3.125%205.2-9.542%2016.11-16.178%2028.785c-12.441%2023.764-19.227%2041.435-20.164%2052.521c-2.104%2024.866-.104%2089.121-.019%2091.844l11.994-.379c-.021-.66-2.064-66.275-.019-90.453c1.459-17.251%2022.113-55.046%2033.237-73.758zm-80.657-3.171c-.279.716-1.331%201.035-1.647%201.116c-1.25.319-2.665.086-3.442-.565c-2.015-1.691-2.453-5.599-.957-8.532a11.21%2011.21%200%200%201%201.85-2.583c1.611%201.828%202.892%203.926%203.707%206.208c.665%201.86.843%203.449.489%204.356zm32.19.654c-.351.375-1.065.992-1.839.976c-.831-.027-1.489-.819-1.808-1.289c-.993-1.467-1.312-3.527-.776-5.009c.618-1.71%201.811-3.109%203.203-4.235c1.55%201.751%202.501%203.634%202.688%205.434c.144%201.371-.447%203.027-1.468%204.123z%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22%236B83A5%22%20d%3D%22M315.932%20402.701H197.897c-6.6%200-12%205.4-12%2012v6.957c0%206.6%205.4%2012%2012%2012h38.122c-11.367%204.229-23.369%2014.285-23.369%2025.946v4.68c9.123%2010.254%2017.619%2028.081%2033.802%2028.081h21.89c12.748%200%2021.804-13.762%2032.836-28.081v-4.68c0-11.661-11.451-21.717-22.548-25.946h37.302c6.6%200%2012-5.4%2012-12v-6.957c0-6.6-5.4-12-12-12z%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22%23ABBDDB%22%20d%3D%22M324.406%20402.701H189.423c-6.6%200-12-5.4-12-12v-6.957c0-6.6%205.4-12%2012-12h134.983c6.6%200%2012%205.4%2012%2012v6.957c0%206.6-5.4%2012-12%2012zm-7.007%2049.915v-6.957c0-6.6-5.4-12-12-12H208.43c-6.6%200-12%205.4-12%2012v6.957c0%206.6%205.4%2012%2012%2012h96.969c6.6%200%2012-5.4%2012-12z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

var footprintStyle = {
	color: 'black',
	fillColor: 'white',
	fillOpacity: 1,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: bulbIcon});
    }
};


let markers = []

// for(let i = 0; i < 3000; i++) {
//     markers.push(L.marker([Math.random() * 180 - 90, Math.random() * 360 - 180]))
// }

// const group = L.layerGroup(markers).addTo(map);

const MyCanvasLayer = L.Canvas.extend({
    redraw(clear) {
        console.log('redraw')
    }
})

const canvasLayer = new MyCanvasLayer().addTo(map);

const geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Group 1"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [0, 0],
                        [50.5, 0],
                        [50.5, 17],
                        [31.5, 17],
                        [31.5, 19],
                        [12, 19],
                        [12, 17],
                        [8, 17],
                        [4, 17],
                        [4, 13],
                        [0, 13]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                25.25,
                9.5
              ],
            },
            "properties": {
              "popupContent": "Fixture 1"
            }
        }
    ]
};

var L1footprint = L.geoJSON(
    geojson,
    footprintStyle
).addTo(map);


map.setView([25.25, 9.5], 3);

var L1 = L.layerGroup([L1footprint]);

var baseMaps = {
    "Group 1": L1
};

L.control.layers(baseMaps,null,{collapsed:false}).addTo(map);
