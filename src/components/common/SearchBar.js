import React, {useEffect, useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import constants from '../../constants/Constants';


const SearchBar = (props) => {
  const { masterDataSource, setData } = props;
  const [search, setSearch] = useState('');

  const searchFilterFunction = (text) => {
    // const filteredData = text
    //   ? masterDataSource.filter((item) => {
    //     if (props.invoice) {
    //       const itemData = `${item?.slug || ''}`.toUpperCase();
    //       const textData = text.toUpperCase();
    //       return itemData.includes(textData);
    //     } else {
    //       const itemData = `${item?.ticketable.name || ''}`.toUpperCase();
    //       const textData = text.toUpperCase();
    //       return itemData.includes(textData);
    //     }
    //   })
    //   : masterDataSource;

    // setData(filteredData);
    setSearch(text);
  };

//   useEffect(() => {
//     setData(masterDataSource);
//   }, [setData, masterDataSource]);

  return (
    <View style={styles.mainContainer}>
      <constants.svg.search height={20} width={20} />
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder={props.placeholder ? props.placeholder : 'Find Your Coffee'}
        placeholderTextColor={constants.colors.gray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 43,
    marginTop: 25,
    backgroundColor: constants.colors.darkGray,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignSelf:'center',
    width: '90%',
    marginBottom:10
  },
  textInputStyle: {
    paddingLeft: 10,
    width: '90%',
    color: constants.colors.gray,
  },
});

export default SearchBar;
