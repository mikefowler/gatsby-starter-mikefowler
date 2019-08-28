/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import idx from 'idx.macro';

import Header from './Header';
import GlobalStyles from './GlobalStyles';
import theme from '../theme';
import { GetSiteTitleQuery } from '../__generated__/graphqlTypes';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery<GetSiteTitleQuery>(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const title = idx(data, (_) => _.site.siteMetadata.title);

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Layout;
