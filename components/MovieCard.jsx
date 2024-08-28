import { useEffect, useRef } from 'react';
import { Animated, Image, Text, View} from 'react-native';
import twd from 'twrnc';

export function MovieCard({movie}) {

  return (
    <View key={movie.id} style={twd`mb-4 mx-4 flex flex-row items-center`}>
        <View style={twd`w-2/5 h-60`}>
            <Image
                source={{uri: movie.poster_path}}
                style={twd`size-full rounded-2xl	`}
            />
        </View>
        <View style={twd` w-3/5 pl-4`}>
            <Text style={twd`text-[#D93250] font-bold text-xl`}>{movie.original_title}</Text>
            <Text style={twd`text-white capitalize`}>{movie.release_date} | {movie.original_language}</Text>
            <View style={twd`bg-[#D93250] mt-10 w-9 h-9 rounded-50 justify-center items-center`}>
                <Text style={twd` text-white`}>{Number(movie.vote_average).toPrecision(2)}</Text>
            </View>                    
        </View>
    </View>
  );

}

export function AnimatedMovieCard({movie, index}){

    const opacidad = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(opacidad, {
            toValue: 1,
            duration: 2000,
            delay: index * 250,
            useNativeDriver: true,
        }).start();
    }, [opacidad, index]);

    return (
        <Animated.View style={{opacity: opacidad,}}>
            <MovieCard movie={movie} />
        </Animated.View>
    );
}