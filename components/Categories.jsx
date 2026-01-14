import { Text, View } from "react-native";

export default function CategoriesList({ categories }) {
    return (
        <View>
            {categories.map(category =>
                <View key={category.id} style={{marginBottom: 20}}>
                    <Text style={{fontStyle: "italic", fontWeight: 'bold'}}>{category.name}</Text>
                    <Text style={{fontStyle: "italic"}}>{category.description}</Text>
                </View>
            )}
        </View>

    )
}