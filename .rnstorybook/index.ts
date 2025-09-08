import {view} from './storybook.requires';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StorybookUIRoot = view.getStorybookUI({
    storage: {
        getItem: AsyncStorage.getItem,
        setItem: AsyncStorage.setItem,
    },
    onDeviceUI: true,
    shouldPersistSelection: true,
});

export default StorybookUIRoot;