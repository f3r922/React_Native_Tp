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
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { Card } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { appActions } from '../redux/appRedux';
import api from '../services/api';


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


export default ListDetail;
