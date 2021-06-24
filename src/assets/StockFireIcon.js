import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={19} height={18} viewBox="0 0 19 18" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M15.823 10.625c-.198-2.578-1.399-4.193-2.457-5.619-.98-1.32-1.827-2.459-1.827-4.14a.36.36 0 00-.57-.293c-1.59 1.138-2.917 3.056-3.38 4.886-.322 1.274-.365 2.706-.371 3.652-1.469-.314-1.801-2.51-1.805-2.535a.362.362 0 00-.513-.273c-.077.037-1.89.959-1.996 4.637a6.49 6.49 0 006.474 6.85h.019a6.49 6.49 0 006.463-6.482c0-.18-.037-.683-.037-.683zM9.378 17.07c-1.192 0-2.16-1.032-2.16-2.301 0-.043-.001-.087.002-.14.015-.536.116-.901.228-1.144.209.449.582.861 1.189.861a.36.36 0 00.36-.36c0-.513.01-1.104.138-1.638.114-.473.385-.977.729-1.38.153.524.451.948.742 1.361.417.593.848 1.205.923 2.249.005.062.01.124.01.19 0 1.27-.97 2.302-2.161 2.302z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path
            fill="#fff"
            transform="translate(.736 .505)"
            d="M0 0h17.285v17.285H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
