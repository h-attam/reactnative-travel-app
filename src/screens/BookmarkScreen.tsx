import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useBookmarks } from "../context/BookmarkContext";
import IconSolid from "react-native-vector-icons/FontAwesome";

export default function BookmarkScreen() {
  const { bookmarks, toggleBookmark } = useBookmarks();

  return (
    <View className="flex-1 bg-white pt-20 px-6">
      <Text className="text-3xl font-bold text-gray-900 mb-18">Bookmarks</Text>

      {bookmarks.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <View className="bg-gray-50 p-12 rounded-full mb-4">
            <IconSolid name="bookmark-o" size={48} color="#9CA3AF" />
          </View>
          <Text className="text-gray-400 text-lg">
            Your bookmarks are empty
          </Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-between">
            {bookmarks.map((item) => (
              <View
                key={item.id}
                className="w-[48%] bg-white rounded-3xl overflow-hidden mb-4 shadow-sm border border-gray-100"
              >
                <Image
                  source={{ uri: item.image + "?q=80&w=400&fit=crop" }}
                  className="w-full h-40"
                />
                <View className="p-3">
                  <Text className="font-bold text-gray-800" numberOfLines={1}>
                    {item.title}
                  </Text>
                  <View className="flex-row items-center justify-between mt-2">
                    <View className="flex-row items-center">
                      <IconSolid name="star" size={10} color="#FBBF24" />
                      <Text className="text-xs text-gray-500 ml-1">
                        {item.rating}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => toggleBookmark(item)}>
                      <IconSolid name="heart" size={16} color="#EF4444" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
