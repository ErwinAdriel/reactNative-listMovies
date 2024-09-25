import { getTvs } from '../lib/data';
import { useEffect, useState } from 'react';
import { Text, View, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import twd from 'twrnc';
import { AnimatedTvCard } from './TvCard';
import { Screen } from './Screen';


export function MainTv(){

    const [tvs, setTvs] = useState([]);

    useEffect(() => {
        getTvs().then((tvs) => {
            setTvs(tvs);
        });
    }, []);

    return(
        <Screen>

            {tvs.length === 0 ? (
                <ActivityIndicator />
            ) : (
                <FlatList 
                    data={tvs}
                    keyExtractor={tv => tv.id}
                    renderItem={({item, index}) => 
                    < AnimatedTvCard tv={item} index={index}/>
                    }
                    style={twd`h-full`}
                />
            )}
        </Screen>
    )
}