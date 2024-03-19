import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from './AppHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveHeight as hp,
  responsiveFontSize as fp,
  responsiveScreenWidth as wp,
} from 'react-native-responsive-dimensions';

const About = () => {
  return (
    <View style={styles.container}>
      <AppHeader title={'About me'} />
      <Image style={styles.mainImg} source={require('../assets/mypic2.jpg')} />
      <ScrollView>
        <View style={styles.aboutContend}>
          <View>
            <Text style={styles.headerText}>
              <Ionicons name="hand-left" size={25} color="#192A56" /> Hi, my
              self Nirbhay verma
            </Text>
            <Text style={{fontSize: 16, textAlign: 'justify'}}>
              I am a full-stack web developer with a passion for creating
              efficient, scalable, and user-friendly web applications. I have a
              strong background in both front-end and back-end development, with
              expertise in JavaScript, HTML, CSS, and various frameworks and
              libraries.
            </Text>
          </View>
          <View style={styles.experience}>
            <Text style={styles.headerText}>
              <MaterialIcons name="work" size={20} color="#192A56" /> Experience
            </Text>
            <View>
              <Text style={{fontSize: 15}}> Work`s at Jouls Eco Tech</Text>
              <Text style={{fontSize: 14}}>
                Full-stack web developer (2023)
              </Text>
            </View>
          </View>
          <View style={styles.education}>
            <Text style={styles.headerText}>
              <FontAwesome name="graduation-cap" size={20} color="#192A56" />{' '}
              Education
            </Text>
            <View>
              <Text style={{fontSize: 15}}>
                Bachelor of Information Technology
              </Text>
              <Text style={{fontSize: 14}}>
                Dr. RMLAU University, Ayodhya, UP (2023)
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 15}}>
                Diploma in Computer Sscience and Engeneering
              </Text>
              <Text style={{fontSize: 14}}>
                MP Polytechnic , Gorakhpur, UP (2020)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F1',
  },
  mainImg: {
    height: hp(35),
    width: wp(100),
    resizeMode: 'stretch',
    // borderRadius: 10,
  },
  aboutContend: {
    padding: 15,
    gap: 20,
  },
  experience: {gap: 10},
  education: {gap: 10},
  headerText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
