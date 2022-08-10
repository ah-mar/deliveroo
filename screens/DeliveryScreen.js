import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { XIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";
//import { Marker } from "react-native-maps";

// if (Platform.OS === "ios" || "android") {
//   const MapView = require("react-native-maps");
//   const { Marker } = require("react-native-maps");
// }

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  console.log("restaurant is", restaurant);
  console.log("Platform is", Platform.OS);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-10">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-10 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>

            <Image
              className="h-20 w-20"
              source={{
                uri: "https://links.papareact.com/fls",
              }}
            />
          </View>

          <Progress.Bar size={30} colors="#00ccb" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      {(Platform.OS === "ios" || "android") && (
        <>
          <MapView
            className="flex-1 -mt-10 z-0"
            mapType="mutedStandard"
            initialRegion={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          />

          {/* <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
            }}
          /> */}
        </>
      )}
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <View className="flex-1 ">
          <Text className="text-lg">John Smith</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};
export default DeliveryScreen;
