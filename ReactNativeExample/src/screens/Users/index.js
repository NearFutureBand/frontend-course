import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Card from '../../components/Card';
import styles from './style';
import {getUsers} from '../../actions';

function UsersScreen({navigation}) {
  const dispatch = useDispatch();

  dispatch({type: 'ACTION'});

  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const renderOnePerson = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile', {index: item.index})}>
        <Card name={item.name} picture={item.picture} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(user) => user.index}
        data={users}
        renderItem={renderOnePerson}
      />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}

export default UsersScreen;
