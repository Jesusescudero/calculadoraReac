import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [result, setResult] = useState('0');
  const [currentInput, setCurrentInput] = useState('');

  const handleButtonPress = (value) => {
    if (value === 'C') {
      setCurrentInput('');
      setResult('0');
    } else if (value === '=') {
      try {
        setResult(eval(currentInput).toString());
        setCurrentInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === '<') {
      setCurrentInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setCurrentInput((prevInput) => prevInput + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{currentInput || result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {[1, 2, 3].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleButtonPress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('+')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {[4, 5, 6].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleButtonPress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('-')}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {[7, 8, 9].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleButtonPress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('*')}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(0)}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('C')}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('=')}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('/')}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('<')}
        >
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '20%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
