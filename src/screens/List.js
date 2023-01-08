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
  View,
  FlatList,
} from 'react-native';
import { ListItem, Avatar, Button } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { appSelector, appActions } from '../redux/appRedux';
import { useNavigation } from '@react-navigation/native';
import api, {IMG_URL} from '../services/api';


const List = () => {

  const navigation = useNavigation();
  const navigateTo = (route, data) => {
    navigation.navigate(route, {data});
  };

  const dispatch = useDispatch();

  const [pokemons, setPokemons] = useState(null)

  const [next, setNext] = useState(null)

  const loading = useSelector(appSelector.loading);

  useEffect(()=>{
    getPokemons();
  },[]);

  const loadMore = async () => {
    try {
      dispatch(appActions.setLoading(true));
      const result = await api.GET(next);
      if (result){
        console.log('poke: ', result)
        setPokemons([...pokemons, ...result.results]);
        setNext(result.next);
        }
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(appActions.setLoading(false));
    }
    console.log(next);
  };


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

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => {

    const path = item.url.split('/');
    const imgID = getPokemonImgId(path[6]);

    return (
    <ListItem bottomDivider onPress={() => navigateTo('Detail', {url: item.url})}>
      <Avatar title={item.name} source={{uri:`${IMG_URL}${imgID}.png`}}/>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    );
  };

  const renderFooter = () => {
    return (
      <View >
        <Button disabled={loading} title="load more" onPress={loadMore} />
      </View>
    );
  };

  const getPokemons = async () => {
    try {
      dispatch(appActions.setLoading(true));
      const result = await api.GET(api.pokemons);
      if (result){
        console.log('poke: ', result);
        setPokemons(result.results);
        setNext(result.next);
        }
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(appActions.setLoading(false));
    }
    console.log(next);
  };

  return (
    <SafeAreaProvider>
      <Header title="Pokedex"/>
        <FlatList
          keyExtractor={keyExtractor}
          data={pokemons}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
        />
    </SafeAreaProvider>
  );
};


export default List;
