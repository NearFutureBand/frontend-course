import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import axios from 'axios';

import styles from './style';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.usersPage}>
      <FlatList
        keyExtractor={(user) => user.index}
        data={users}
        renderItem={({item}) => <Text>{item.name.last}</Text>}
      />
    </View>
  );
}

export default UsersPage;
