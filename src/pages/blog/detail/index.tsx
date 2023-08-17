import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useParams, useLocation } from 'react-router-dom';
import Purify from 'dompurify';
import { fetchBlogById } from '../../../api/blog';
import Loader from '../../../components/loader';

const BlogDetailWrapper = styled.div`
  width: 50%;
  min-height: 84.5vh;
  margin: 100px auto;
  overflow: hidden;
  img {
    max-height: 400px;
    margin-bottom: 50px;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;
const BlogTitle = styled.h1``;
const BlogDescription = styled.p`
  font-size: 20px;
  border-left: 3px solid rgba(255, 0, 0, 0.7);
  padding-left: 10px;
  margin: 50px 0;
  border-radius: 10px;
`;

const BlogContent = styled.div`
  font-size: 18px;
  line-height: 35px;
`;
const BlogDetail = () => {
  const { id = '' } = useParams();
  const { data: blog, isLoading } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlogById(id),
  });

  if (isLoading)
    return (
      <BlogDetailWrapper>
        <Loader />
      </BlogDetailWrapper>
    );

  return (
    <BlogDetailWrapper>
      <BlogTitle>{blog?.title}</BlogTitle>
      <BlogDescription>{blog?.description}</BlogDescription>
      <img src={'http://' + blog?.media} alt="" />
      <BlogContent
        dangerouslySetInnerHTML={{
          __html: Purify.sanitize(blog?.content as any),
        }}
      />
    </BlogDetailWrapper>
  );
};

export default BlogDetail;
