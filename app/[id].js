import { ScrollView, Text, View, ActivityIndicator} from "react-native";
import twd from "twrnc";
import { useLocalSearchParams, Stack } from "expo-router";
import { useState, useEffect } from "react";
import { getMovieById } from "../lib/data";
import { Detail } from "../components/Detail";

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
                    <ActivityIndicator color={"#fff"} size={"large"}/>
                ) : (
                    <View style={twd`items-center`}>
                        <Stack.Screen
                            options={{
                                headerTintColor: "#D93250",
                                headerLeft: () => {},
                            }}
                        />
                        <Detail movie={movieDetail}/>
                    </View>
                )
            }
        </View>
    )
 }