import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SvgFilterIcon from '../assets/icons/FilterIcon';
import SvgSearchIcon from '../assets/icons/SearchIcon';

const SearchBar = () => {
  return (
    <View style={styles.searchBarView}>
      <View style={styles.searchBar}>
        <View style={styles.searchIcon}>
          <SvgSearchIcon />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          placeholderTextColor="#9B9B9B"
        />
      </View>
      <View style={styles.filterIconCircle}>
        <SvgFilterIcon />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('6.6%'),
    paddingVertical: hp('2.4%'),
  },
  searchBar: {
    backgroundColor: '#F3F4F5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('4%'),
    width: wp('72.5%'),
    borderRadius: wp('72.5%') / 2,
  },
  searchIcon: {
    marginHorizontal: wp('2%'),
    marginBottom: hp('0.5%'),
  },
  textInput: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    height: hp('5.5%'),
    fontSize: wp('3.8%'),
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  filterIconCircle: {
    width: hp('5.5%'),
    height: hp('5.5%'),
    borderRadius: hp('5.5%') / 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
