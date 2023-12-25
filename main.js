var latitude=22.7868542,longitude=88.3643296

mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:4
})

var img1 = document.querySelector("#lotus")

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([77.259132,28.553558])
.addTo(map);

var img2 = document.querySelector("#gate")

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([75.85133,26.98547])
.addTo(map);

var img3 = document.querySelector("#fort")

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([75.850700,26.985901])
.addTo(map);

var img4 = document.querySelector("#india")

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([72.834641,18.922064])
.addTo(map);

var img5 = document.querySelector("#mahal")

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([18.00,19.20])
.addTo(map);

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true

    })
)
map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    }),
);