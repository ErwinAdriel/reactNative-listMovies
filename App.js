import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import twd from 'twrnc';
import { Main } from './components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  return (
    <SafeAreaProvider>
      <View style={twd`bg-slate-800 flex-1 items-center border-2`}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
    
  );
}