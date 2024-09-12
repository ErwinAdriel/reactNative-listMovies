import { getMovies } from '../lib/data';
import { useEffect, useState } from 'react';
import { Text, View, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import twd from 'twrnc';
import { Screen } from './Screen';


export function MainTv(){
    return(
        <Screen>
            <View>
                <Text style={twd`text-white`}>TV</Text>
            </View>
        </Screen>
    )
}