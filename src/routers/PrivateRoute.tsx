import {Redirect, Route} from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routers from '../helpers/routers';

export default function PrivateRoute(props: any) {
    const tools: any = useAuth();

    console.log('isLogged: ',tools.logged);
    
    if (tools?.logged) {
        return <Route {...props}/>
    }
    return <Redirect to={routers.singInPage}/>
}
