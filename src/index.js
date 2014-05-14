var api_url = 'https://api.github.com/gists/';
var gist_id = '87c31d2a43a704b4c443';

var map = L.mapbox.map('map', 'community-risd.i87e2i5o')
    .setView([41.796, -71.801], 8);

var build_div = d3.select('body')
    .append('div')
    .style('display', 'none');

d3.json(api_url + gist_id, function (gist) {
    var geojson = JSON.parse(gist.files['markers.geojson'].content);

    var alumni = L.mapbox
        .featureLayer(geojson)
        .addTo(map);

    var keys_to_not_include =['id',
                               'marker-color',
                               'marker-size',
                               'marker-symbol'];

    alumni.eachLayer(function (layer) {
        var all_keys = Object.keys(layer.feature.properties);
        var data = [];

        all_keys.forEach(function (k) {
            if (keys_to_not_include.indexOf(k) === -1) {
                data.push({
                    label: k,
                    value: layer.feature.properties[k]
                });
            }
        });

        build_div.html('');
        build_div.selectAll('.metadata')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'metadata')
            .call(popup_structure);

        var content = build_div.html();

        layer.bindPopup(content);
    });
});

function popup_structure (sel) {
    sel.append('p')
        .attr('class', 'metadata-label')
        .html(function (d) {
            return toTitleCase(d.label);
        });
    sel.append('p')
        .attr('class', 'metadata-value')
        .html(function (d) {
            return d.value;
        });
}
function toTitleCase(str)
{
    return str.replace(/\w\S*/g,
        function(txt){
            return txt.charAt(0)
                      .toUpperCase() +
                   txt.substr(1).toLowerCase();
        });
}