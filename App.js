import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'orange'}}>Flippin egg - Discussion Forum</Text>
            </View>
            <View>
                <Text>Topics:</Text>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 40,
    },
});
