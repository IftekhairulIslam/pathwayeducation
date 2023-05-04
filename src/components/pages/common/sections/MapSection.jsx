import React from "react";
import { mapMarker } from "../../../../utilities/imageSources";

const MapSection = () => {
  return (
    <div className="section-block no-padding">
      <div className="row collapse full-width">
        <div className="column width-12 center">
          <div
            className="map-container"
            data-coordinates="[[23.7992511, 90.4235219]]"
            data-icon={'"' + mapMarker + '"'}
            data-info='"House # 8, Road # 3 (Beside Main Road )Progoti Sarani"'
            data-zoom-level="16"
            data-style="color"
          >
            <div className="map-canvas" id="map-canvas-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
