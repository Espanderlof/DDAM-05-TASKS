import { Provider } from 'react-redux';
import { Navigator } from './src/Navigator';
import { store } from './src/store/store';

export default function App() {
    return (
        <Provider store={ store }>
            <Navigator/>
        </Provider>
    )
}