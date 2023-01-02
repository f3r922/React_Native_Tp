/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState, useEffect } from 'react';
import Header  from '../components/AppHeader';
import 'react-native-gesture-handler';
import {
	SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ImageBackground,
  Image
} from 'react-native';
import { ListItem, Avatar, Button, Card } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { appSelector, appActions } from '../redux/appRedux';
import api, {IMG_URL} from '../services/api';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ListDetail = (props) => {

  const { url } = props.route.params.data;

  const dispatch = useDispatch();

  const [pokemon, setPokemon] = useState('');

  const fetchData = async () => {
    try {
      dispatch(appActions.setLoading(true));
      const result = await api.GET(url);
      if (result){
        console.log('poke data: ', result);
        setPokemon(result);
      }
    } catch (error) {
        console.log(error);
      } finally {
        dispatch(appActions.setLoading(false));
      }
    };

    useEffect(()=>{
      fetchData();
      console.log('fecccccchdata');
    },[]);

  const getPokemonImgId = (id) => {
    console.log('long. ' + id.length);
    switch (id.length) {
    case 1:
      return `00${id}`;
    case 2:
      return `0${id}`;
    default:
      return id;
  }
  };


  return (
    <SafeAreaProvider>
      <Header title="Pokedex"/>
        <ScrollView>
          <Card>
            <Card.Title style={{ textTransform: 'uppercase'}} >{pokemon.name}</Card.Title>
            <Card.Divider/>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Image
                style={{width: 150, height: 150 }}
                resizeMode="cover"
                source={{ uri: pokemon?pokemon.sprites.front_default:"_" }}
              />
                        <Image
                style={{width: 100, height: 100 }}
                resizeMode="cover"
                source={{ uri: pokemon?pokemon.sprites.back_default:"_" }}
              />
            </View>
            <Card.Divider/>
            <Card.Title >Habilidades</Card.Title>
            <Card.Divider/>
              {pokemon && pokemon.abilities && pokemon.abilities.map((h, index) => (

                <Text key={index}>
                  {h.ability.name}
                </Text>

            ))}

            <Card.Divider/>
            <Card.Title >Moviemientos</Card.Title>
            <Card.Divider/>
              {pokemon && pokemon.moves && pokemon.moves.map((m, index) => (
                <Text key={index}>
                  {m.move.name}
                </Text>
                ))}
            
          </Card>
        </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  textButton: {
    justifyContent: 'center',
    color:'black',
    fontSize: 20,
    fontWeight: '700',
  },
  viewGrid: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    width:'100%',
    height:'100%',
  },
  buttonGrid: {
    elevation: 3,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#606060',
    width: WIDTH * .4,
    height: HEIGHT * .4,
    borderRadius: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ListDetail;
