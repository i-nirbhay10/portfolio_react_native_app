import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight as hp,
  responsiveScreenWidth as wp,
} from 'react-native-responsive-dimensions';
import projectsData from './ProjectData';
import AppHeader from './AppHeader';

const AllProjects = ({navigation}) => {
  //   const {projectName, time, img} = props.items;
  return (
    <View style={styles.container}>
      <AppHeader title={'All Projects'} />
      <ScrollView>
        {projectsData.map(items => (
          <TouchableOpacity
            key={items.id}
            onPress={() => navigation.navigate('DetailsProject', {items})}>
            <View style={styles.cardContainer}>
              <View style={styles.projectImgcontainer}>
                <Image style={styles.projectImg} source={items.img} />
              </View>
              <View style={styles.projectDetails}>
                <Text style={styles.projectName}>{items.projectName}</Text>
                <Text>{items.time}</Text>
              </View>
              <View
                style={{
                  height: 10,
                  width: '100%',
                  backgroundColor: '#0A3D62',
                }}></View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllProjects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F1',
  },
  cardContainer: {
    marginVertical: 10,
    height: hp(30),
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  projectImgcontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  projectImg: {
    flex: 1,
    width: wp(100),
    resizeMode: 'stretch',
  },
  projectDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  projectName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
