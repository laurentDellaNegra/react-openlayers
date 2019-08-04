import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import LayerVector from 'ol/layer/Vector';
import SourceVector from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import WKT from 'ol/format/WKT';
import Point from 'ol/geom/Point';
import './MapContainer.css';
import 'ol/ol.css'

interface MapContainerProps {
  // routes: any;
}
interface MapContainerState {
  map: any;
  featuresLayer: any;
}

export default class MapContainer extends React.Component<MapContainerProps, MapContainerState> {

    componentDidMount() {
      
      // create feature layer and vector source
      const featuresLayer = new LayerVector({
        source: new SourceVector({
          features:[]
        })
      });

      // create map object with feature layer
      const map: any = new Map({
        target: this.refs.mapContainer,
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          }),
          featuresLayer
        ],
        view: new View({
          center: [0, 0],
          zoom: 2
        })
      });

      map.on('click', this.handleMapClick.bind(this));

      // save map and layer references to local state
      this.setState({ 
        map: map,
        featuresLayer: featuresLayer
      });
    }

    // pass new features from props into the OpenLayers layer object
    componentDidUpdate(prevProps: MapContainerProps, prevState: MapContainerState) {
      console.log('prevProps =>', prevProps);
      console.log('prevState =>', prevState);
      // this.state.featuresLayer.setSource(
      //   new SourceVector({
      //     features: this.props.routes
      //   })
      // );
    }

    handleMapClick(event: any) {
      
      // create WKT writer
      var wktWriter: any = new WKT();
      
      // derive map coordinate (references map from Wrapper Component state)
      var clickedCoordinate = this.state.map.getCoordinateFromPixel(event.pixel);
      
      // create Point geometry from clicked coordinate
      var clickedPointGeom = new Point( clickedCoordinate );
      
      // write Point geometry to WKT with wktWriter
      var clickedPointWkt = wktWriter.writeGeometry( clickedPointGeom );
      console.log('Clicked', clickedPointWkt);
      
      // place Flux Action call to notify Store map coordinate was clicked
      //Actions.setRoutingCoord( clickedPointWkt );
  
    }

    render(): JSX.Element {
        return (
          <div className="map" ref="mapContainer"></div>
        )
    }
}