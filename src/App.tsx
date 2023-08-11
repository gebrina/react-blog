import React, { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Blog from './pages/blog';
import BlogDetail from './pages/blog/detail';
import Footer from './components/footer';
import NotFound from './pages/not-found';
import styled from '@emotion/styled';
import './App.css';
import LogIn from './pages/login';
import Register from './pages/register';

const AppWrapper = styled.main`
  min-height: 100dvh;
  margin: 0;
  color: #fff;
  font-size: 18px;
  background: rgb(10, 17, 46);
  positon: relative;
`;
const App: FC = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;