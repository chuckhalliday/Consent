import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = () => 
<Bio 
    headshot="https://drive.google.com/uc?export=view&id=1DSMBQ3TAKxOXG966zyeGrJaBye-A_qaQ"
    name="Charles Clark"
    username="@chuckhalliday"
/>;

export const Default = Template.bind({});