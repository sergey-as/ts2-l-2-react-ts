import Posts from "./Posts";
import PostDetails from "./PostDetails";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from "react-router-dom";
import {RouteComponentProps} from "react-router";

const App = () => {
    return (
        <div>
            <Router>
                <Link to={'/posts'}>posts</Link>

                <Route exact path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/posts/:id'} render={(props:RouteComponentProps) => <PostDetails {...props}/>}/>

            </Router>

        </div>
    );
}

export default App;






