import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  Linking,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveFontSize as fp,
  responsiveScreenWidth as wp,
} from 'react-native-responsive-dimensions';

const HomeInfobg = () => {
  const openLink = url => {
    Linking.openURL(url).catch(err =>
      console.error('An error occurred while opening URL:', err),
    );
  };
  const navigation = useNavigation();
  return (
    <View style={styles.HomebgimgContainer}>
      <ImageBackground
        source={require('../assets/ramlu.webp')}
        style={styles.bgimg}
        imageStyle={styles.bgimg}
        blurRadius={15}>
        <View style={styles.introContainer}>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Image
                style={styles.mainImg}
                source={require('../assets/myimg.jpg')}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 20,
                color: '#2C3A47',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              Nirbhay Verma
            </Text>
            <Text style={{fontSize: 16, color: '#2C3A47', fontWeight: 'bold'}}>
              ( MERN Stack Web And App Developer )
            </Text>
          </View>
          <View style={styles.socialTabs}>
            <TouchableOpacity
              onPress={() =>
                openLink('https://www.linkedin.com/in/nirbhay-verma-441695217/')
              }>
              <AntDesignIcon name="linkedin-square" size={30} color="#EAF0F1" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openLink('https://github.com/i-nirbhay10')}>
              <AntDesignIcon name="github" size={30} color="#EAF0F1" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openLink('mailto:nirbhayverma10@gmail.com')}>
              <AntDesignIcon name="mail" size={30} color="#EAF0F1" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeInfobg;

const styles = StyleSheet.create({
  HomebgimgContainer: {
    height: hp(30),
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 2,
    overflow: 'hidden',
  },
  bgimg: {
    flex: 1,
  },
  introContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },
  mainImg: {
    alignSelf: 'center',
    height: wp(20),
    width: wp(20),
    borderRadius: 10,
  },
  socialTabs: {
    flexDirection: 'row',
    gap: 8,
  },
});
