import React from 'react';
import {Image, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const URL_IMAGE = '../../../assets/images';
interface DropdownSelectProps {
  data: string[];
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({data}) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      defaultButtonText="Select catalog"
      buttonTextAfterSelection={selectedItem => selectedItem}
      buttonStyle={styles.buttonDropdown}
      buttonTextStyle={styles.buttonTextDropdown}
      renderDropdownIcon={isOpened => {
        return (
          <Image
            style={styles.iconSelect}
            source={
              isOpened
                ? require(`${URL_IMAGE}/up.png`)
                : require(`${URL_IMAGE}/down.png`)
            }
          />
        );
      }}
      dropdownIconPosition="right"
      rowTextForSelection={item => item}
      rowStyle={styles.rowDropdown}
      rowTextStyle={styles.rowTextDropdown}
    />
  );
};

const styles = StyleSheet.create({
  iconSelect: {
    width: 25,
    height: 25,
  },
  buttonDropdown: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonTextDropdown: {
    color: 'red',
    textAlign: 'left',
  },
  rowDropdown: {
    borderBottomColor: 'green',
  },
  rowTextDropdown: {
    color: 'black',
    textAlign: 'left',
  },
});

export default DropdownSelect;
