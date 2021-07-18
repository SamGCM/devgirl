import {Route, Switch, BrowserRouter} from 'react-router-dom'
import App from '../views/App'



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes