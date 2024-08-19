import { getMovies } from '../lib/data';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import twd from 'twrnc';
import { MovieCard } from './MovieCard';

export function Main() {

  const [movies, setMovies] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <View style={twd`pt-[${insets.top}] pb-[${insets.bottom}] w-full`}>
      
      {/*Antes de cargas las peliculas, me muestra un indicador de carga*/}
      {movies.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
            <Text style={twd`text-white font-bold mx-4 text-4xl my-4`}>Populares</Text>
            {movies.map((movie) => (
                < MovieCard movie={movie}/>
            ))}
        </ScrollView>
      )}
        
    </View>
    
  );
}