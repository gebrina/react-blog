import { useState } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { useBlogContext } from '../../context';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/loader';
import { fetchUserById } from '../../api/user';
import CreateBlog from './create-blog';
import { TBlog } from '../../types/blog';

const DashboardWrapper = styled.div`
  min-height: 84.5vh;
  margin: auto;
  padding: 50px 150px;

  @media only screen and (max-width: 600px) {
    padding: 50px;
  }
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
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const BlogTable = styled.table`
  width: fit-content;
  border: 2px solid rgba(255, 255, 255, 0.5);
  margin: 50px auto;
  border-spacing: 20px;
  thead {
    tr {
      th {
        border-bottom: 2px solid rgba(255, 255, 255, 0.7);
      }
    }
  }
`;
type ActionButtonType = {
  actionType: string;
};
const ActionButton = styled.button<ActionButtonType>`
  color: ${({ actionType }) => (actionType == 'white' ? 'red' : 'white')};
  border: none;
  padding: 5px 15px;
  font-size: 16px;
  background: ${({ actionType }) =>
    actionType == 'danger' ? 'rgba(255,0,0,.7)' : 'rgba(255,255,255,.7)'};
  &:hover {
    transition: all 0.4s ease;
    opacity: 0.8;
    cursor: pointer;
  }
`;
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
      <Button onClick={() => setCreatePost(!createPost)}>
        {!createPost ? 'Create Post' : 'Cancel'}
      </Button>
      {data?.blogs && data?.blogs?.length > 0 ? (
        <BlogTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.blogs.map((blog: TBlog, index: number) => (
              <tr key={blog.title}>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                <td>{blog.description.substring(0, 100) + '...'}</td>
                <td>
                  <ActionButton actionType="danger">Delete</ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
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
