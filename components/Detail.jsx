import { Image, Text, View, FlatList} from 'react-native';
import twd from 'twrnc';

export function Detail({movie}) {

    const generos = movie.genres;

    console.log(generos);
    
    return (
        <View style={twd`w-full flex-1 items-center`}>
            <View style={twd`w-auto h-auto `}>
                <Image
                    source={{uri: movie.backdrop_path}}
                    style={twd`w-100 h-60`}
                />
            </View>
            <View style={twd`w-full border border-white`}>
                <Text style={twd`text-[#D93250] font-bold text-5xl`}>{movie.original_title}</Text>
                <Text style={twd`text-white capitalize`}>{movie.release_date} | {movie.original_language}</Text>
                <Text style={twd`text-white`}>{movie.overview}</Text>
                <FlatList 
                    data={generos}
                    keyExtractor={genero => genero.name}
                    renderItem={({item}) => 
                        <Text key={item.id} style={twd`text-white`}>{item.name}</Text>
                    }
                />
            </View>
        </View>
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