import React from 'react';
import Title from '../../atoms/title/title';
import Paragraph from '../../atoms/paragraph/paragraph';

const Home = props => (
  <div>
    <Title text="Atomic Components: Managing Dynamic React Components using Atomic Design" /> 
    <Paragraph text="Designed by Brad Frost and Dave Olsen, atomic design is a wonderful “methodology for creating design systems” backed by Pattern Lab with five distinct levels or ‘building blocks’, which, when combined, create semantic, contextual relationships between interface objects." />
  </div>
);

export default Home;
