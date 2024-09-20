import { Text, View} from 'react-native';
import twd from 'twrnc';

export function Genero({genero}){
    return(
        <View style={twd`rounded-10 border border-black bg-[#D93250] h-10 w-1/5 justify-center items-center my-1 mr-2`}>
            <Text style={twd`text-white`}>{genero.name}</Text>
        </View>
    )
}