import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SvgMenuIcon from '../../assets/icons/MenuIcon';
import SearchBar from '../../components/SearchBar';
import {campaignData} from '../../constants/campingData';
import CampaignCard from '../../components/CampingCard';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../StackParamlist';
import ProductCategory from '../../components/ProductCategory';

const Home = () => {
  const navigation = useNavigation<StackParamList>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuBar}>
        <View style={styles.menuIconCircle}>
          <SvgMenuIcon />
        </View>
        <View style={styles.profileImgCircle}>
          <Image
            source={require('../../assets/images/profile-image.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Welcome</Text>
        <Text style={styles.fashionText}>Our Fashions App</Text>
      </View>
      <SearchBar />
      <ScrollView
        style={{flex: 1, flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <FlatList
          data={campaignData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CampaignCard data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.campaignFlatListContent}
        />
        <ProductCategory navigation={navigation} title="New Arrivals" />
        <ProductCategory navigation={navigation} title="Most Populars" />
        <ProductCategory navigation={navigation} title="For Woman etc" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: wp('6.6%'),
    fontFamily: 'Poppins-Black',
    color: 'black',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('6.6%'),
  },
  menuIconCircle: {
    width: hp('5.5%'),
    height: hp('5.5%'),
    borderRadius: hp('5.5%') / 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImgCircle: {
    width: hp('5.5%'),
    height: hp('5.5%'),
    borderRadius: hp('5.5%') / 2,
    backgroundColor: '#DDDDDD',
    marginLeft: wp('5%'),
  },
  fashionText: {
    fontSize: wp('5.3%'),
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  textContainer: {
    paddingLeft: wp('6.6%'),
  },
  campaignFlatListContent: {
    paddingHorizontal: wp('6.6%'),
    paddingVertical: hp('2%'),
    gap: wp('3%'),
    alignItems: 'center',
  },
});
