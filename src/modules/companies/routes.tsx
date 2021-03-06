import queryString from 'query-string';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { CompaniesList, CompanyDetails } from './containers';

const routes = () => (
  <React.Fragment>
    <Route
      path="/companies/details/:id"
      exact
      key="/companies/details/:id"
      component={({ match, location }) => {
        const queryParams = queryString.parse(location.search);
        const id = match.params.id;

        return <CompanyDetails id={id} queryParams={queryParams} />;
      }}
    />

    <Route
      path="/companies"
      exact
      key="/companies"
      component={({ location }) => {
        const queryParams = queryString.parse(location.search);
        return <CompaniesList location={location} queryParams={queryParams} />;
      }}
    />
  </React.Fragment>
);

export default routes;
