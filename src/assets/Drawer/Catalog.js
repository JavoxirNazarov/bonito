import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={13} height={13} viewBox="0 0 13 13" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.812 7.838V4.735l4.108-1.101a.312.312 0 00-.162-.604L6.81 4.088V2.489c0-.142.095-.265.232-.302l4.86-1.3c.15-.04.231.02.231.155v9.194c0 .202-.183.435-.393.491L6.576 12.11c-.07.02-.087.02-.149.001l-5.159-1.384c-.21-.056-.393-.289-.393-.49V1.041c0-.136.082-.196.232-.156L5.144 1.97a.312.312 0 10.162-.603L1.269.283C.729.138.25.488.25 1.043v9.194c0 .488.377.965.857 1.094l5.153 1.382c.166.049.302.05.481 0l5.162-1.382c.48-.129.856-.606.856-1.095V1.042c0-.554-.478-.904-1.018-.76L6.88 1.584a.937.937 0 00-.695.906v1.766l-.407.11a.312.312 0 10.162.603l.245-.065v3.102l-.407.11a.312.312 0 10.162.603l.246-.066v2.51a.312.312 0 10.625 0V8.485l4.108-1.101a.312.312 0 00-.162-.604L6.812 7.838zm1.038-1.52l3.094-.809a.312.312 0 10-.158-.604l-3.094.809a.313.313 0 00.158.605zm.892 3.525l-.905.242a.313.313 0 01-.162-.604l.905-.242a.312.312 0 01.162.604z"
        fill="#0C6452"
      />
    </Svg>
  );
}

export default SvgComponent;