import { View, Image, Text } from "react-native";
import logo from "../assets/camaraLogo.png"
import twd from 'twrnc';

export function Logo(){
    return(
        <View style={twd`flex flex-row`}>
            <Image 
                source={logo}
            />
            <View style={twd`justify-center items-center mx-2`}>
            <Text style={twd`text-white font-bold text-xl`}>MvTv</Text>
            </View>
        </View>
    )
}