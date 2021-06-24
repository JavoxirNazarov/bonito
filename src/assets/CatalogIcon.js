import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function CatalogIcon(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)" fill="#806ED8">
        <Path d="M12.344 1.758c-.683 0-1.311.235-1.81.628A2.934 2.934 0 007.656 0H2.344v1.758H0V20h20V1.758h-7.656zm0 1.172h6.484v11.21h-6.484c-.66 0-1.268.22-1.758.588V4.688c0-.97.788-1.758 1.758-1.758zm-1.758 14.14c0-.969.788-1.758 1.758-1.758h6.484v1.172h-6.484c-.66 0-1.268.219-1.758.586zM3.516 1.172h4.14c.97 0 1.758.788 1.758 1.758v11.798a2.916 2.916 0 00-1.758-.587h-4.14V1.17zM2.344 2.93v12.382h5.312c.97 0 1.758.79 1.758 1.758a2.922 2.922 0 00-1.758-.586H1.172V2.93h1.172zM1.172 17.656h6.484c.764 0 1.415.49 1.657 1.172H1.172v-1.172zm9.515 1.172a1.76 1.76 0 011.657-1.172h6.484v1.172h-8.141z" />
        <Path d="M17.656 4.102h-5.898v8.867h5.898V4.102zm-1.172 7.695H12.93V5.273h3.554v6.524zM8.242 2.344H4.687V7.07h3.555V2.344zM7.07 5.898H5.86V3.516h1.21v2.382zM8.242 8.242H4.687v4.727h3.555V8.242zM7.07 11.797H5.86V9.414h1.21v2.383z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CatalogIcon;
