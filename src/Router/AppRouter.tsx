import { Route, Switch, Redirect } from 'react-router-dom';
import Form from '../pages/Form/Form';
import Preview from '../pages/Preview/Preview';

const AppRouter = () => {
    return (        
        <Switch>
            <Route path="/form">
                <Form />
            </Route>
            <Route path="/preview">
                <Preview />
            </Route>
            <Redirect to="form" />
        </Switch>        
    );
};

export default AppRouter;