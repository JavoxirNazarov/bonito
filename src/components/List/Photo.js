import React, {useState} from 'react';
import {Image} from 'react-native';
import DefaultImg from '../../assets/default.png';
import {host, token} from '../../Constants/network';

export default function Photo({id}) {
  const [error, setError] = useState(false);

  if (error)
    return (
      <Image
        source={DefaultImg}
        resizeMode="contain"
        style={{width: '100%', height: '100%'}}
      />
    );

  return (
    <Image
      source={{
        uri: `${host}/preview/${id}`,
        cache: 'force-cache',
        headers: {
          Authorization: `Basic ${token}`,
        },
      }}
      style={{width: '100%', height: '100%'}}
      onError={() => setError(true)}
      resizeMode="cover"
    />
  );
}
