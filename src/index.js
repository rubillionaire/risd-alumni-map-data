var api_url = 'https://api.github.com/gists/';
var gist_id = '87c31d2a43a704b4c443';

var map = L.mapbox.map('map', 'community-risd.i87e2i5o')
    .setView([41.796, -71.801], 8);

window.map = map;

d3.json(api_url + gist_id, function (gist) {
    var geojson = JSON.parse(gist.files['markers.geojson'].content);
    console.log(geojson);
    var alumni = map
        .featureLayer
        .setGeoJSON(geojson);
});