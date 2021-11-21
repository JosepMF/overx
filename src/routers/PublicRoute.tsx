import {Redirect, Route} from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routers from '../helpers/routers';

export default function PublicRoute(props: any) {
    const tools: any = useAuth();
    if (!tools.logged) {
        return <Route {...props}/>
    }
    return <Redirect to={routers.indexPage}/>
}
