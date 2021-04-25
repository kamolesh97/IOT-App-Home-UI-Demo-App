import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, Image} from '@elements';

const Devices = ({name, image, numberOfDevices}) => {
    return (
        <View height={140} width={120} bgCol="container1" bdrRad={[15]} mg={[5, 10, 5, 0]}>
            <View height="65%" width="100%" bdrRad={[15]}>
                <Image height="100%" width="100%" source={{uri: image}} />
            </View>
            <View flex={1} jc="center" pd={[0, 10]}>
                <Text>{name}</Text>
                <Text size="xs">{numberOfDevices} devices</Text>
            </View>
        </View>
    );
};

Devices.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    numberOfDevices: PropTypes.number,
};

export default Devices;
