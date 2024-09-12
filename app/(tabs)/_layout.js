import { Tabs } from "expo-router";
import { View } from "react-native";

import { HomeIcon, TvIcon } from "../../components/Icons";

export default function TabsLayout(){
    return (
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {backgroundColor: "#D93250", borderTopWidth: 0},
                    tabBarActiveTintColor: "#030F26",
                    tabBarInactiveTintColor: "#FFF",
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Inicio",
                        tabBarIcon: ({color}) => <HomeIcon color={color} />
                    }}
                />
                <Tabs.Screen
                    name="tv"
                    options={{
                        title: "Tv",
                        tabBarIcon: ({color}) => <TvIcon color={color}/>
                    }}
                />
            </Tabs>
    )
}