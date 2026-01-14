import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, Platform, Pressable, SafeAreaView, StyleSheet, Switch, Text, useWindowDimensions, View } from 'react-native';
import CategoriesList from './components/Categories';
import data from './mockDatabase.json';

export default function App() {
    const [categories, setCategories] = useState(false);
    const { width, height, scale, fontScale } = useWindowDimensions();
    const isLandscape = width > height;
    const [enabled, setEnabled] = useState(false)
    const themeBackgroundAndroid = enabled
        ? { uri: 'https://t3.ftcdn.net/jpg/08/64/56/52/360_F_864565257_J80ucY6pV7T92lCr6Jk5GFeDzatcmoCV.jpg' }
        : { uri: 'https://media.gettyimages.com/id/1298136769/video/social-media-speech-bubbles-4k-looped-background-footage.jpg?s=640x640&k=20&c=Moe-fPEN_e2eL6fSmA1Sln52tzBGs6xwTXiTxYXcTHQ=' };
    const themeBackgroundWindow = enabled
        ? { uri: 'https://t3.ftcdn.net/jpg/08/64/56/52/360_F_864565257_J80ucY6pV7T92lCr6Jk5GFeDzatcmoCV.jpg' }
        : { uri: 'https://p1.hiclipart.com/preview/796/688/961/background-meeting-discussion-group-conversation-internet-forum-communication-text-orange-line-png-clipart.jpg' };
    const backgroundSource =
        Platform.OS === 'android'
            ? themeBackgroundAndroid
            : themeBackgroundWindow


    const categoriesViewHandler = () => {
        setCategories(categories => !categories);
    }
    return (
        <ImageBackground style={{ flex: 1 }} source={backgroundSource}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>Flippin egg - Discussion Forum</Text>
            </View>
            {isLandscape && <View style={{ alignSelf: 'center' }}><Text>The application is in landscape view</Text></View>}
            <View style={{ padding: 15, gap: 5 }}>
                <Pressable onPress={() => categoriesViewHandler()}>
                    <Text>Categories</Text>
                </Pressable>
                {categories && <CategoriesList style={{ maxHeight: '70%' }} categories={data.categories} />}
                <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                    <Text>Change Theme</Text>
                    <Switch
                        value={enabled}
                        onValueChange={setEnabled}
                        style={{ alignSelf: 'flex-start' }}
                    ></Switch>
                </View>
                <View>
                    <Text>Topics</Text>
                </View>
                <View>
                    <Text>Users</Text>
                </View>
                <View>
                    <Text>Posts</Text>
                </View>
                <View>
                    <Text>Reactions:</Text>
                </View>
            </View>
        </ImageBackground>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 40,
    },
});
