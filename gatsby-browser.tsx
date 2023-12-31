import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import Layout from './src/components/layout';

// Logs when the client route changes
export const onRouteUpdate: GatsbyBrowser['onRouteUpdate'] = ({
    location,
    prevLocation
}) => {
    console.log("New pathname: ", location.pathname);
    console.log("Old pathname: ", prevLocation ? prevLocation.pathname : null);
}


// wraps every page in Layout
export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
}) => {
    return (
        <Layout>
            {element}
        </Layout>
    )
}