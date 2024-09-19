import { getMovies } from '../lib/data';
import { useEffect, useState } from 'react';
import { Text, View, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import twd from 'twrnc';
import { AnimatedMovieCard } from './MovieCard';
import { Screen } from './Screen';

export function Main() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    
    <Screen>
      {/*Antes de cargar las peliculas, me muestra un indicador de carga*/}
      {movies.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList 
            data={movies}
            keyExtractor={movie => movie.id}
            renderItem={({item, index}) => 
              < AnimatedMovieCard movie={item} index={index}/>
            }
            style={twd`h-full`}
        />
      )}
    </Screen>
  );
}