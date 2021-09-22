import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './Homepage'

function App() {
    return (
        <Router>
            <div>
                <Route path='/' exact component={Homepage} />
            </div>
        </Router>
    );
}

export default App;
