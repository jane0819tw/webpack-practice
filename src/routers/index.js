import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, Fragment } from 'react';
import routerList from './routerList';


const CustomRoute = () => {
  const routerListRecursion = (routerList) => {
    return Object.assign(routerList).map(({ path, exact, routes, component: LazyComponent }, key) => {
      let newItem = { path, exact };
      if (routes && routes.length) {
        return (
          <Fragment key={`fragment${key}`}>
            {/* 透過 props傳遞屬性 */}
            <Route key={key} {...newItem} render={(props) => <LazyComponent {...props} />}></Route>
            {/* 为方便组件之间的传参 利用render */}
            <Switch key={`switch${key}`}>
              {routerListRecursion(routes)}
            </Switch>
          </Fragment>
        )
      } else {
        return <Route key={key} {...newItem} render={(props) => <LazyComponent {...props} />}></Route>
      }
    })
  };
  {/* 执行递归方法 */ }
  return (
    <Router>
      <Suspense fallback={<span>Loading...</span>}>
        {/* Lazy要求有的Loading组件 */}
        <Switch>
          {routerListRecursion(routerList)}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default CustomRoute;
