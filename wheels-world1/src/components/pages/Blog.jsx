import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BlogList from '../UI/BlogList';

 const Blog = () => {
  return (
    <section>
    <Container>
      <Row>
        <BlogList />
      </Row>
    </Container>
  </section>
  )
}

export default Blog;
