import React, { useState } from 'react'
import './contactos.css'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';



function success({coords: {latitude, longitude, accuracy}}){

  map = new google.maps.Map(map, {
  center: {lat: latitude, lng: longitude},
  zoom: 15
  })

  const marker = new google.maps.Marker({
  position: {lat: latitude, lng: longitude},
  map: map,
  });
}

function error(){
  console.log( `ERROR: ${error}, ${error.message}` );
}

const GoogleMap = (props) => {
    const [infoWindow, setInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});

    const style = {
        height: '100vh',
        width: '100vw'
    };

    const coords = { lat: 10.3019, lng: -85.8411 };

    let onMarkerClick = ((props, marker, e) => {
        setSelectedPlace(props)
        setActiveMarker(marker)
        setInfoWindow(true)
    })

    let onMapClick = ((props) => {
        if(infoWindow) {
            setInfoWindow(false)
            setActiveMarker(null)
        }
    })

    return (
        <div>
            <Map
                google={props.google}
                onClick={onMapClick}
                zoom={15}
                style={style}
                initialCenter={coords}
            >
                <Marker
                    onClick={onMarkerClick}
                    title={'CoolLab Office'}
                    name={'CoolLab.'}
                    position={coords} />
                <InfoWindow
                    marker={activeMarker}
                    visible={infoWindow}>
                    <div>
                        <h1>{selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({apiKey: 'AIzaSyAVG8wRE7IrVTFSOoWnSbrH5hR09BtQvsQ'})(GoogleMap);
