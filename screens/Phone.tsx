import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export default function Phone() {
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const [code, setCode] = useState('');

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user) {
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      const user = await confirm?.confirm(code);
      console.log(user);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+918929223295')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={code}
        onChangeText={text => setCode(text)}
        style={styles.text}
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginVertical: 10,
  },
  text: {
    color: 'black',
  },
});
