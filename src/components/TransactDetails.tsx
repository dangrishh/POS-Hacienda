import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styles from '../styles/CardStyles';
import { CardProps } from '../components/TransactCard';

const TransactDetails: React.FC<CardProps> = (props) => {
  return (
    <View>

      {/* Modal for Transaction Details */}
      <Modal animationType="fade" transparent visible={props.modalVisible} onRequestClose={() => props.setModalVisible?.(false)}>
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalContainer}>
            <Text style={modalStyles.modalHeader}>Transaction Details</Text>
            <Text>Guest: {props.guestName}</Text>
            <Text>Reference No: {props.referenceNumber}</Text>
            <Text>Time: {props.time}</Text>
            <Text>Downpayment: {props.downpayment} php</Text>
            <Text>Balance: {props.balance} php</Text>

            <TouchableOpacity onPress={() => props.setModalVisible?.(false)} style={modalStyles.closeButton}>
              <Text style={modalStyles.closeText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Modal Styling
const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Creates the blurred effect
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TransactDetails;
