import React, {useEffect, useMemo, useState} from 'react';
import {Dimensions, Pressable} from 'react-native';
import {Image} from 'react-native-elements';
import ImageView from 'react-native-image-viewing';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import DefaultImg from '../../assets/default.png';
import {host, token} from '../../Constants/network';

const {width} = Dimensions.get('window');

export default function Photo({id, number, picked, setPicked}) {
  const [modal, setModal] = useState(false);
  const [chosen, setChoosen] = useState(0);
  const [height, setHeight] = useState(350);

  const array = useMemo(() => {
    return new Array(number).fill();
  }, [number]);

  useEffect(() => {
    if (picked)
      Image.getSizeWithHeaders(
        picked,
        {Authorization: `Basic ${token}`},
        (swidth, sheight) => {
          if (swidth && sheight) setHeight((width * sheight) / swidth);
        },
        (err) => console.log(err),
      );
  }, [picked]);

  if (!number)
    return <Image source={DefaultImg} style={{width, height: 350}} />;

  return (
    <>
      {picked ? (
        <Image
          style={{width, height}}
          source={{
            uri: picked,
            cache: 'force-cache',
            headers: {
              Authorization: `Basic ${token}`,
            },
          }}
          resizeMode="cover"
          onError={() => setPicked('')}
        />
      ) : (
        <>
          <Carousel
            data={array}
            renderItem={({_, index}) => (
              <PhotoList key={index} id={id} i={index} setModal={setModal} />
            )}
            sliderWidth={width}
            itemWidth={width}
            swipeThreshold={0}
            onSnapToItem={(index) => setChoosen(index)}
          />

          <Pagination
            dotsLength={array.length}
            activeDotIndex={chosen}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: '#FE2550',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </>
      )}

      <ImageView
        swipeToCloseEnabled={false}
        images={array.map((_, i) => ({
          uri: `${host}/nphoto/${id}/${i + 1}`,
          cache: 'force-cache',
          headers: {
            Authorization: `Basic ${token}`,
          },
        }))}
        imageIndex={chosen}
        visible={modal}
        onRequestClose={() => setModal(false)}
      />
    </>
  );
}

function PhotoList({id, i, setModal}) {
  const [error, setError] = useState(false);
  const [height, setHeight] = useState(350);

  useEffect(() => {
    Image.getSizeWithHeaders(
      `${host}/nphoto/${id}/${i + 1}`,
      {Authorization: `Basic ${token}`},
      (swidth, sheight) => {
        if (swidth && sheight) setHeight((width * sheight) / swidth);
      },
      (err) => console.log(err),
    );
  }, []);

  return useMemo(() => {
    if (error)
      return <Image source={DefaultImg} style={{width, height: 350}} />;

    return (
      <Pressable onPress={() => setModal(true)}>
        <Image
          source={{
            uri: `${host}/nphoto/${id}/${i + 1}`,
            cache: 'force-cache',
            headers: {
              Authorization: `Basic ${token}`,
            },
          }}
          resizeMode="cover"
          style={{width, height: height < 350 ? 350 : height}}
          onError={() => setError(true)}
        />
      </Pressable>
    );
  }, [height, error]);
}
