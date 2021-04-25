import React from 'react';
import styled from 'styled-components';
import RNMaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {scaledValue} from '@common/utils';

const MaterialCommunityIcons = styled(RNMaterialCommunityIcon).attrs((props) => ({
    name: props.name,
    color: props.theme.color[props.color] || 'white',
    size: props.theme.size[props.size]() || scaledValue(props.size) || props.theme.size.sm,
}))``;

const Icon = (props) => {
    const {type} = props;
    return <>{type === 'materialCommunity' && <MaterialCommunityIcons {...props} />}</>;
};

Icon.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
};

export default Icon;
