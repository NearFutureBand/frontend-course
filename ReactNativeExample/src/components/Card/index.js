import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './style';

const Card = ({name, picture}) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{uri: picture}} />
      <Text>{`${name.first} ${name.last}`}</Text>
    </View>
  );
};

export default Card;
