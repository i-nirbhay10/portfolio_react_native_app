import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight as hp,
  responsiveFontSize as fp,
  responsiveScreenWidth as wp,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const AppHeader = ({title, isHome}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          {!isHome && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesignIcon name="arrowleft" size={25} color="#fff" />
            </TouchableOpacity>
          )}

          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    height: hp(8),
    backgroundColor: '#0A3D62',
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    // marginBottom: 10,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    color: '#fffF',
    fontWeight: 'bold',
    padding: 5,
  },
});
