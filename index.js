import {AppRegistry, LogBox} from 'react-native';
import App from './src/App.tsx';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/index.tsx';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const ReduxApp = () => <App />;

AppRegistry.registerComponent(appName, () => ReduxApp);
