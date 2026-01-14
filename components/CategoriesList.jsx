import { Text, View } from "react-native";

export default function CategoriesList({ categories }) {
    return (
        <View>
            {categories.map(category =>
                <View key={category.id}>
                    <Text>{category.name}</Text>
                    <Text>{category.description}</Text>
                </View>
            )}
        </View>

    )
}