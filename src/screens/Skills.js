import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveScreenWidth as wp,
} from 'react-native-responsive-dimensions';

const Skills = () => {
  const data = [
    {
      title: 'Frontend',
      data: [
        {name: 'React Js', image: require('../assets/reactjs.png')},
        {name: 'Java Script', image: require('../assets/jsts.webp')},
        {name: 'Node.js', image: require('../assets/tailwind.webp')},
        {name: 'HTML CSS', image: require('../assets/htmlcss.jpg')},
        {name: 'Next js', image: require('../assets/nextjs.webp')},
      ],
    },
    {
      title: 'Android Development',
      data: [
        {name: 'React Native', image: require('../assets/reactnative.png')},
        {name: 'JavaScript', image: require('../assets/jsts.webp')},
        {name: 'firebase', image: require('../assets/firebase.png')},
      ],
    },

    // Add more sections as needed
  ];

  const w = 100;

  const renderSkill = ({item}) => (
    <View>
      <View style={styles.skillItem}>
        <Image source={item.image} style={styles.skillImage} />
        <Text style={styles.skillName}>{item.name}</Text>
        <View
          style={{
            height: 10,
            width: `${w}`,
            backgroundColor: '#0A3D62',
          }}></View>
      </View>
    </View>
  );

  const renderSection = ({item}) => (
    <View>
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
    <View style={styles.SkillsContainer}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.title + index}
        renderItem={renderSection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SkillsContainer: {
    flex: 1,
    gap: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,

    // flex: 1,
    // backgroundColor: '#fff',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  skillListContent: {
    // paddingHorizontal: 10,
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
    fontWeight: '600',
    color: '#192A56',
    paddingLeft: 15,
    paddingVertical: 7,
  },
});

export default Skills;
