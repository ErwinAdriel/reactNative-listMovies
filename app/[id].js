import { ScrollView, Text, View, ActivityIndicator} from "react-native";
import twd from "twrnc";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { getMovieById } from "../lib/data";
import { Detail } from "../components/Detail";
import { StatusBar } from "expo-status-bar";

 export default function Detalle(){

    const { id } = useLocalSearchParams(); 
    const [movieDetail, setMovieDetail] = useState([null]);

    useEffect(() => {
        if(id){
            getMovieById(id).then(setMovieDetail);
        }
    }, [id]);

    return(
        <View style={twd`flex-1 items-center`}>
            {
                movieDetail === null ? (
                    <ActivityIndicator />
                ) : (
                    <View style={twd`items-center`}>
                        <StatusBar style="light" />
                        <Detail movie={movieDetail}/>

                        <Link href="/" style={twd`text-white text-2xl `}>Volver</Link>
                    </View>
                    
                )
            }
        </View>
    )
 }