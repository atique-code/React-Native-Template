import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**AUTHENTICATION WITH EMAIL AND PASSWORD SECTION START HERE */
  const createEmailAndPassword = () => {
    if (email == '' || password == '') {
      Snackbar.show({
        text: 'Please enter your email & password',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false
    ) {
      Snackbar.show({
        text: 'Please enter valid email',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password) == false) {
      Snackbar.show({
        text: 'Please enter valid password',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.uid);
        })
        .catch(err => {
          if (err.code == 'auth/email-already-in-use') {
            Alert.alert('email is already used !!');
          }
        });
    }

    setEmail('');
    setPassword('');
  };

  /**AUTHENTICATION WITH EMAIL AND PASSWORD SECTION END HERE*/

  /**AUTHENTICATION WITH Google SECTION START HERE*/
  function signInwithGoogle() {
    GoogleSignInFunc().then(data => {
      console.log('user data ', data);
    });
  }
  const GoogleSignInFunc = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.configure({
        webClientId:
          '620229470463-l4opaum3n5vhr6eqo47et6j5dernnfrp.apps.googleusercontent.com',
        offlineAccess: true,
        hostedDomain: '',
        forceCodeForRefreshToken: true,
        accountName: '',
      });

      const userInfo = await GoogleSignin.signIn();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    navigation.navigate('drawer');


      return userInfo;
    } catch (error) {
      console.log(error);
    }
  };

  const googleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  /**AUTHENTICATION WITH Google SECTION END HERE*/

  const handleSignIn =()=>{
    navigation.navigate("Login")
  }

  return (
    // <CustomBgImage>
    <View style={styled.container}>
      <Text style={styled.title}> Sign Up Here!!</Text>
      <View style={styled.fields}>
        <TextInput
          onChangeText={e => setEmail(e)}
          value={email}
          mode="outlined"
          placeholder="Enter your email"
          style={{margin: 10}}
        />

        <TextInput
          onChangeText={e => setPassword(e)}
          value={password}
          secureTextEntry={true}
          mode="outlined"
          placeholder="Enter your password"
          style={{margin: 10}}
        />
      </View>

      <Button
        style={styled.Btn}
        mode="contained"
        onPress={createEmailAndPassword}>
        Sign Up
      </Button>
      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
        <Text style={{marginRight: 4}}>Already have an account?</Text>
        <Text style={{color: "blue"}} onPress={handleSignIn}>Signin</Text>
      </View>

      <Text style={styled.otherOption}>
        --------------------or-----------------------
      </Text>

      <View style={styled.BtnGoogle}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => signInwithGoogle()}
      />
      </View>
    </View>
    // </CustomBgImage>
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
  otherOption: {
    marginTop: '5%',
    textAlign: 'center',
    color: 'black',
  },
  BtnGoogle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
});

export default SignUp;
