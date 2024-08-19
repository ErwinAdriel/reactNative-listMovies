import { getMovies } from './lib/data';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import twd from 'twrnc';


export default function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <View style={twd`bg-slate-800 flex-1 pt-8 items-center`}>
      <StatusBar style="light" />
      {movies.map((movie) => (
        <View key={movie.id} style={twd`mb-4 items-center`}>
          <Image
            source={{uri: movie.poster_path}}
            style={twd`w-50 h-60`}
          />
          <Text style={twd`text-white`}>{movie.original_title}</Text>
        </View>
      ))}
    </View>
  );
}