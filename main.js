let marker, map

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const asu = {
        lat: 36.7527800,
        lng: -3.8744000
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: asu
    })

    marker = new google.maps.Marker({
        position: asu,
        map,
        title: "Nerja"
    })
    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Defaoult"
    })
    marker = new google.maps.Marker({
        position: { lat: -25.3006600, lng: -57.6359100},
        map,
        title: "Asuncion"
    })
}

///////////////////////////////////////////////-----------------------------//////////////////////////////////////////////////
//LO DE AQUI ABAJO ES PARA OBTENER LA GEOLOCALIZACION DE TU NAVEGADOR EN ESE MOMENTO

// function geoPosicion(){
//     if(navigator.geolocation){
//         const geoLoc = navigator.geolocation
//         const options = { timeout: 60000 }
//         const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
//     }else{
//         alert:("Tu navegador no admite geolocalizacion")
//     }
// }

// function centraMapa(position){
//     const nuevaPos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//     }
//     marker.setPosition(nuevaPos)
//     map.setCenter(nuevaPos)
// }





// function onError(){
//     console.log("Hubo un error")
//     console.log(error)
// }