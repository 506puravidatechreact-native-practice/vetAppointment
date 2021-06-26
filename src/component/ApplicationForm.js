import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ApplicationForm = () => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [mobilePhone, setMobilePnohe] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDate = date => {
    //console.log(date);
    const dateOptions = {year: 'numeric', month: 'long', day: '2-digit'};
    setDate(date.toLocaleDateString(undefined, dateOptions));
    //console.warn('A date has been picked: ', date.toLocaleDateString(dateOptions),);
    hideDatePicker();
  };
  const handleTime = time => {
    //console.log(time);
    const timeOptions = {hour: 'numeric', minute: '2-digit', hour12: false};
    setTime(time.toLocaleString(undefined, timeOptions));
    //console.warn('A time has been picked: ', time.toLocaleString(timeOptions));
    hideTimePicker();
  };

  const createNewAppointment = () => {
    if (
      patient.trim() == '' ||
      owner.trim() == '' ||
      mobilePhone.trim() == '' ||
      date.trim() == '' ||
      time.trim() == '' ||
      symptoms.trim() == ''
    ) {
      showErrorDialog();
      //console.log('something wrong happens');
      return null;
    }
    console.log('creating new Appointment');
  };

  // Message to show the error
  const showErrorDialog = () => {
    Alert.alert('Error', 'Message', [
      {
        text: 'something wrong happens',
      },
    ]);
    console.log('something wrong happens');
  };

  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Patient:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient(text)}
            //onChangeText={text => console.log(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Owner:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setOwner(text)}
            //onChangeText={text => console.log(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setMobilePnohe(text)}
            //onChangeText={text => console.log(text)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.label}>Date: </Text>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDate}
            onCancel={hideDatePicker}
            //locale='es_ES'
            locale="en_US"
          />
          <Text>{date}</Text>
        </View>
        <View>
          <Text style={styles.label}>Time: </Text>
          <Button title="Show Time Picker" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTime}
            onCancel={hideTimePicker}
            locale="en_US"
          />
          <Text>{time}</Text>
        </View>
        <View>
          <Text style={styles.label}>Symptoms:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setSymptoms(text)}
            //onChangeText={text => console.log(text)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => createNewAppointment()}
            style={styles.buttonSubmit}>
            <Text style={styles.textSubmit}>Submit Appointment &gt;&gt;</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '1.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 40,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  buttonSubmit: {
    padding: 10,
    backgroundColor: '#9370DB',
    marginVertical: 10,
  },
  textSubmit: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default ApplicationForm;
