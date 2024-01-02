import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Alert, TextInput, Button } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import axios, { AxiosResponse } from 'axios';
import { useNavigation } from '@react-navigation/native';
interface FormData {
  firstName: string;
  lastName: string;
}

interface ApiResponse {
  id: string;
}

const Nutritional_Summary = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.post('https://645f33db9d35038e2d1ec62a.mockapi.io/users', data);
      console.log('API response:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{
                    width: '90%',
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 10,
                  }}
                  placeholder="First name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="firstName"
            />
            {errors.firstName && <Text>This is required.</Text>}
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{
                    width: '90%',
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 10,
                  }}
                  placeholder="Last name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="lastName"
            />
            <View style={{ padding: 20 }}>
              <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Form info user</Text>
      </TouchableOpacity>
      <View style={{marginVertical:30}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>navigation.navigate('UploadImage')}>
        <Text style={styles.textStyle}>Remove upload Image Screen</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nutritional_Summary;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
