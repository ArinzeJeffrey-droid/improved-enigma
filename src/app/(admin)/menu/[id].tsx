import products from "@/assets/data/products";
import Button from "@/src/components/Button";
import { defaultImage } from "@/src/components/ProductListItem";
import { useCart } from "@/src/providers/CartProvider";
import type { PizzaSize } from "@/src/types";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const { addItem } = useCart();

  const router = useRouter();

  const addToCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
    router.push("/cart");
  };

  if (!product) return <Text>Product not found</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultImage }}
        style={styles.image}
      />

      <Text style={styles.title}>${product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
