import { useEffect, useLayoutEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  StarIcon,
  LocationMarkerIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import BasketIcon from "../components/BasketIcon";
import DishRow from "../components/DishRow";
import { urlFor } from "../sanity";
import { emptyBasket } from "../slices/basketSlice";
import { setRestaurant } from "../slices/restaurantSlice";

const RestaurantScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params;

  useEffect(() => {
    dispatch(emptyBasket());
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-56 bg-gray-300 p-4"
            source={{
              uri: imgUrl,
            }}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={22} color="green" opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon size={22} color="gray" opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.5} />
            <Text className="pl-2 flex-1 text-md font-bold">
              {" "}
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* DishRows */}
          {dishes.map((dish) => (
            <DishRow key={dish._id} {...dish} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
export default RestaurantScreen;
