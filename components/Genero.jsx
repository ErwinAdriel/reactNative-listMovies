import { Text, View} from 'react-native';
import twd from 'twrnc';

export function Genero({genero}){
    return(
        <View style={twd``}>
            <Text style={twd`text-white`}>{genero.name}</Text>
        </View>
    )
}