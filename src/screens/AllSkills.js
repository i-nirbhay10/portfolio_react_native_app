import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveScreenWidth as wp,
} from 'react-native-responsive-dimensions';
import AppHeader from './AppHeader';

const Allskills = () => {
  const data = [
    {
      title: 'Frontend',
      data: [
        {name: 'React Js', image: require('../assets/reactjs.png')},
        {name: 'Java Script', image: require('../assets/jsts.webp')},
        {name: 'HTML CSS', image: require('../assets/htmlcss.jpg')},
        {name: 'Next js', image: require('../assets/nextjs.webp')},
      ],
    },
    {
      title: 'Android Development',
      data: [
        {name: 'React Native', image: require('../assets/reactnative.png')},
        {name: 'JavaScript', image: require('../assets/jsts.webp')},
      ],
    },
    {
      title: 'Database',
      data: [
        {name: 'MongoDb', image: require('../assets/mongo.webp')},
        {name: 'My sql', image: require('../assets/mysql.png')},
        {name: 'firebase', image: require('../assets/firebase.png')},
      ],
    },
    {
      title: 'Backend',
      data: [
        {name: 'Node Js', image: require('../assets/nodejs.webp')},
        {name: 'Express Js', image: require('../assets/express.png')},
      ],
    },
    {
      title: 'Others',
      data: [
        {name: 'Rest Api', image: require('../assets/rest.png')},
        {name: 'Git', image: require('../assets/git.webp')},
      ],
    },
  ];

  const renderSkill = ({item}) => (
    <View style={styles.skillItem}>
      <Image source={item.image} style={styles.skillImage} />
      <Text style={styles.skillName}>{item.name}</Text>
    </View>
  );

  const renderSection = ({item}) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeader}>{item.title}</Text>
      <FlatList
        data={item.data}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderSkill}
        horizontal={true}
        contentContainerStyle={styles.skillListContent}
      />
    </View>
  );

  return (
    <View style={styles.skillsContainer}>
      <AppHeader title={'My Skills'} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.title + index}
        renderItem={renderSection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skillsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#192A56',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  skillListContent: {
    paddingHorizontal: 10,
  },
  skillItem: {
    width: wp(90),
    height: hp(28),
    marginVertical: 10,
    marginRight: 10,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 5,
  },
  skillImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'stretch',
  },
  skillName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
    paddingVertical: 7,
  },
});

export default Allskills;
