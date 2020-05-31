import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';

import styles from './style';

const ProfilePage = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Profile page</Text>
      <Text>{route.params?.index}</Text>
    </View>
  );
};

export default ProfilePage;
