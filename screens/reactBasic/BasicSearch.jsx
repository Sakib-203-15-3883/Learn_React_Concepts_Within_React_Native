import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const BasicSearch = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [textInput, setTextInput] = useState('');
  const [filteredText, setFilteredText] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const users = response.data;
        setUsers(users);
      } catch (error) {
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (textInput === '') {
      setFilteredText(users);
    } else {
      const filtered = users.filter((element) =>
        element.title.toLowerCase().includes(textInput.toLowerCase()),
      );
      setFilteredText(filtered);
    }
  }, [textInput, users]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        style={styles.searchInput}
        placeholderTextColor="#999"
      />

      <FlatList
        data={filteredText}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.noResults}>No results found</Text>}
      />
    </View>
  );
};

export default BasicSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark theme background
    padding: 16,
  },
  searchInput: {
    marginBottom: 20,
    padding: 12,
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 25,
    backgroundColor: '#1e1e1e', // Dark background for input
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1f1f1f', // Dark card background
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  noResults: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});
