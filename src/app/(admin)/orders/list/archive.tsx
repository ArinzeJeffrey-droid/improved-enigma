import { useAdminOrderList } from "@/src/api/orders";
import OrderItemListItem from "@/src/components/OrderListItem";
import { Stack } from "expo-router";
import { ActivityIndicator, FlatList, Text } from "react-native";

export default function MenuScreen() {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: true });

  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text>Failed to fetch products</Text>;
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
