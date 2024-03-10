import './App.css';
import { Body } from './site/Body';
import { Header } from './site/Header';
import { Footer } from './site/Footer';

function App() {
    return (
        <div className="App">
            <Header title={'New Header'} />
            <Body title={'New Body'} />
            <Footer title={'New Footer'} />
        </div>
    );
}

export default App;
