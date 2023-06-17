import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const Email = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<FirebaseAuthTypes.UserCredential>();
  function login() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userInfo: FirebaseAuthTypes.UserCredential) => {
        setUser(userInfo);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  function register() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userInfo: FirebaseAuthTypes.UserCredential) => {
        setUser(userInfo);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  function signOut() {
    auth()
      .signOut()
      .then(() => setUser(undefined));
  }

  return (
    <>
      {user ? (
        <>
          <View className="flex-1 flex-row gap-x-2 justify-center">
            <Text className="text-black">Hello</Text>
            <Text className="text-black">{user?.user.displayName}</Text>
            <Text className="text-black">{user?.user.email}</Text>
          </View>
          <View className="p-4">
            <Button title="Signout" onPress={() => signOut()} />
          </View>
        </>
      ) : (
        <View className="flex-1 mt-10">
          <Text className="text-black text-3xl font-bold text-center">
            Email Auth
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-2 mt-5 mx-5 text-black"
            placeholder="Enter your email id"
            placeholderTextColor={'gray'}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-2 mt-5 mx-5 text-black"
            placeholder="Enter your password"
            placeholderTextColor={'gray'}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <View className="flex flex-row gap-x-4 justify-center mt-5">
            <View>
              <Button title="Register" onPress={() => register()} />
            </View>
            <View>
              <Button title="Login" onPress={() => login()} />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Email;
