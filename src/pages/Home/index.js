import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Shoes from '../../components/Shoes';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#cececf' }]}>-</Text>
          <Text style={[styles.text, { color: '#cececf' }]}>MASCULINO</Text>

          <TouchableOpacity
            style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={require('../../assets/1.png')}
            cost="R$140,90"
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Air Max Dia
          </Shoes>
          <Shoes
            img={require('../../assets/2.png')}
            cost="R$200,90"
            onClick={() => navigation.navigate('Detail')}
          >
            Tênis Nike Air
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={require('../../assets/3.png')}
            cost="R$560,90"
            onClick={() => alert('clicou')}
          >
            Tênis Nike Air Max 95
          </Shoes>
          <Shoes
            img={require('../../assets/4.png')}
            cost="R$1.520,90"
            onClick={() => alert('clicou')}
          >
            Tênis Nike Air Max 95
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },

  header: {
    marginBottom: 8,
  },

  image: {
    width: '100%',
  },

  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },

  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
  },

  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
  },
});

export default Home;
