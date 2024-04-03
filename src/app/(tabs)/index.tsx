import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { StyleSheet, View } from "react-native";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
});
