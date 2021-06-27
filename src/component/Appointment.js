import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

// this props are coming from <Appointment item={item}
const Appointment = ({item, deletePatient}) => {
  const {appointment, label, text, buttonDelete, textDelete} = styles;

  const deleteDialog = id => {
    console.log('deleting .....', id);
    deletePatient(id);
  };

  return (
    <View style={appointment}>
      <View>
        <Text style={label}>Patient: </Text>
        <Text style={text}>{item.patient}</Text>
      </View>
      <View>
        <Text style={label}>Owner: </Text>
        <Text style={text}>{item.owner}</Text>
      </View>
      <View>
        <Text style={label}>Symptoms: </Text>
        <Text style={text}>{item.symptoms}</Text>
      </View>

      <View>
        <TouchableHighlight
          onPress={() => deleteDialog(item.id)}
          style={buttonDelete}>
          <Text style={textDelete}>Delete Appointment &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appointment: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
  },
  buttonDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textDelete: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Appointment;
