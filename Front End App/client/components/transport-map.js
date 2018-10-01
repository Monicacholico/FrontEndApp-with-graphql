import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer} from 'react-leaflet';

import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const center = [60.170672117, 24.941099882];

class TransportMap extends Component {

    render(){
        let renderedStations = this.props.data.stops ? this.renderStations() : null;
        return(
            <Map>
                center={center}
                zoom={17}
                className="transport-map"
                <TileLayer
                    url="https://cdn.digitransit.fi/map/v1/hsl-map/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>
                    contributors"/>
                {renderedStations}
            </Map>
        );

    }
    renderStations(){
        let stops = this.props.data.stops;
        return stops.map(({ id, name, lat, lon}) => {
            return (
                <Marker position={[lat, lon]} key={id}>
                    <Popup>
                        <div>
                            <div><strong>{name}</strong></div>
                        </div>
                    </Popup>
                </Marker>
            );
        })
    }
}

const query = gql`
    query GetStopsInArea($minlat: Float, $maxLat: Float, $minLon: Float, $skip: Boolean = false){
        stops{
            id
            name
            lat
            lot
        }
    }
`;


export default TransportMap
