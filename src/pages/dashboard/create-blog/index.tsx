import { useState } from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import ReactQuill from 'react-quill';
import Dropzone from 'react-dropzone';
import 'react-quill/dist/quill.snow.css';
import { useMutation } from '@tanstack/react-query';
import { TUser } from '../../../types/user';
import { BlogPostValidation } from '../../../validation';
import { postBlog } from '../../../api/blog';
import { useBlogContext } from '../../../context';

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
  width: 100%;
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
const Image = styled.img`
  height: 100%;
  width: 100%;
  objec-fit: contain;
`;
const CreateBlog = ({ user, setCreatePost }: CreateBlogProps) => {
  const { loggedinUser } = useBlogContext();
  const initialValues = {
    title: '',
    description: '',
    content: '',
    media: '',
  };
  const [image, setimage] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const { values, touched, errors, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues,
      validationSchema: BlogPostValidation,
      onSubmit: () => {
        createData();
      },
    });

  const mutation = useMutation({
    mutationKey: ['create-blog'],
    mutationFn: postBlog,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const createData = () => {
    const formData = new FormData();
    formData.append('media', values.media);
    formData.append('title', values.title);
    formData.append('content', blogContent);
    formData.append('description', values.description);
    formData.append('user', loggedinUser.user.id);
    mutation.mutate(formData);
  };

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
          <Dropzone
            onDrop={(acceptedFiles: File[]) => {
              const file = acceptedFiles[0];
              const uploadedImage = URL.createObjectURL(file);
              setimage(uploadedImage);
              values.media = file as any;
            }}
          >
            {({ getInputProps, getRootProps, isDragActive }) => (
              <section {...getRootProps()}>
                <InputField {...getInputProps()} />
                {image && <Image src={image} />}
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
            value={blogContent}
            onChange={setBlogContent}
          />
        </QuillWrapper>
        <CreateBlogButton type="submit">Create</CreateBlogButton>
      </CreateBlogForm>
    </CreateBlogWrapper>
  );
};

export default CreateBlog;
