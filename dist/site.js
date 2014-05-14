(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcnViZW5yb2RyaWd1ZXovRG9jdW1lbnRzL2NvbW1pc2lvbnMvcmlzZF9tZWRpYS8yMDE0X2FsdW1uaV9tYXAvdmlld2luZy9iYXNpYy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3J1YmVucm9kcmlndWV6L0RvY3VtZW50cy9jb21taXNpb25zL3Jpc2RfbWVkaWEvMjAxNF9hbHVtbmlfbWFwL3ZpZXdpbmcvYmFzaWMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBhcGlfdXJsID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ2lzdHMvJztcbnZhciBnaXN0X2lkID0gJzg3YzMxZDJhNDNhNzA0YjRjNDQzJztcblxudmFyIG1hcCA9IEwubWFwYm94Lm1hcCgnbWFwJywgJ2NvbW11bml0eS1yaXNkLmk4N2UyaTVvJylcbiAgICAuc2V0VmlldyhbNDEuNzk2LCAtNzEuODAxXSwgOCk7XG5cbnZhciBidWlsZF9kaXYgPSBkMy5zZWxlY3QoJ2JvZHknKVxuICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuZDMuanNvbihhcGlfdXJsICsgZ2lzdF9pZCwgZnVuY3Rpb24gKGdpc3QpIHtcbiAgICB2YXIgZ2VvanNvbiA9IEpTT04ucGFyc2UoZ2lzdC5maWxlc1snbWFya2Vycy5nZW9qc29uJ10uY29udGVudCk7XG5cbiAgICB2YXIgYWx1bW5pID0gTC5tYXBib3hcbiAgICAgICAgLmZlYXR1cmVMYXllcihnZW9qc29uKVxuICAgICAgICAuYWRkVG8obWFwKTtcblxuICAgIHZhciBrZXlzX3RvX25vdF9pbmNsdWRlID1bJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFya2VyLWNvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFya2VyLXNpemUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXJrZXItc3ltYm9sJ107XG5cbiAgICBhbHVtbmkuZWFjaExheWVyKGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICB2YXIgYWxsX2tleXMgPSBPYmplY3Qua2V5cyhsYXllci5mZWF0dXJlLnByb3BlcnRpZXMpO1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuXG4gICAgICAgIGFsbF9rZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIGlmIChrZXlzX3RvX25vdF9pbmNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGssXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBsYXllci5mZWF0dXJlLnByb3BlcnRpZXNba11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnVpbGRfZGl2Lmh0bWwoJycpO1xuICAgICAgICBidWlsZF9kaXYuc2VsZWN0QWxsKCcubWV0YWRhdGEnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ21ldGFkYXRhJylcbiAgICAgICAgICAgIC5jYWxsKHBvcHVwX3N0cnVjdHVyZSk7XG5cbiAgICAgICAgdmFyIGNvbnRlbnQgPSBidWlsZF9kaXYuaHRtbCgpO1xuXG4gICAgICAgIGxheWVyLmJpbmRQb3B1cChjb250ZW50KTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBwb3B1cF9zdHJ1Y3R1cmUgKHNlbCkge1xuICAgIHNlbC5hcHBlbmQoJ3AnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbWV0YWRhdGEtbGFiZWwnKVxuICAgICAgICAuaHRtbChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvVGl0bGVDYXNlKGQubGFiZWwpO1xuICAgICAgICB9KTtcbiAgICBzZWwuYXBwZW5kKCdwJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ21ldGFkYXRhLXZhbHVlJylcbiAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLnZhbHVlO1xuICAgICAgICB9KTtcbn1cbmZ1bmN0aW9uIHRvVGl0bGVDYXNlKHN0cilcbntcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZyxcbiAgICAgICAgZnVuY3Rpb24odHh0KXtcbiAgICAgICAgICAgIHJldHVybiB0eHQuY2hhckF0KDApXG4gICAgICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgICAgICAgIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG59Il19
