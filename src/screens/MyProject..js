import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight as hp,
  responsiveScreenWidth as wp,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';

const MyProject = props => {
  const {projectName, time, img} = props.items;
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.projectImgcontainer}>
          <Image style={styles.projectImg} source={img} />
        </View>
        <View style={styles.projectDetails}>
          <Text style={styles.projectName}>{projectName}</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 4,
              alignItems: 'center',
            }}>
            <Entypo name="back-in-time" size={20} />
            <Text>{time}</Text>
          </View>
        </View>
        <View
          style={{
            height: 10,
            width: '100%',
            backgroundColor: '#0A3D62',
          }}></View>
      </View>
    </View>
  );
};

export default MyProject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardContainer: {
    height: hp(28),
    width: wp(90),
    backgroundColor: '#fff',
  },
  projectImgcontainer: {
    flex: 1,
  },
  projectImg: {
    flex: 1,
    width: wp(100),
    resizeMode: 'stretch',
  },
  projectDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 7,
  },
  projectName: {
    fontSize: 18,
    color: '#192A56',
    fontWeight: '500',
  },
});
