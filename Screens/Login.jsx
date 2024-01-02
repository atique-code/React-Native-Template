import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';


function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignInUser = async () => {
    try {
       auth().signInWithEmailAndPassword(
        email,
        password
      ).then((res)=>{

        //   console.log(res);
          const {email, uid } = res.user;
          if(email === email) {
            navigation.navigate('drawer');
          }
          
          
      })
      setEmail("");
      setPassword("")
    } catch (error) {
      console.log(error);
    }
  };


  const handleSignup =()=>{
    navigation.navigate("SignUp")
  }
  return (
    // <CustomBgImage>
    <View style={styled.container}>
      <Text style={styled.title}>Login Here</Text>
      <View style={styled.fields}>
        <TextInput
          onChangeText={e => setEmail(e)}
          value={email}
          mode="outlined"
          placeholder="Enter your email"
          style={{marginTop: 10}}
        />

        <TextInput
          onChangeText={e => setPassword(e)}
          value={password}
          secureTextEntry={true}
          mode="outlined"
          placeholder="Enter your password"
          style={{marginTop: 10}}
        />
      </View>
      <Button style={styled.Btn} mode="contained" onPress={SignInUser}>
        Login
      </Button>
      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
        <Text style={{marginRight: 4}}>Do you want to Create Account? </Text>
        <Text style={{color: "blue"}} onPress={handleSignup}>Signup</Text>
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    margin: '0 auto',
    marginTop: '20px',
  },
  title: {
    marginTop: '40%',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
  },

  fields: {
    marginTop: '5%',
    marginLeft: 5,
    marginRight: 5,
  },
  Btn: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Login;
