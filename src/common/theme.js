import {scaledValue} from '@common/utils';

const theme = {
    color: {
        bgCol: '#06284B',
        bgCol_50p: '#06284B50',
        white: '#fff',
        black: '#000',
        enabled1: '#38F07F',
        enabled2: '#1F3E76',
        enabled3: '#2A5197',
        enabled4: '#4FCEE4',
        disabled1: '#B5BCD6',
        disabled2: '#0E4764',
        disabled3: '#7EB9EA',
        container1: '#055681',
    },
    spacing: {
        boundary: () => scaledValue(16),
    },
    size: {
        xs: () => scaledValue(12),
        sm: () => scaledValue(14),
        md: () => scaledValue(16),
        lg: () => scaledValue(18),
        xlg: () => scaledValue(20),
        xxlg: () => scaledValue(24),
    },
};

export default theme;
