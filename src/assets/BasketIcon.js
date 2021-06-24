import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BasketIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19 16.99H8.812a2 2 0 01-1.94-1.515l-.385-1.54L4 3.99H2"
        stroke="#806ED8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5 5.99H19a1 1 0 011 1v3.21a3 3 0 01-2.793 2.993l-10.721.742"
        stroke="#806ED8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.992 20a.376.376 0 00.001.75.375.375 0 10-.001-.75z"
        fill="#806ED8"
        stroke="#806ED8"
        strokeWidth={1.5}
      />
      <Path
        d="M17.601 20a.376.376 0 00.001.75.375.375 0 000-.75"
        fill="#806ED8"
      />
      <Path
        d="M17.601 20a.376.376 0 00.001.75.375.375 0 000-.75"
        stroke="#806ED8"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default BasketIcon;
