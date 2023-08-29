/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from "./src/modules/auth/login";

AppRegistry.registerComponent(appName, () => LoginScreen);
