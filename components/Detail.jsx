import { Image, Text, View, FlatList} from 'react-native';
import twd from 'twrnc';
import { Screen } from './Screen';
import { Genero } from './Genero';

export function Detail({movie}) {

    const generos = movie.genres;
    //console.log(generos);
    
    
    return (
        <Screen>     
            <View style={twd`w-auto h-auto `}>
                <Image
                    source={{uri: movie.backdrop_path}}
                    style={twd`w-100 h-60`}
                />
            </View>
            <View style={twd`w-full mt-4 px-4 border border-white`}>
                <Text style={twd`text-white capitalize`}>Movie</Text>
                <Text style={twd`text-[#D93250] font-bold text-5xl`}>{movie.original_title}</Text>
                <FlatList 
                    data={generos}
                    keyExtractor={genero => genero.name}
                    renderItem={({item}) => 
                        < Genero genero={item} />
                    }
                />
                <Text style={twd`text-white capitalize`}>{movie.release_date} | {movie.original_language}</Text>
                <Text style={twd`text-white`}>{movie.overview}</Text>
                
            </View>
        </Screen>
    );

}

/*export function AnimatedMovieCard({movie, index}){

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
}*/