import { getMovies } from '../lib/data';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import twd from 'twrnc';


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
        <ScrollView>
            {movies.map((movie) => (
                <View key={movie.id} style={twd`mb-4 items-center`}>
                <Image
                    source={{uri: movie.poster_path}}
                    style={twd`w-30 h-60`}
                />
                <Text style={twd`text-white`}>{movie.original_title}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
    
  );
}