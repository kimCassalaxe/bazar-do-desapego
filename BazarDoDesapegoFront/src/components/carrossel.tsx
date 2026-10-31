import { FlatList, StyleSheet, Text, View } from "react-native";
import { Category } from "@/constants/types";
import { useEffect, useState } from "react";
import { allCategory } from "@/context/categoryContext";
import { Colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

  

export default function Carrossel() {
  const [categories, setCategories] =  useState<Category[]| null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        console.log('catv')
        const categoryData = await allCategory();
        
        if (isMounted && categoryData && Array.isArray(categoryData)) {
          console.log('catv')
          setCategories(categoryData);
        }
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, []);
  if (!categories || categories.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.categoryText}>Não tem nenhum dado</Text>
        </View>
      );
    }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text style={styles.categoryText}>{item.icon || "🏷️"}</Text>
            <MaterialIcons name={"phone"} size={14} color={Colors.dark.textSecondary}/>
          </View>
        )}
        // ✅ Suporta tanto camelCase quanto snake_case que vem da API
        keyExtractor={(item) => item.categoryId || (item as any).category_id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5, gap: 10 }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    gap:5,
  },
  category:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:5,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:15,
    backgroundColor:Colors.dark.backgroundLigth,
  },categoryText:{
    color:Colors.dark.textSecondary,
    fontSize:14,
  }
});