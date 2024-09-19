import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import twd from 'twrnc';
import { Main } from './components/Main';


export default function App() {

  return (
      <View style={twd`bg-[#030F26] flex-1 items-center border-2`}>
        <Main />
      </View>
  );
}