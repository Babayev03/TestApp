import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SvgArrowLeft from '../assets/icons/ArrowLeft';
import SvgUnLike from '../assets/icons/UnLike';
import SvgLike from '../assets/icons/Like';
import SvgInPackage from '../assets/icons/InPackage';
import SvgPackage from '../assets/icons/Package';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  onBackPress: () => void;
  isFavorited: boolean;
  onFavoriteToggle: () => void;
  isAddedToCart: boolean;
  onAddToCart: () => void;
}

const DetailHeader: React.FC<HeaderProps> = ({
  onBackPress,
  isFavorited,
  onFavoriteToggle,
  isAddedToCart,
  onAddToCart,
}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.header, {paddingTop: top < 45 ? hp('3%') : top}]}>
      <TouchableOpacity onPress={onBackPress}>
        <View style={[styles.button, styles.backButton]}>
          <SvgArrowLeft />
        </View>
      </TouchableOpacity>
      <View style={styles.rightButtons}>
        <TouchableOpacity
          style={styles.circleButton}
          onPress={onFavoriteToggle}>
          {isFavorited ? (
            <SvgUnLike width={15} height={15} color={'#000'} />
          ) : (
            <SvgLike width={15} height={15} color={'#000'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={onAddToCart}>
          {isAddedToCart ? (
            <SvgInPackage width={15} height={15} color={'#000'} />
          ) : (
            <SvgPackage width={15} height={15} color={'#000'} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('15%') / 2,
    backgroundColor: '#000000',
  },
  circleButton: {
    width: wp('9%'),
    height: wp('9%'),
    borderRadius: wp('15%') / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginLeft: wp('5%'),
  },
  rightButtons: {
    flexDirection: 'row',
  },
});

export default DetailHeader;
