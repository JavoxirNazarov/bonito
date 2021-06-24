import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M12.844 11h-.78l-.277-.27a6.518 6.518 0 001.551-4.23c0-3.59-2.874-6.5-6.421-6.5S.495 2.91.495 6.5 3.37 13 6.917 13c1.59 0 3.053-.59 4.179-1.57l.267.28v.79l4.94 4.99L17.773 16l-4.93-5zm-5.927 0C4.457 11 2.47 8.99 2.47 6.5S4.457 2 6.917 2s4.446 2.01 4.446 4.5S9.377 11 6.917 11z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SearchIcon;
