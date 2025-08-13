import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface CodeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Code: React.FC<CodeProps> = ({ children, variant = 'primary' }) => {
  return (
    <Text style={[styles.code, variant === 'secondary' ? styles.secondary : styles.primary]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  primary: {
    backgroundColor: '#007AFF',
    color: '#fff',
  },
  secondary: {
    backgroundColor: '#F2F2F7',
    color: '#000',
  },
});
