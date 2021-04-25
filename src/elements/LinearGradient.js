import styled from 'styled-components/native';
import RNLinearGradient from 'react-native-linear-gradient';

import {scaledValue} from '@common/utils';

const LinearGradient = styled(RNLinearGradient).attrs((props) => ({
    colors: (props.colors && props.colors.map((colorCode) => props.theme.color[colorCode] || colorCode)) || ['transparent'],
    start: {x: 0, y: 0},
    end: {x: props.LR ? 1 : 0, y: 1},
}))`
    ${(props) => props.flex && `flex: ${props.flex}`}
    ${(props) => props.height && `height: ${typeof props.height === 'string' ? props.height : scaledValue(props.height) + 'px'}`};
    ${(props) => props.width && `width: ${typeof props.width === 'string' ? props.width : scaledValue(props.width) + 'px'}`};
    ${(props) => props.position && `position: ${props.position}`};
    ${(props) => props.top && `top: ${props.top}`};
    ${(props) => props.bottom && `bottom: ${props.bottom}`};
`;

export default LinearGradient;
