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
} from 'react-native';
import {Formik} from 'formik';
import {SignupSchema} from './Validation';
import React from 'react';
import useSigup from '../hooks/useSignup';

export default function SuccessSignup({navigation}: any) {
  const {handleSignUp, signUpInfo} = useSigup({navigation});
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        setTimeout(() => {
          let data = {
            ...signUpInfo,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
          };
          handleSignUp(data);
        }, 100);
      }}>
      {({errors, touched, handleChange, handleBlur, values, handleSubmit}) => (
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
                  placeholder="Enter Email"
                  placeholderTextColor={'black'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <Text style={styles.errorText}>* {errors.email}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  placeholderTextColor={'black'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <Text style={styles.errorText}>* {errors.password}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor={'black'}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={handleSubmit}>
                <Text style={styles.textLgoin}>Sign Up</Text>
              </TouchableOpacity>
              <View style={styles.signupNav}>
                <Text style={styles.textAccount}>
                  Already have you an account?
                </Text>
                <Text
                  style={styles.textSignup}
                  onPress={() => navigation.navigate('Login')}>
                  Login
                </Text>
              </View>
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
    width: 150,
    height: 150,
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
    gap: 22,
    marginTop: 20,
  },
  forgetPass: {
    color: '#0D986A',
    fontSize: 14,
  },
  buttonLogin: {
    backgroundColor: '#0D986A',
    height: 55,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
    marginHorizontal: 30,
  },
  textLgoin: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },
  signupNav: {
    flexDirection: 'row',
    textAlign: 'center',
    paddingLeft: 40,
    marginTop: 10,
  },
  textAccount: {
    color: '#000',
    fontSize: 14,
  },
  textSignup: {
    color: '#0D986A',
    fontSize: 14,
    fontWeight: 'bold',
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
