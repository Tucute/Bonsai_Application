import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Signup_Schema} from './Validation_Signup';
interface InfoCus {
  name: string;
  age: number | null;
  phone: number | null;
  address: string;
}
export default function SignUp({navigation}: any) {
  const handleSinup = async (data: InfoCus) => {
    if (
      data.name === '' ||
      data.age === null ||
      data.phone === null ||
      data.address === ''
    ) {
      Alert.alert('Error', 'Fillout complete information !');
    } else {
      try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('signUpInfo', jsonValue);
        navigation.navigate('SuccessSignup');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        age: null,
        phone: null,
        address: '',
      }}
      validationSchema={Signup_Schema}
      onSubmit={values => {
        setTimeout(() => {
          let data = {
            name: values.name,
            age: values.age,
            phone: values.phone,
            address: values.address,
          };
          handleSinup(data);
        }, 200);
      }}>
      {({errors, touched, handleChange, handleBlur, handleSubmit, values}) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <Image
            style={styles.backgroundImage}
            source={require('../assets/images/headerImage.jpg')}
          />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.contentLogin}>
              <View style={styles.itemLogo}>
                <Image
                  source={require('../assets/images/logo-bonsai-cay-canh-28-1030x1030-removebg-preview.png')}
                  style={styles.logo}
                />
                <Text style={styles.textLogo}>BonSai Application</Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter User Name"
                  placeholderTextColor={'black'}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <Text style={styles.errorText}>* {errors.name}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Enter Age"
                  keyboardType="numeric"
                  placeholderTextColor={'black'}
                  onChangeText={handleChange('age')}
                  onBlur={handleBlur('age')}
                  value={values.age}
                />
                {errors.age && touched.age ? (
                  <Text style={styles.errorText}>* {errors.age}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Enter Phone Number"
                  keyboardType="numeric"
                  placeholderTextColor={'black'}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                {errors.phone && touched.phone ? (
                  <Text style={styles.errorText}>* {errors.phone}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Enter Address"
                  placeholderTextColor={'black'}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                />
                {errors.address && touched.address ? (
                  <Text style={styles.errorText}>* {errors.address}</Text>
                ) : null}
              </View>
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={handleSubmit}>
                <Text style={styles.textLgoin}>Next</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 110,
    height: 110,
  },
  itemLogo: {
    alignItems: 'center',
    marginTop: -30,
  },
  textLogo: {
    color: '#98C13F',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -30,
  },
  textWelcome: {
    color: '#000',
    fontSize: 36,
    fontWeight: 'bold',
  },
  textLogin: {
    color: '#000',
    fontSize: 14,
  },
  contentLogin: {
    paddingHorizontal: 38,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1.221,
    borderBottomColor: '#063',
    color: '#000',
  },
  textInput: {
    gap: 18,
    marginTop: 20,
    marginBottom: 20,
  },
  forgetPass: {
    color: '#0D986A',
    fontSize: 14,
  },
  buttonLogin: {
    backgroundColor: '#0D986A',
    height: 55,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 15,
    marginHorizontal: 30,
    marginBottom: 30,
  },
  textLgoin: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    top: 0,
    left: 0,
    width: '100%',
    height: '80%',
    borderBottomLeftRadius: 180,
    borderBottomRightRadius: 180,
  },
  errorText: {
    fontWeight: 'bold',
    color: 'red',
    margin: 0,
    padding: 0,
  },
});
