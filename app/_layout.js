import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import twd from "twrnc";
import { Logo } from "../components/Logo";

export default function Layout(){
    const insets = useSafeAreaInsets();

    return(
        <SafeAreaProvider>
            <View style={twd`flex-1`}>
            < Stack 
                screenOptions={{
                    headerStyle: {backgroundColor: "#030F26"},
                    headerTintColor: "white",
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                }}
            />
            </View>
        </SafeAreaProvider>
    )
}