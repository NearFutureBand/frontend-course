import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import axios from 'axios';

import Card from '../../components/Card';
import styles from './style';

function UsersScreen({navigation}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await axios.get(
          'https://serverless-backend-ky9b8rmuq.now.sh/api/users',
        );
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  }, []);

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
    </View>
  );
}

export default UsersScreen;
