import { getMovies } from '../lib/data';
import { useEffect, useState } from 'react';
import { Text, View, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import twd from 'twrnc';
import { AnimatedMovieCard } from './MovieCard';

export function Main() {

  const [movies, setMovies] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <View style={twd`bg-[#030F26] w-full`}>
      
      {/*Antes de cargas las peliculas, me muestra un indicador de carga*/}
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
    </View>
  );
}