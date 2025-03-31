import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/LeftSidebarStyles';

const LeftSidebar = () => {
  return (
    <View style={styles.sidebar}>
      <View style={styles.profileCircle} />
      <Text style={styles.staffName}>Rhenzie Reyes</Text>
      <Text style={styles.staffRole}>Assigned Staff</Text>
      <TouchableOpacity style={styles.navButton}><Text style={styles.navText}>Home</Text></TouchableOpacity>
      <TouchableOpacity style={styles.navButton}><Text style={styles.navText}>Calendar</Text></TouchableOpacity>
    </View>
  );
};

export default LeftSidebar;