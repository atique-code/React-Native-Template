import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {CustomTextInput} from './common/TextInput';
import {Button} from 'react-native-paper';
import DropdownComponent from './common/CustomDropDown';
import firestore from '@react-native-firebase/firestore';

const data = [
  {label: 'Medical', value: 'Medical'},
  {label: 'Food', value: 'Food'},
  {label: 'Money', value: 'Money'},
];

const FormData = [
  {label: 'Donnation', value: 'Donnation'},
  {label: 'Request', value: 'Request'},
];

const MyForm = () => {
  const [firstName, setFirstName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [cnicNo, setCnicNo] = useState('');
  const [selectRequest, setSelectRequest] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectForm, setSelectForm] = useState(false);

  const handleSubmit = async () => {

    await firestore()
      .collection('Request')
      .doc(selectForm)
      .set({
        fName: firstName,
        FatherName: fatherName,
        contact: contactNumber,
        idCard: cnicNo,
        userRequest: selectRequest,
        status: "pending"
      })
      .then(() => {

        console.log('Form Submitted');
        setFirstName('');
        setFatherName('');
        setContactNumber('');
        setCnicNo('');
      })
      .catch(error => {
        Alert(error);
        console.log('please fill the entire Form');
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Request Form- SMIT
        </Text>
        <View style={styles.Form}>
          <DropdownComponent
            data={FormData}
            isFocus={isFocus}
            value={selectForm}
            setIsFocus={setIsFocus}
            setValue={setSelectForm}
          />
          <Text style={styles.label}>First Name</Text>
          <CustomTextInput
            placeholder="Enter Your Name"
            onChangeText={text => setFirstName(text)}
            value={firstName}
          />
          <Text style={styles.label}>Father Name</Text>
          <CustomTextInput
            placeholder="Enter Your Father Name"
            onChangeText={text => setFatherName(text)}
            value={fatherName}
          />
          <Text style={styles.label}>Contact Number</Text>
          <CustomTextInput
            style={styles.input}
            value={contactNumber}
            onChangeText={text => setContactNumber(text)}
            placeholder="Enter Your Contact Number"
            keyboardType="numeric"
          />
          <Text style={styles.label}>CNIC Number</Text>
          <CustomTextInput
            style={styles.input}
            value={cnicNo}
            onChangeText={text => setCnicNo(text)}
            placeholder="Enter Your CNIC Number"
            keyboardType="numeric"
          />
          <DropdownComponent
            data={data}
            isFocus={isFocus}
            value={selectRequest}
            setIsFocus={setIsFocus}
            setValue={setSelectRequest}
          />
        </View>
        <View style={styles.Btn}>
          <Button mode="contained" onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    backgroundColor: 'white',
  },
  Form: {
    paddingTop: 40,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'gray',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  Btn: {
    alignItems: 'center',
    marginVertical: '10%',
  },
});

export default MyForm;
