import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../sanity";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../slices/basketSlice";

const DishRow = ({ _id, name, price, short_description, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  //const basketItems = useSelector(selectBasketItems); // Full basket
  const basketItemsWithId = useSelector((state) =>
    selectBasketItemsWithId(state, _id)
  );
  //   const dishItems = useSelector((state) =>
  //     state.basket.items.filter((item) => item._id === _id)
  //   );
  //const dishItems = basketItems.filter((item) => item._id === _id);

  //   console.log({ _id, name, price, short_description, image });
  //   console.log("basketItems", basketItems);
  //console.log("basketItemsWithId", basketItemsWithId);
  //   console.log("dishItems", dishItems);

  const addItemToBasket = () => {
    dispatch(addToBasket({ _id, name, price, short_description, image }));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ _id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="bg-white border-t p-4 border-gray-200"
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{short_description}</Text>
            <Text className="text-gray-400 mt-2"> {price} GBP</Text>
          </View>

          <View>
            <Image
              className="w-20 h-20 bg-gray-300 p-4 "
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={basketItemsWithId.length === 0}
            >
              <MinusCircleIcon
                color={basketItemsWithId.length > 0 ? "#00ccbb" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{basketItemsWithId.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00ccbb" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
export default DishRow;
