import Layout from './components/ui/Layout';
import Navbar from './components/ui/Navbar';
import Pulse from './containers/Pulse';
import Feedback from './containers/Feedback';
import Metrics from './containers/Metrics';
import Impact from './containers/Impact';
import Main from './components/ui/Main';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Layout>
                <Navbar />
                <Main>
                    <Route exact path="/">
                        <Pulse />
                    </Route>
                    <Route path="/impact">
                        <Impact />
                    </Route>
                    <Route path="/feedback/:id">
                        <Feedback />
                    </Route>
                    <Route path="/feedback/">
                        <Feedback />
                    </Route>
                    <Route path="/metrics">
                        <Metrics />
                    </Route>
                </Main>
            </Layout>
        </div>
    );
}

export default App;
