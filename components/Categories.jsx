import { Text, View } from "react-native";

export default function CategoriesList({ categories }) {
    return (
        <View>
            {categories.map(category =>
                <View key={category.id} style={{marginBottom: 20}}>
                    <Text>{category.name}</Text>
                    <Text>{category.description}</Text>
                </View>
            )}
        </View>

    )
}