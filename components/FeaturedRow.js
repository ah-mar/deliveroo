import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, restaurants }) => {
  return (
    <View>
      <View className="mt-4 flex flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={true}
        className="pt-4"
      >
        {/* Restauranr Cards */}
        {restaurants &&
          restaurants.map(
            ({
              address,
              dishes,
              image,
              lat,
              long,
              name,
              rating,
              short_description,
              _id,
            }) => (
              <RestaurantCard
                key={_id}
                id={_id}
                imgUrl={urlFor(image).url()}
                title={name}
                rating={rating}
                genre="Japanese"
                address={address}
                short_description={short_description}
                dishes={dishes}
                long={long}
                lat={lat}
              />
            )
          )}
      </ScrollView>
    </View>
  );
};
export default FeaturedRow;

//avoiding another fetch as the data can be all pulled in the featured row fetch call.
