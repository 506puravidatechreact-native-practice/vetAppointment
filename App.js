import React, {useState} from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';

import Appointment from './src/component/Appointment';
import ApplicationForm from './src/component/ApplicationForm';

const App = () => {
  //define the state appointments
  const [appointments, setAppointments] = useState([
    {id: '1', patient: 'Hook', owner: 'Juan', symptoms: 'fever'},
    {id: '2', patient: 'Redux', owner: 'Pedro', symptoms: 'stuffy nose'},
    {id: '3', patient: 'Context', owner: 'Jose', symptoms: 'sore throat.'},
  ]);

  const deletePatient = id => {
    setAppointments(currentAppointment => {
      return currentAppointment.filter(appointment => appointment.id !== id);
    });
  };

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Vet Appointment Manager</Text>

      <ApplicationForm />

      <Text style={styles.title}>
        {appointments.length > 0
          ? 'Manage Your Appointments'
          : 'There are no appointments, You add an appointment'}
      </Text>

      <FlatList
        data={appointments}
        renderItem={({item}) => (
          <Appointment item={item} deletePatient={deletePatient} />
        )}
        keyExtractor={appointment => appointment.id}
      />

      {/*
      {appointments.map(appointment => (
        <View>
          <Text>{appointment.patient}</Text>
        </View>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#4169E1',
    //minHeight: '100%',
    flex: 1,
    //paddingHorizontal: 10,
    //marginHorizontal: 10,
  },
  title: {
    color: '#FFF',
    marginTop: 20,
    padding: 20,
    //marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
