import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { TBlog } from '../../../types/blog';

const Card = styled.div`
  height: 300px;
  margin-bottom: 50px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 500px;
  img {
    height: 80%;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    height: 200px;
    margin-top: 30px;
  }
`;
const CardTitle = styled.h3`
  margin-bottom: 10px;
`;

const BlogDetailLink = styled.div`
  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

type TBlogCardProps = {
  blog: TBlog;
};

const BlogCard: React.FC<TBlogCardProps> = ({ blog }) => {
  const { title, description, media, id } = blog;
  return (
    <Card color="blue">
      <BlogDetailLink>
        <Link to={`/blog/${id}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
      </BlogDetailLink>
      <img src={'http://' + media} alt="JSX" />
      <BlogDetailLink>
        <Link to={`/blog/${id}`}>{description}</Link>
      </BlogDetailLink>
    </Card>
  );
};

export default BlogCard;
