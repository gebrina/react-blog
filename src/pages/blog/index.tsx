import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import BlogCard from './card';
import { fetchBlogs } from '../../api/blog';
import { CONSTANT } from '../../constants';
import { TBlog } from '../../types/blog';
import Loader from '../../components/loader';

const BlogWrapper = styled.div`
  min-height: 85.5vh;
  padding-right: 75px;
  padding-left: 75px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 500px) {
    padding: 0;
  }
`;
const BlogTitle = styled.h1`
  text-align: center;
  fonst-size: 40px;
  margin: 50px auto;
  opacity: 0.7;
  text-underline-offset: 5px;
  text-decoration: underline;
  text-decoration-color: red;
  font-style: italic;
`;

const LoadMoreButton = styled.button`
  display: block;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0px auto;
  margin-bottom: 50px;
  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.5s ease;
  }
`;
const Blog: FC = () => {
  const {
    data: blogs,
    isLoading,
    isFetching,
    fetchNextPage,
    isError,
  } = useInfiniteQuery({
    queryKey: ['blogs'],
    queryFn: ({ pageParam = 1 }) => fetchBlogs(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1 || undefined;
      return nextPage;
    },
  });
  if (isLoading)
    return (
      <BlogWrapper>
        <Loader />
      </BlogWrapper>
    );
  return (
    <>
      <BlogTitle>Learn Something...Now!!</BlogTitle>
      <BlogWrapper>
        {blogs?.pages.map((page: any) =>
          page?.data.map((blog: TBlog) => (
            <React.Fragment>
              <BlogCard blog={blog} />
            </React.Fragment>
          ))
        )}
      </BlogWrapper>
      <LoadMoreButton onClick={() => fetchNextPage()}>
        {isFetching ? 'Loading...' : 'Load More'}
      </LoadMoreButton>
    </>
  );
};

export default Blog;
