(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcnViZW5yb2RyaWd1ZXovRG9jdW1lbnRzL2NvbW1pc2lvbnMvcmlzZF9tZWRpYS8yMDE0X2FsdW1uaV9tYXAvdmlld2luZy9iYXNpYy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3J1YmVucm9kcmlndWV6L0RvY3VtZW50cy9jb21taXNpb25zL3Jpc2RfbWVkaWEvMjAxNF9hbHVtbmlfbWFwL3ZpZXdpbmcvYmFzaWMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGdlb2pzb25fdXJsID0gJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vJytcbiAgICAgICAgICAgICAgICAgICdjb21tdW5pdHktcmlzZC84N2MzMWQyYTQzYTcwNGI0YzQ0My8nK1xuICAgICAgICAgICAgICAgICAgJ3Jhdy8xMmZjOWNlYmYzMGIzZjI0M2JhZmFjMzgxOGU0MjFkYmInK1xuICAgICAgICAgICAgICAgICAgJzcwNmNjNGUvbWFya2Vycy5nZW9qc29uJztcblxudmFyIG1hcCA9IEwubWFwYm94Lm1hcCgnbWFwJywgJ2NvbW11bml0eS1yaXNkLmk4N2UyaTVvJylcbiAgICAuc2V0VmlldyhbNDEuNzk2LCAtNzEuODAxXSwgOCk7XG5cbndpbmRvdy5tYXAgPSBtYXA7XG5cbmQzLmpzb24oZ2VvanNvbl91cmwpXG4gICAgLmdldChmdW5jdGlvbiAoZXJyLCBnZW9qc29uKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgdmFyIGFsdW1uaSA9IEwubWFwYm94XG4gICAgICAgICAgICAuZmVhdHVyZUxheWVyXG4gICAgICAgICAgICAuc2V0R2VvSlNPTihnZW9qc29uKTtcbiAgICB9KTsiXX0=
