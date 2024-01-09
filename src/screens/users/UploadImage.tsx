import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { Button } from 'react-native-elements';

interface UploadImageProps {}

const UploadImage: React.FC<UploadImageProps> = () => {
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(null);

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      try {
        // Create FormData
        const formData = new FormData();
        formData.append('image', {
          uri: Platform.OS === 'android' ? `file://${singleFile.uri}` : singleFile.uri,
          type: singleFile.type || 'image/jpeg', // Provide a default type if not available
          name: singleFile.name || 'image.jpg', // Provide a default name if not available
        });

        // Make a POST request to the mock API
        const res = await fetch('https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/UploadFile', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 5000, // Set a timeout value (in milliseconds)
        });

        // Check the response status
        if (res.status === 201) {
          Alert.alert('Upload Successful');
        } else {
          Alert.alert('Upload Failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        Alert.alert('Error uploading file');
      }
    } else {
      // If no file selected then show alert
      Alert.alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // Printing the log related to the file
      console.log('res :', res);

      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If the user canceled the document selection
        Alert.alert('Canceled');
      } else {
        // For Unknown Error
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View style={styles.mainBody}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>
          React Native File Upload Example
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 20,
            marginBottom: 30,
            textAlign: 'center',
          }}>
          www.aboutreact.com
        </Text>
      </View>

      {/* Showing the data of the selected single file */}
      {singleFile != null ? (
        <Text style={styles.textStyle}>
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'}
        </Text>
      ) : null}

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});

export default UploadImage;

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
//   Button,
// } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';

// const UploadImage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const selectImage = async () => {
//     try {
//       const document = await DocumentPicker.pick({
//         type: [DocumentPicker.types.images],
//       });
//       console.log(document);
//       const apiURL =
//         'https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/UploadFile';
//       const formData = new FormData();
//       formData.append('image', {
//         uri: document.uri,
//         name: document.name,
//         type: document.type,
//         size:document.size,
//       });
//       const response = await fetch(apiURL, {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       if (response.ok) {
//         console.log('Image uploaded successfully!');
//       } else {
//         console.log('Image upload failed!');
//       }
//     } catch (error) {
//       console.error('Error selecting/uploading image', error);
//     }
//   };
//   return (
//     <View>
//       <Text>Selected Image:{selectedImage ? selectedImage.name : 'none'}</Text>
//       <Button title="Select Image" onPress={selectImage}></Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});
// export default UploadImage;
