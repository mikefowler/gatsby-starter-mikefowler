/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet, { HelmetProps } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import nullthrows from 'nullthrows';
import idx from 'idx.macro';

import { GetSeoQuery } from '../__generated__/graphqlTypes';

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: HelmetProps['meta'];
  title: string;
}

const SEO: React.FC<SEOProps> = ({ description = '', lang = 'en', meta = [], title }) => {
  const data = useStaticQuery<GetSeoQuery>(
    graphql`
      query GetSEO {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const site = nullthrows(idx(data, (_) => _.site));

  const metaDescription = description || site.siteMetadata.description;

  const DEFAULT_META: HelmetProps['meta'] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[...DEFAULT_META, ...meta]}
    />
  );
};

export default SEO;
