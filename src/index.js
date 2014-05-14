var geojson_url = 'https://gist.githubusercontent.com/'+
                  'community-risd/87c31d2a43a704b4c443/'+
                  'raw/12fc9cebf30b3f243bafac3818e421dbb'+
                  '706cc4e/markers.geojson';

var map = L.mapbox.map('map', 'community-risd.i87e2i5o')
    .setView([41.796, -71.801], 8);

window.map = map;

d3.json(geojson_url)
    .get(function (err, geojson) {
        if (err) return console.warn(err);
        var alumni = L.mapbox
            .featureLayer
            .setGeoJSON(geojson);
    });