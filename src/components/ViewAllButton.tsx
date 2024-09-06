import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StackParamList} from '../navigation/StackParamlist';

interface IViewAllButtonProps {
  navigation: StackParamList;
}

const ViewAllButton: React.FC<IViewAllButtonProps> = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
      <Text style={styles.buttonText}>View All</Text>
    </TouchableOpacity>
  );
};

export default ViewAllButton;

const styles = StyleSheet.create({
  buttonText: {
    color: '#666666',
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp('4%'),
  },
});
