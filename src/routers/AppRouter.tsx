import { Route, Switch } from "react-router-dom";
import routers from "../helpers/routers";
import AboutPage from "../pages/AboutPage";
import AccountPage from "../pages/AccountPage";
import UploadsPage from "../pages/admin/UploadsPage";
import UsersPage from "../pages/admin/UsersPage";
import IndexPage from "../pages/IndexPage";
import NotFoundPage from "../pages/NotFoundPage";
import SingInPage from "../pages/SingInPage";
import SingUpPage from "../pages/SingUpPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
    return (
        <Switch>
            <PrivateRoute exact path={routers.indexPage} component={IndexPage}/>
            <Route exact path={routers.aboutPage} component={AboutPage}/>
            
            <PrivateRoute exact path={routers.accountPage} component={AccountPage}/>
            <PublicRoute exact path={routers.singInPage} component={SingInPage}/>
            <PublicRoute exact path={routers.singUpPage} component={SingUpPage}/>
            
            <PrivateRoute exact path={routers.userPage} component={UsersPage}/>
            <PrivateRoute exact path={routers.uploadPage} component={UploadsPage}/>

            <Route path={routers.notFoundPage} component={NotFoundPage}/>
        </Switch>
    )
}
