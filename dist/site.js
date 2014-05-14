(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcnViZW5yb2RyaWd1ZXovRG9jdW1lbnRzL2NvbW1pc2lvbnMvcmlzZF9tZWRpYS8yMDE0X2FsdW1uaV9tYXAvdmlld2luZy9iYXNpYy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3J1YmVucm9kcmlndWV6L0RvY3VtZW50cy9jb21taXNpb25zL3Jpc2RfbWVkaWEvMjAxNF9hbHVtbmlfbWFwL3ZpZXdpbmcvYmFzaWMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYXBpX3VybCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL2dpc3RzLyc7XG52YXIgZ2lzdF9pZCA9ICc4N2MzMWQyYTQzYTcwNGI0YzQ0Myc7XG5cbnZhciBtYXAgPSBMLm1hcGJveC5tYXAoJ21hcCcsICdjb21tdW5pdHktcmlzZC5pODdlMmk1bycpXG4gICAgLnNldFZpZXcoWzQxLjc5NiwgLTcxLjgwMV0sIDgpO1xuXG53aW5kb3cubWFwID0gbWFwO1xuXG5kMy5qc29uKGFwaV91cmwgKyBnaXN0X2lkLCBmdW5jdGlvbiAoZ2lzdCkge1xuICAgIHZhciBnZW9qc29uID0gSlNPTi5wYXJzZShnaXN0LmZpbGVzWydtYXJrZXJzLmdlb2pzb24nXS5jb250ZW50KTtcbiAgICBjb25zb2xlLmxvZyhnZW9qc29uKTtcbiAgICB2YXIgYWx1bW5pID0gbWFwXG4gICAgICAgIC5mZWF0dXJlTGF5ZXJcbiAgICAgICAgLnNldEdlb0pTT04oZ2VvanNvbik7XG59KTsiXX0=
