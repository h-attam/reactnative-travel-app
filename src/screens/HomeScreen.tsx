import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import IconSolid from "react-native-vector-icons/FontAwesome";
import { useBookmarks } from "../context/BookmarkContext";

const categories = ["Location", "Hotels", "Food", "Adventure", "Activities"];

const CATEGORY_DATA: { [key: string]: { popular: any[]; recommended: any[] } } =
  {
    Location: {
      popular: [
        {
          id: "1",
          title: "Alley Palace",
          rating: "4.1",
          image:
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1075&auto=format&fit=crop",
        },
        {
          id: "2",
          title: "Coeurdes Alpes",
          rating: "4.5",
          image:
            "https://images.unsplash.com/photo-1559333086-b0a56225a93c?q=80&w=987&auto=format&fit=crop",
        },
      ],
      recommended: [
        {
          id: "r1",
          title: "Explore Aspen",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        },
        {
          id: "r2",
          title: "Luxurious Aspen",
          image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
        },
      ],
    },
    Hotels: {
      popular: [
        {
          id: "h1",
          title: "St. Regis Aspen",
          rating: "4.9",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&fit=crop",
        },
        {
          id: "h2",
          title: "The Little Nell",
          rating: "4.8",
          image:
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&fit=crop",
        },
      ],
      recommended: [
        {
          id: "hr1",
          title: "Resort View",
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        },
        {
          id: "hr2",
          title: "Spa & Relax",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        },
      ],
    },
    Food: {
      popular: [
        {
          id: "f1",
          title: "Element 47",
          rating: "4.7",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&fit=crop",
        },
        {
          id: "f2",
          title: "White House Tavern",
          rating: "4.6",
          image:
            "https://images.unsplash.com/photo-1738516737618-06726c85ddab?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      recommended: [
        {
          id: "fr1",
          title: "Local Cuisine",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        },
        {
          id: "fr2",
          title: "Steak House",
          image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55",
        },
      ],
    },
    Adventure: {
      popular: [
        {
          id: "a1",
          title: "Maroon Bells",
          rating: "4.9",
          image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&fit=crop",
        },
        {
          id: "a2",
          title: "Silver Queen",
          rating: "4.7",
          image:
            "https://images.unsplash.com/photo-1501761095094-94d36f57edbb?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      recommended: [
        {
          id: "ar1",
          title: "Skiing Fun",
          image:
            "https://images.unsplash.com/photo-1512036666432-2181c1f26420?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "ar2",
          title: "Hike Trails",
          image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6",
        },
      ],
    },
    Activities: {
      popular: [
        {
          id: "ac1",
          title: "Skiing Lesson",
          rating: "4.8",
          image:
            "https://images.unsplash.com/photo-1703080138499-f1f0dbc7da42?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "ac2",
          title: "Dog Sledding",
          rating: "4.9",
          image:
            "https://images.unsplash.com/photo-1630997304867-729e29ff7bf4?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      recommended: [
        {
          id: "acr1",
          title: "Snowshoeing",
          image:
            "https://images.unsplash.com/photo-1576866946478-8d0d015bf3e5?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "acr2",
          title: "Ice Skating",
          image:
            "https://images.unsplash.com/photo-1667847988796-74c9067756e4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  };

export default function HomeScreen({ navigation }: any) {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const [activeCategory, setActiveCategory] = React.useState("Location");
  const currentData =
    CATEGORY_DATA[activeCategory] || CATEGORY_DATA["Location"];

  return (
    <View className="flex-1 bg-white pt-20 px-6">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-gray-500 text-sm">Explore</Text>
          <Text className="text-3xl font-bold text-gray-900">Aspen</Text>
        </View>
        <View className="flex-row items-center">
          <Icon name="map-pin" size={14} color="#1D4ED8" />
          <Text className="text-xs text-gray-600 ml-1">Aspen, USA</Text>
          <Icon
            name="chevron-down"
            size={14}
            color="#1D4ED8"
            className="ml-1"
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View className="bg-gray-100 rounded-full flex-row items-center px-4 py-3 mb-6">
          <Icon name="search" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Find things to do"
            className="flex-1 ml-2 text-gray-800"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-8"
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setActiveCategory(category)}
              className={`mr-4 px-6 py-3 rounded-full ${
                activeCategory === category ? "bg-primary/10" : "bg-transparent"
              }`}
            >
              <Text
                className={`${
                  activeCategory === category
                    ? "text-primary font-bold text-base"
                    : "text-gray-800 text-base"
                }`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Section */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-900">Popular</Text>
          <TouchableOpacity>
            <Text className="text-xs text-primary">See all</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mb-8">
          {currentData.popular.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              className="w-[48%] h-64 rounded-3xl overflow-hidden relative shadow-sm"
              onPress={() => navigation.navigate("Details", { item })}
            >
              <Image source={{ uri: item.image }} className="w-full h-full" />
              <View className="absolute bottom-4 left-3 bg-gray-900/40 px-2 py-1 rounded-xl backdrop-blur-md">
                <Text className="text-white text-[11px] font-semibold">
                  {item.title}
                </Text>
              </View>
              <View className="absolute bottom-4 right-3 bg-white/90 px-1.5 py-0.5 rounded-full flex-row items-center shadow-sm">
                <IconSolid name="star" size={8} color="#FBBF24" />
                <Text className="text-[9px] font-bold ml-1 text-gray-800">
                  {item.rating}
                </Text>
              </View>
              <TouchableOpacity 
                onPress={() => toggleBookmark(item)}
                className="absolute bottom-12 right-3 bg-white/90 p-2 rounded-full shadow-md"
              >
                <IconSolid 
                  name={isBookmarked(item.id) ? "heart" : "heart-o"} 
                  size={12} 
                  color="#EF4444" 
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recommended Section */}
        <Text className="text-xl font-bold text-gray-900 mb-4">
          Recommended
        </Text>
        <View className="flex-row justify-between flex-wrap pb-24">
          {currentData.recommended.map((item: any) => (
            <View
              key={item.id}
              className="w-[48%] h-40 rounded-3xl bg-gray-100 overflow-hidden relative mb-4 shadow-sm"
            >
              <Image
                source={{ uri: item.image + "?q=80&w=400&fit=crop" }}
                className="w-full h-full"
              />
              <View className="absolute bottom-3 left-3 bg-gray-900/30 px-2 py-1 rounded-lg">
                <Text className="text-white text-[10px] font-bold">
                  {item.title}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
}
