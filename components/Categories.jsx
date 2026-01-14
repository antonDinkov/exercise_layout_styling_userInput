import { FlatList, Text, View } from "react-native";

export default function CategoriesList({ categories, style }) {
    return (
        <FlatList
            style={style}
            data={categories}
            keyExtractor={(category) => category.id}
            renderItem={({item}) =>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontStyle: "italic", fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontStyle: "italic" }}>{item.description}</Text>
                </View>
            }
        >
        </FlatList>

    )
}