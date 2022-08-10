import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { client, urlFor } from "../sanity";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "category"]`)
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Category Cards */}
      {categories &&
        categories.map((category) => (
          <CategoryCard
            key={category._id}
            imgUrl={urlFor(category.image).width(200).url()}
            title={category.name}
          />
        ))}
    </ScrollView>
  );
};
export default Categories;
