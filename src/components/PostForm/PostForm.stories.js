import React from 'react';

import PostForm from './PostForm';

export default {
  title: 'Components/PostForm',
  component: PostForm
};

const Template = () => 
<PostForm 
    content="You can do this!"
    clear="Delete"
/>;

export const Default = Template.bind({});