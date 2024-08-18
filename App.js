import { getMovies } from './lib/data';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import twd from 'twrnc';


export default function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <View style={twd`bg-slate-800 flex-1 pt-8 items-center`}>
      <StatusBar style="light" />
      {movies.map(movie => (
        <View key={movie.id}>
          <Text style={twd`text-white`}>{movie.original_title}</Text> 
        </View>
      ))}
    </View>
  );
}