import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  pingFunction: () => void;
  state: 'idle' | 'loading' | 'success' | 'error';
}

export const Header: React.FC<HeaderProps> = ({ pingFunction, state }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Appwrite Ping Test</Text>
      <TouchableOpacity 
        style={[styles.button, state === 'loading' && styles.buttonLoading]} 
        onPress={pingFunction}
        disabled={state === 'loading'}
      >
        <Text style={styles.buttonText}>
          {state === 'loading' ? 'Pinging...' : 'Ping Server'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonLoading: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
