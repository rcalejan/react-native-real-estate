import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  href?: string;
}

export const Card: React.FC<CardProps> = ({ children, href }) => {
  if (href) {
    return (
      <TouchableOpacity style={styles.card} onPress={() => {}}>
        {children}
      </TouchableOpacity>
    );
  }
  
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 300,
  },
});
