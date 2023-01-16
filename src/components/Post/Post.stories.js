import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post
};

const Template = () => 
<Post 
    content="You can do this!"
    clear="Delete"
/>;

export const Default = Template.bind({});