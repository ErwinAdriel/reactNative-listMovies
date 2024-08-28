import { Text, View } from "react-native";
import twd from "twrnc";
import { Link } from "expo-router";

 export default function Detalle(){
    return(
        <View style={twd`flex-1 justify-center items-center`}>
            <Text style={twd`text-white`}>Detalle de movie</Text>
            <Link href="/" style={twd`text-white`}>
                Volver
            </Link>
        </View>
    )
 }