import React from 'react';
import {ScrollView, FlatList} from 'react-native';

import {View, Text, Image, LinearGradient} from '@elements';
import Devices from '@screens/Home/Devices';
import Rooms from '@screens/Home/Rooms';

const bgImage = require('@assets/images/morning.jpg');
const deviceData = [
    {
        id: 'deviceData0',
        name: 'Light 1',
        location: 'Kitchen',
        icon: {
            type: 'materialCommunity',
            name: 'lightbulb-on',
        },
        isDeviceOn: true,
    },
    {
        id: 'deviceData1',
        name: 'Television',
        location: 'Bedroom',
        icon: {
            type: 'materialCommunity',
            name: 'television-classic',
        },
        isDeviceOn: true,
    },
    {
        id: 'deviceData2',
        name: 'Microwave',
        location: 'Kitchen',
        icon: {
            type: 'materialCommunity',
            name: 'microwave',
        },
        isDeviceOn: true,
    },
    {
        id: 'deviceData3',
        name: 'Lamp',
        location: 'Living-room',
        icon: {
            type: 'materialCommunity',
            name: 'desk-lamp',
        },
        isDeviceOn: false,
    },
];
const roomData = [
    {
        id: 'roomData0',
        name: 'Living Room',
        image:
            'https://images.unsplash.com/photo-1614649024145-7f847b1c803f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=taylor-heery-8DlbPCxfGHA-unsplash.jpg',
        numberOfDevices: 8,
    },
    {
        id: 'roomData1',
        name: 'Kitchen',
        image:
            'https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=dinh-ng-2Cc0KnE3lCs-unsplash.jpg',
        numberOfDevices: 7,
    },
    {
        id: 'roomData2',
        name: 'Bedroom',
        image:
            'https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sidekix-media-mIurtZy_5RE-unsplash.jpg',
        numberOfDevices: 12,
    },
    {
        id: 'roomData3',
        name: 'Dining Room',
        image:
            'https://images.unsplash.com/photo-1617850687361-a07b256ff259?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=cameron-smith-7OeyNx69jfs-unsplash.jpg',
        numberOfDevices: 8,
    },
];

const Home = () => {
    return (
        <View flex={1} bgCol="bgCol">
            <View height="45%" width="100%" position="absolute">
                <Image height="100%" width="100%" source={bgImage} />
                <LinearGradient height={250} width="100%" position="absolute" bottom={0} colors={['#ffffff00', 'bgCol_50p', 'bgCol']} />
            </View>
            <View flex={1} jc="flex-end" boundary>
                <Text size="lg">Good Evening,</Text>
                <Text size="xxlg">John Doe</Text>
                <View mg={[20, 0]}>
                    <Text>Favourite devices</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <FlatList
                            data={deviceData}
                            renderItem={({item}) => <Devices {...item} key={item.id} />}
                            keyExtractor={({id}) => id}
                            numColumns={deviceData.length / 2}
                        />
                    </ScrollView>
                </View>
                <View mg={[0, 0, 10, 0]}>
                    <Text>Rooms</Text>
                    <ScrollView horizontal>
                        {roomData.map((item) => (
                            <Rooms {...item} key={item.id} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Home;
