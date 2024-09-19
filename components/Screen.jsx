import { View } from "react-native";
import twd from 'twrnc';

export function Screen({ children }){
    return(
        <View style={twd`bg-[#030F26] items-center flex h-full`}>
            { children }
        </View>
    )
}