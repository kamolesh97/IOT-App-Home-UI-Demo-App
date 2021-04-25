import styled from 'styled-components/native';

const Text = styled.Text`
    color: ${(props) => props.theme.color[props.color] || props.color || 'white'};
    font-size: ${(props) => props.theme.size[props.size || 'sm']}px;
`;

export default Text;
