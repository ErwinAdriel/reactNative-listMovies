import { getTvs } from '../lib/data';
import { useEffect, useState } from 'react';
import { Text, View, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import twd from 'twrnc';
import { Screen } from './Screen';
import { TvCard } from './TvCard';


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
                <TvCard isMovie={true} />
            )}
        </Screen>
    )
}