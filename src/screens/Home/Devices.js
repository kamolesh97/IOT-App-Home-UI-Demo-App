import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, LinearGradient, Icon} from '@elements';

const Devices = ({isDeviceOn, name, location, icon}) => {
    return (
        <View height={65} width={180} bdrRad={[15]} mg={[5, 10, 5, 0]}>
            <LinearGradient flex={1} LR colors={isDeviceOn ? ['enabled2', 'enabled3'] : ['disabled2', 'disabled2']}>
                <View flex={1} row ai="center" pd={[0, 16]}>
                    <View row jc="flex-start" ai="center">
                        <Icon type={icon?.type} name={icon?.name} color={isDeviceOn ? 'enabled4' : 'disabled3'} size="xxlg" />
                        <View mg={[0, 0, 0, 5]}>
                            <Text>{name}</Text>
                            <Text size="xs">{location}</Text>
                        </View>
                    </View>
                    {isDeviceOn && <View height="70%" width={4} bgCol="enabled1" />}
                </View>
            </LinearGradient>
        </View>
    );
};

Devices.propTypes = {
    isDeviceOn: PropTypes.bool,
    name: PropTypes.string,
    location: PropTypes.string,
    icon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
    }),
};

export default Devices;
