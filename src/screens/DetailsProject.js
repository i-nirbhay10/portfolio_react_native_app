import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight as hp,
  responsiveScreenWidth as wp,
} from 'react-native-responsive-dimensions';
import projectsData from './ProjectData';
import AppHeader from './AppHeader';
import Entypo from 'react-native-vector-icons/Entypo';

const DetailsProject = ({navigation, route}) => {
  const {projectName, time, img, projectDetails, demoVideo} =
    route.params.items;

  let data = {projectName, time, img, projectDetails, demoVideo};
  // console.log(data);

  return (
    <View style={styles.container}>
      <AppHeader title={'Projects Details'} />
      <View style={styles.cardContainer}>
        <View>
          <View style={styles.ImageContainer}>
            <Image style={styles.Image} source={img} />
          </View>
          <View style={styles.projectDetailsContainer}>
            <View style={styles.projectTitleContainer}>
              <Text style={styles.projectTitle}>{projectName}</Text>
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

            <Text style={styles.ProjectDiscription}>{projectDetails}</Text>
          </View>
        </View>
        <View>
          {demoVideo ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProjectVideos', {data})}>
              <View style={styles.DemoVideo}>
                <Text style={styles.VideoButton}>See Demo video</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default DetailsProject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between',
    backgroundColor: '#EAF0F1',
  },
  ImageContainer: {
    height: hp(30),
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  Image: {height: hp(30), width: wp(100), resizeMode: 'stretch'},
  projectDetailsContainer: {
    padding: 10,
  },
  projectTitleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  projectTitle: {
    fontSize: 20,
    color: '#0A3D62',
    fontWeight: '500',
  },
  ProjectDiscription: {
    textAlign: 'justify',
    color: '#192A56',
    fontSize: 14,
  },
  DemoVideo: {
    margin: 10,
    borderColor: 'red',
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
  },
  VideoButton: {
    padding: 8,
    fontSize: 20,
    color: 'red',
  },
  backButton: {
    margin: 10,
    borderColor: 'red',
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonText: {
    padding: 8,
    fontSize: 20,
    color: 'red',
  },
});
