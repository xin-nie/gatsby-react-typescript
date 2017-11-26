import * as React from 'react';
import Helmet from 'react-helmet';
import { IBlogPost } from '../types';

// import '../css/blog-post.css'; // TODO: add style for post template
const PostTemplate = (blogPost: IBlogPost) => {
  const { data: { markdownRemark: post } } = blogPost;
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
