import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const mockNotifications = [
  {
    id: '1',
    title: 'New Discount!',
    message: 'Get 20% off on your next trip to Aspen.',
    time: '2h ago',
    icon: 'percent',
    color: '#10B981',
  },
  {
    id: '2',
    title: 'Adventure Alert',
    message: 'New hiking trails are now available in Colorado.',
    time: '5h ago',
    icon: 'map',
    color: '#3B82F6',
  },
  {
    id: '3',
    title: 'Booking Confirmed',
    message: 'Your stay at Coeurdes Alpes is all set!',
    time: '1d ago',
    icon: 'check-circle',
    color: '#F59E0B',
  },
];

export default function NotificationsScreen() {
  return (
    <View className="flex-1 bg-white pt-20 px-6">
      <Text className="text-3xl font-bold text-gray-900 mb-6">Notifications</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {mockNotifications.map((notification) => (
          <TouchableOpacity 
            key={notification.id} 
            className="flex-row items-center p-4 bg-gray-50 rounded-3xl mb-4 border border-gray-100"
          >
            <View 
              style={{ backgroundColor: notification.color + '20' }}
              className="w-12 h-12 rounded-2xl items-center justify-center"
            >
              <Icon name={notification.icon} size={20} color={notification.color} />
            </View>
            <View className="flex-1 ml-4">
              <View className="flex-row justify-between items-center">
                <Text className="font-bold text-gray-900">{notification.title}</Text>
                <Text className="text-[10px] text-gray-400">{notification.time}</Text>
              </View>
              <Text className="text-xs text-gray-500 mt-1" numberOfLines={1}>
                {notification.message}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
