import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const LearnUseState = () => {
  const [backgroundColor, setBackgroundColor] = useState('black');

  const changeBackgroundToGreen = () => {
    setBackgroundColor('green');
  };

  const changeBackgroundToBlack = () => {
    setBackgroundColor('black');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      style={{backgroundColor: backgroundColor}}>
      {backgroundColor === 'black' ? (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={changeBackgroundToGreen}
            style={styles.button}>
            <Text style={styles.text}>Set Background color to green </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={changeBackgroundToBlack}
            style={styles.button}>
            <Text style={styles.text}>Set Background color to black </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default LearnUseState;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20,
    padding: '3%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
