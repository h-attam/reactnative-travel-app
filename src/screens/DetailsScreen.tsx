import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconSolid from 'react-native-vector-icons/FontAwesome';
import { useBookmarks } from '../context/BookmarkContext';

export default function DetailsScreen({ route, navigation }: any) {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const { item } = route.params || {};

  const displayItem = item || { 
    id: 'default',
    title: 'Coeurdes Alpes', 
    rating: '4.5', 
    image: 'https://images.unsplash.com/photo-1551882547-ff43c619340b?q=80&w=600&fit=crop' 
  };

  const bookmarked = isBookmarked(displayItem.id);

  const recommendedItems = [
    { id: 'rec1', title: 'Mountain Hut', rating: '4.8', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb' },
    { id: 'rec2', title: 'Lake View', rating: '4.7', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Top Image & Header */}
        <View className="m-4 relative mb-10">
          <View className="h-96 rounded-3xl overflow-hidden">
            <Image 
              source={{ uri: displayItem.image }} 
              className="w-full h-full" 
            />
            <View className="absolute top-6 left-4 right-4 flex-row justify-between">
              <TouchableOpacity 
                className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-xl items-center justify-center border border-white/20"
                onPress={() => navigation.goBack()}
              >
                <Icon name="chevron-left" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Heart icon linked to bookmark state */}
          <TouchableOpacity 
            onPress={() => toggleBookmark(displayItem)}
            className="absolute bottom-[-24] right-6 w-14 h-14 bg-white rounded-full items-center justify-center shadow-xl elevation-5"
          >
            <View className="w-11 h-11 bg-white rounded-full items-center justify-center shadow-sm">
              <IconSolid 
                name={bookmarked ? "heart" : "heart-o"} 
                size={24} 
                color="#EF4444" 
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="px-6 pt-4">
          <View className="flex-row justify-between items-end mb-2">
            <Text className="text-3xl font-bold text-gray-900 w-2/3">{displayItem.title}</Text>
            <TouchableOpacity>
              <Text className="text-primary font-bold">Show map</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center mb-6">
            <IconSolid name="star" size={12} color="#FBBF24" />
            <Text className="text-xs text-gray-600 ml-1">{displayItem.rating} (355 Reviews)</Text>
          </View>

          <Text className="text-gray-600 text-sm leading-relaxed mb-1">
            Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and ...
          </Text>
          <Text className="text-primary text-sm font-bold mb-6">Read more</Text>

          <Text className="text-lg font-bold text-gray-900 mb-4">Facilities</Text>
          <View className="flex-row justify-between mb-8">
            <View className="bg-gray-50 p-4 rounded-2xl items-center w-[22%]">
              <Icon name="wifi" size={20} color="#9CA3AF" />
              <Text className="text-xs text-gray-400 mt-1">Heater</Text>
            </View>
            <View className="bg-gray-50 p-4 rounded-2xl items-center w-[22%]">
              <Icon name="coffee" size={20} color="#9CA3AF" />
              <Text className="text-xs text-gray-400 mt-1">Dinner</Text>
            </View>
            <View className="bg-gray-50 p-4 rounded-2xl items-center w-[22%]">
              <Icon name="sun" size={20} color="#9CA3AF" />
              <Text className="text-xs text-gray-400 mt-1">Tub</Text>
            </View>
            <View className="bg-gray-50 p-4 rounded-2xl items-center w-[22%]">
              <Icon name="wind" size={20} color="#9CA3AF" />
              <Text className="text-xs text-gray-400 mt-1">Pool</Text>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="absolute bottom-0 left-0 right-0 p-6 flex-row justify-between items-center bg-white shadow-2xl rounded-t-3xl">
        <View>
          <Text className="text-xs text-gray-500">Price</Text>
          <Text className="text-2xl font-bold text-green-500">$199</Text>
        </View>
        <TouchableOpacity className="bg-primary px-8 py-4 rounded-2xl flex-row items-center">
          <Text className="text-white font-bold mr-2">Book Now</Text>
          <Icon name="arrow-right" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
