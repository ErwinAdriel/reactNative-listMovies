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
    <View style={twd`pt-[${insets.top}] pb-[${insets.bottom}] w-full`}>
      <Text style={twd`text-white font-bold mx-4 text-4xl my-4`}>Now playing</Text>
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
            style={twd`mb-20`}
        />
      )}
    </View>
  );
}