import React from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import ReactQuill from 'react-quill';
import Dropzone from 'react-dropzone';
import 'react-quill/dist/quill.snow.css';
import { TUser } from '../../../types/user';
import { BlogPostValidation } from '../../../validation';

type CreateBlogProps = {
  user: TUser;
  setCreatePost: Function;
};
const CreateBlogWrapper = styled.div``;
const QuillWrapper = styled.div``;
const InputField = styled.input`
  padding: 10px 25px;
  background: transparent;
  outline: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  border-left: 1px solid rgba(255, 0, 0, 0.7);
  border-bottom: 1px solid rgba(255, 0, 0, 0.7);
  width: max-content;
`;
const InputTextAreaField = styled.textarea`
  padding: 10px 25px;
  background: transparent;
  outline: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  border-left: 1px solid rgba(255, 0, 0, 0.7);
  border-bottom: 1px solid rgba(255, 0, 0, 0.7);
  max-width: 100%;
`;
const CreateBlogForm = styled.form`
  display: flex;
  align-items: center;
  row-gap: 20px;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 50px auto;
  & > * {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Message = styled.p<{ error?: boolean }>`
  color: ${({ error }) =>
    error ? 'rgba(255,0,0,.8)' : 'rgba(255,255,255,.8)'};
`;

const DropZoneWrapper = styled.div`
  min-height: 150px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
`;

const CreateBlogButton = styled.button`
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

const CreateBlog = ({ user, setCreatePost }: CreateBlogProps) => {
  const initialValues = {
    title: '',
    description: '',
    content: '',
    media: '',
  };
  const { values, touched, errors, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues,
      validationSchema: BlogPostValidation,
      onSubmit: () => {},
    });
  return (
    <CreateBlogWrapper>
      <CreateBlogForm onSubmit={handleSubmit}>
        <InputField
          placeholder="Blog title ..."
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        {touched.title && errors.title && (
          <Message error>{errors.title}</Message>
        )}

        <InputTextAreaField
          placeholder="Description ..."
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        {touched.description && errors.description && (
          <Message error>{errors.description}</Message>
        )}

        <DropZoneWrapper>
          <Dropzone onDrop={(acceptedFiles: File[]) => {}}>
            {({ getInputProps, getRootProps, isDragActive }) => (
              <section {...getRootProps()}>
                <InputField {...getInputProps()} />
                <Message>
                  {isDragActive ? 'Drop Here...' : 'Drag and Drop File Here...'}
                </Message>
              </section>
            )}
          </Dropzone>
        </DropZoneWrapper>
        <QuillWrapper>
          <ReactQuill
            placeholder="Content....."
            value={values.content}
            onChange={handleChange}
          />
        </QuillWrapper>
        <CreateBlogButton>Create</CreateBlogButton>
      </CreateBlogForm>
    </CreateBlogWrapper>
  );
};

export default CreateBlog;
