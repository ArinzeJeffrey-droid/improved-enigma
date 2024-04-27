import orders from "@/assets/data/orders";
import OrderItemListItem from "@/src/components/OrderListItem";
import { Stack } from "expo-router";
import { FlatList } from "react-native";

export default function MenuScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Archive" }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <OrderItemListItem order={item} />}
      />
    </>
  );
}
