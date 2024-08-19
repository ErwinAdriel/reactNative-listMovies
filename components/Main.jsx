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
            <Text style={twd`text-white font-bold mx-4 text-4xl my-4`}>Populares</Text>
            {movies.map((movie) => (
                <View key={movie.id} style={twd`mb-4 mx-4 flex flex-row`}>
                    <View style={twd`w-2/5 `}>
                        <Image
                            source={{uri: movie.poster_path}}
                            style={twd`h-60 rounded-2xl	`}
                        />
                    </View>
                    <View style={twd`w-3/5 pl-4 top-2`}>
                        <Text style={twd`text-white font-bold text-xl`}>{movie.original_title}</Text>
                        <Text style={twd`text-white capitalize`}>{movie.release_date} | {movie.original_language}</Text>
                        <Text style={twd`text-white absolute bottom-4 left-0 ml-4`}>{Number(movie.vote_average).toPrecision(2)}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    </View>
    
  );
}