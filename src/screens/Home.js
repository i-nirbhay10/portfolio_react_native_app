import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HomeInfobg from './HomeInfobg';
import Myproject from './MyProject.';
import projectsData from './ProjectData';
import Skills from './Skills';
import AppHeader from './AppHeader';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader title={'Home'} isHome={true} />
      <ScrollView>
        <View>
          <HomeInfobg />
        </View>
        <View style={styles.project}>
          <View style={styles.hading}>
            <Text style={styles.TextHeaders}>Projects</Text>
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate('AllProjects')}
                style={{fontSize: 16, color: '#0A79DF', marginRight: 20}}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.projectCards}>
              {projectsData.slice(0, 3).map(items => (
                <TouchableOpacity
                  style={{elevation: 2, borderRadius: 20}}
                  key={items.id}
                  onPress={() =>
                    navigation.navigate('DetailsProject', {items})
                  }>
                  <Myproject items={items} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.SkilsCards}>
          <View style={styles.hading}>
            <Text style={styles.TextHeaders}>Skills</Text>
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate('Allskills')}
                style={{fontSize: 16, color: '#0A79DF', marginRight: 20}}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <Skills />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  project: {
    flex: 1,
    marginVertical: 10,
    overflow: 'hidden',
  },
  hading: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextHeaders: {
    color: '#686A6C',
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectCards: {
    flex: 1,
    margin: 10,
    gap: 10,
    flexDirection: 'row',
  },
  SkilsCards: {
    flex: 1,
    // margin: 10,
    // gap: 10,
    // flexDirection: 'row',
  },
});
