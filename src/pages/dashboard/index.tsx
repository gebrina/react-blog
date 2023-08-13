import { useState } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { useBlogContext } from '../../context';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/loader';
import { fetchUserById } from '../../api/user';
import CreateBlog from './create-blog';

const DashboardWrapper = styled.div`
  min-height: 84.5vh;
  padding: 50px 150px;
  margin: auto;
`;

const DashboardTitle = styled.h2`
  text-align: center;
  color: rgba(255, 0, 0, 0.8);
`;
const Info = styled.h4`
  color: rgba(0, 255, 0, 0.8);
  text-align: center;
  display: inline-block;
  margin-right: 15px;
`;

const Button = styled.button`
  border: none;
  background: rgba(0, 255, 0, 0.8);
  color: rgba(255, 255, 255, 0.8);
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 17px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.7s ease;
  }
`;
const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;
const BlogTable = styled.table``;
const Dashboard = () => {
  const { loggedinUser } = useBlogContext();
  const { id } = loggedinUser.user;
  const { isLoading, data, isError } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id, loggedinUser.access_token),
  });

  const [createPost, setCreatePost] = useState(false);

  if (isLoading)
    return (
      <DashboardWrapper>
        <Loader />
      </DashboardWrapper>
    );

  return (
    <DashboardWrapper>
      <DashboardTitle>Hey {data?.username}</DashboardTitle>
      {data?.blogs && data?.blogs?.length > 0 ? (
        <BlogTable>
          <thead>
            <tr>
              <th>title</th>
            </tr>
          </thead>
          <tbody></tbody>
        </BlogTable>
      ) : (
        <MessageContainer>
          <Info>You dont't posted any... post Now 🥰</Info>
          <Button onClick={() => setCreatePost(!createPost)}>
            {!createPost ? 'Create Post' : 'Cancel'}
          </Button>
        </MessageContainer>
      )}
      {createPost && (
        <CreateBlog setCreatePost={setCreatePost} user={loggedinUser} />
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;
