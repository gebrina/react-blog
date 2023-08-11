import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import jsxImage from '../../../assets/jsx.jpg';

const BlogDetailWrapper = styled.div`
  width: 50%;
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
  const { id } = useParams();

  return (
    <BlogDetailWrapper>
      <BlogTitle>
        BlogDetail{id}
        <BlogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam
          tempora voluptate nihil error enim dolorum. Iste maxime alias
          adipisci, voluptatum, itaque labore, iusto aut autem officia eos
        </BlogDescription>
        <img src={jsxImage} alt="" />
        <BlogContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          itaque quaerat architecto, in deleniti commodi dignissimos? Qui
          deserunt saepe natus doloribus temporibus repellendus dolorem labore
          quasi, unde explicabo dolorum rerum?1 Lorem ipsum dolor sit amet
          consectetur adipisicing elit. At cupiditate vitae, aliquam amet, nam,
          repellat dicta officiis voluptatibus quibusdam ipsum labore
          repudiandae ipsa vel? Voluptatem vero fugit doloribus aliquid dolore
          consequuntur quod. Ad omnis quaerat obcaecati consectetur? Magni
          assumenda totam quos ad hic quaerat labore commodi molestiae
          provident. Odio, recusandae. Optio consectetur, eos fugit suscipit
          provident illo velit quasi recusandae ex ipsa molestias cupiditate
          laborum laudantium, perferendis quibusdam earum! Soluta rem labore
          ratione deleniti suscipit asperiores eos. Tenetur cumque neque
          blanditiis illo corporis repellat aperiam, esse expedita voluptatibus
          quae quaerat dolor voluptatem, officia quasi voluptates dolorum modi
          vel quos molestias.
        </BlogContent>
      </BlogTitle>
    </BlogDetailWrapper>
  );
};

export default BlogDetail;
