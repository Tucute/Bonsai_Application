import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import useBonsai, { CategoriesType } from '../../../hooks/useBonsai';

const URL_IMAGE = '../../../assets/images';

interface DropdownSelectProps {
  onCatalogChange: (categoryID: string) => void;
  propsCatalog?: string;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  onCatalogChange,
  propsCatalog,
}: DropdownSelectProps) => {
  const { dataCategories } = useBonsai();
  const [defaultValue, setDefaultValue] = useState<string>('Select catalog');

  useEffect(() => {
    if (propsCatalog) {
      const catalogProps = dataCategories.find(
        (category: CategoriesType) => category.id.toString() === propsCatalog,
      );
      
      if (catalogProps) {
        setDefaultValue(catalogProps.name);
      }
    }
  }, [propsCatalog, dataCategories]);

  return (
    <SelectDropdown
      data={dataCategories}
      onSelect={(selectedItem, index) => {
        onCatalogChange(selectedItem.id.toString());
        console.log(selectedItem, index);
      }}
      defaultButtonText={defaultValue}
      buttonTextAfterSelection={(selectedItem) => selectedItem.name}
      buttonStyle={styles.buttonDropdown}
      buttonTextStyle={styles.buttonTextDropdown}
      renderDropdownIcon={(isOpened) => (
        <Image
          style={styles.iconSelect}
          source={
            isOpened
              ? require(`${URL_IMAGE}/up.png`)
              : require(`${URL_IMAGE}/down.png`)
          }
        />
      )}
      dropdownIconPosition="right"
      rowTextForSelection={(item) => item.name}
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
