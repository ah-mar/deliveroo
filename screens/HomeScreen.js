import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { client } from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
   *[_type == "featured"] {
        ...,
        restaurants[]->{
            ...,
            dishes[]->,
            type->
        }
   }
   `
      )
      .then((data) => setFeaturedCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    // SafeAreaView works only with ios
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search Box */}
      <View className="flex flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex flex-row space-x-2 bg-gray-200 p-3 flex-1 align-items">
          <SearchIcon size={20} color="gray" />
          <TextInput
            className="flex-1"
            placeholder="Restaurants and Cuisine"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={35} color="#00ccbb" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows- 3 */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            restaurants={category.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
