import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import twd from "twrnc";

export default function Layout(){
    const insets = useSafeAreaInsets();

    return(
        <SafeAreaProvider>
            <View style={twd`pt-[${insets.top}] pb-[${insets.bottom}] bg-[#030F26] flex-1 items-center`}>
            <StatusBar style="light" />
            < Slot />
            </View>
        </SafeAreaProvider>
    )
}