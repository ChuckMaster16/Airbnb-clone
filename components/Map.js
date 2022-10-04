import {useState} from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Mapfile({searchResults}) {
  //transform results into the desired object needed to render and find the different
  //locations on the map and there current long and lat requited for geolib 😊
//{/*longitude:55620.2113, latitude: -154561, */}

  const coordinates= searchResults.map(results =>({
    longitude: results.lat,
    latitude:results.long,
  }))


  const center = getCenter(coordinates);
    console.log(center);

  return (
    <Map
      initialViewState={{
          latitude: 51.507351,
          longitude: -0.127758,
          zoom: 10,
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/chuckmaster/cl8scnyto002015pmpmsrckl9"
        mapboxAccessToken={process.env.Mapbox_key}
      >

      </Map>
  );
}

export default Mapfile;
