import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffect = () => {
  const [users, setUsers] = useState([]);
  const [indicator, setIndicator] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const usersData = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        if (!usersData.ok) {
          throw new Error('Network response was not ok');
        }
        const users = await usersData.json();
        setUsers(users);
      } catch (error) {
        setError(error.message);
      } finally {
        setIndicator(false);
      }
    };

    fetchUsersData();
  }, []);

  const renderUsersList = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.zipcode}>Zipcode: {item.address.zipcode}</Text>
      </View>
    );
  };

  if (indicator) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Button title="Retry" onPress={() => {
          setIndicator(true);
          setError(null);
          fetchUsersData(); // Call fetch again on retry
        }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderUsersList}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default UseEffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light background for contrast
  },
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
    borderColor: '#ddd',
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  zipcode: {
    fontSize: 14,
    color: '#888',
  },
  centered: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
});
