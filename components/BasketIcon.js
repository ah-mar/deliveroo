import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../slices/basketSlice";

const BasketIcon = () => {
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-10 w-full z-10">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00ccbb] opacity-90 mx-5 p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-bold text-lg bg-[#01a296] py-1 px-2">
          {basketItems.length}
        </Text>
        <Text className="flex-1 text-white font-bold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-white font-bold text-lg ">{basketTotal} GBP</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BasketIcon;
