import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/CardStyles';

interface CardProps {
  guestName: string;
  referenceNumber: string;
  room: string;
  date: string;
  adults: number;
  kids: number;
  senior: number;
  pwd: number;
  hours: number;
  time: string;
  cottages: number;
  electricCharge: number;
  roundTable: number;
  longTable: number;
  monoBlock: number;
  chairs: number;
  others: string;
  downpayment: number;
  balance: number;
  discounts: number;
}

const DetailsRow: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <View style={styles.detailsRow}>
    <Text style={styles.detailsLabel}>{label}</Text>
    <Text style={styles.detailsValue}>{value}</Text>
  </View>
);

const Card: React.FC<CardProps> = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.guestName}>{props.guestName}</Text>
        <View style={styles.roomTag}><Text style={styles.roomText}>{props.room}</Text></View>
        <View style={styles.dateTag}><Text style={styles.dateText}>{props.date}</Text></View>
      </View>
      <Text style={styles.refNumber}>Reference No. {props.referenceNumber}</Text>

      {/* Structured Details Grid */}
      <View style={styles.detailsGrid}>
        {/* First Row */}
        <DetailsRow label="Adults" value={props.adults} />
        <DetailsRow label="Kids" value={props.kids} />
        <DetailsRow label="Senior" value={`${props.senior} Senior ID`} />
        <DetailsRow label="PWD" value={`${props.pwd} PWD ID`} />
        <DetailsRow label="Hours" value={`${props.hours} hours`} />
        <DetailsRow label="Time" value={props.time} />
        <View style={styles.hr} />

        {/* Second Row */}
        <DetailsRow label="Cottages" value={props.cottages} />
        <DetailsRow label="Electric Charge" value={props.electricCharge} />
        <DetailsRow label="Round Table" value={props.roundTable} />
        <DetailsRow label="Long Table" value={props.longTable} />
        <DetailsRow label="Mono Block" value={props.monoBlock} />
        <DetailsRow label="Chairs" value={props.chairs} />
        <View style={styles.hr} />
        <DetailsRow label="Others" value={props.others} />

        {/* Third Row (Financial Info) */}
        <DetailsRow label="Downpayment" value={`${props.downpayment} php`} />
        <DetailsRow label="Balance" value={`${props.balance} php`} />
        <DetailsRow label="Discounts" value={`${props.discounts} php`} />
      </View>

      {/* Assign Staff */}
      <View style={styles.assignContainer}>
        <View style={styles.profilePlaceholder} />
        <Text style={styles.assignText}>Assign Staff</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Total Amount</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Edit Info</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
