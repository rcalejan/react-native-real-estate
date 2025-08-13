import { Log } from '@/types/log';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface LogsProps {
  toggleBottomSheet: () => void;
  isOpen: boolean;
  logs: Log[];
}

export const Logs: React.FC<LogsProps> = ({ toggleBottomSheet, isOpen, logs }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleBottomSheet}>
        <Text style={styles.headerText}>
          {isOpen ? 'Hide Logs' : 'Show Logs'} ({logs.length})
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.logsContainer}>
          {logs.map((log, index) => (
            <View key={index} style={styles.logItem}>
              <Text style={styles.logMethod}>{log.method} {log.path}</Text>
              <Text style={styles.logStatus}>Status: {log.status}</Text>
              <Text style={styles.logDate}>{log.date.toLocaleString()}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  logsContainer: {
    flex: 1,
    padding: 16,
  },
  logItem: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  logMethod: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  logStatus: {
    fontSize: 12,
    color: '#6c757d',
    marginBottom: 2,
  },
  logDate: {
    fontSize: 12,
    color: '#6c757d',
  },
});
