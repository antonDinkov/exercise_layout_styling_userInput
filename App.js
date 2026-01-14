import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, Pressable, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import CategoriesList from './components/categoriesList';
import data from './mockDatabase.json'

export default function App() {
    const [categories, setCategories] = useState(false);
    const categoriesViewHandler = () => {
        setCategories(categories => !categories);
    }
    return (
            <ImageBackground style={{flex: 1}} source={{uri: 'https://media.gettyimages.com/id/1298136769/video/social-media-speech-bubbles-4k-looped-background-footage.jpg?s=640x640&k=20&c=Moe-fPEN_e2eL6fSmA1Sln52tzBGs6xwTXiTxYXcTHQ='}}>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>Flippin egg - Discussion Forum</Text>
                </View>
                <View style={{ padding: 15, gap: 5 }}>
                    <Pressable onPress={() => categoriesViewHandler()}>
                        <Text>Categories</Text>
                    </Pressable>
                    {categories && <CategoriesList categories={data.categories} />}
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
