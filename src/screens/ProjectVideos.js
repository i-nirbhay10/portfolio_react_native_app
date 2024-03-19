import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import React, {useState} from 'react';
import {
  responsiveHeight as hp,
  responsiveScreenWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';

const ProjectVideos = ({navigation, route}) => {
  const {projectName, time, img, projectDetails, demoVideo} = route.params.data;

  const posterimg = img;

  // Log the posterimg value to check if it's a valid URI
  console.log('Poster Image:', demoVideo);
  const [maketrue, setmaketrue] = useState(false);

  const click = () => {
    if (!maketrue) {
      setmaketrue(true);
      Alert.alert('true');
    } else {
      setmaketrue(false);
      Alert.alert('false');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Videos}>
          <Video
            source={demoVideo}
            style={styles.backgroundVideo}
            resizeMode="stretch"
            audioOnly={maketrue}
            controls={true}
            hideShutterView={true}
            // poster="https://baconmockup.com/300/200/"
            // posterResizeMode="stretch"
          />

          <View style={styles.ProjectVideoDetails}>
            <View style={styles.titleHeader}>
              <Text style={styles.title}>{projectName}</Text>
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
            <View>
              <Text style={styles.details}>{projectDetails}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProjectVideos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F1',
    justifyContent: 'space-between',
  },
  Videos: {
    overflow: 'hidden',
  },
  backgroundVideo: {
    height: hp(40),
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  ProjectVideoDetails: {
    padding: 10,
  },

  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: fp(2.5),
    color: '#000',
    // textDecorationLine: 'underline',
  },
  details: {
    textAlign: 'justify',
  },
  backButton: {
    backgroundColor: '#EC4849',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: fp(2),
    color: '#fff',
  },
});
