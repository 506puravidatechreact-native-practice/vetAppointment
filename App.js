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
    <View style={styles.container}>
      <Text style={styles.title}>Vet Appointment Manager</Text>

      <View style={styles.content}>
        <ApplicationForm />

        <Text style={styles.title}>
          {appointments.length > 0
            ? 'Manage Your Appointments'
            : 'There are no appointments, You add an appointment'}
        </Text>

        <FlatList
          style={styles.list}
          data={appointments}
          renderItem={({item}) => (
            <Appointment item={item} deletePatient={deletePatient} />
          )}
          keyExtractor={appointment => appointment.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4169E1',
    flex: 1,
  },
  title: {
    color: '#FFF',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  list: {
    flex: 1,
  },
});

export default App;
