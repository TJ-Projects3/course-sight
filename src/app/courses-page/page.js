// src/app/courses.js
'use client';
import React, { useState } from 'react';
import CourseCard from './components/CourseCard';
import { Container, TextField } from '@mui/material';
import { experimentalStyled as styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const courses = [
  {
    id: 1,
    title: 'Chemistry 115',
    description: 'General Organic Chemistry for nursing majors',
    image: 'https://media.istockphoto.com/id/1488859284/photo/plants-test-tube-and-science-woman-with-research-exam-and-solution-for-leaves-in-laboratory.jpg?s=2048x2048&w=is&k=20&c=fzhyHckXs8fBEwIqPXlQWPf9z-HdqAq0VYIaaRZPQGI=',
    videoUrl: 'https://www.youtube.com/embed/example1',
    testimonials: [
      { student: 'Student A', testimonial: 'This course was amazing!' },
      { student: 'Student B', testimonial: 'I learned so much from this course.' },
    ],
    professors: [
      { name: 'Professor A', rating: 4.5 },
      { name: 'Professor B', rating: 4.0 },
    ],
  },
  {
    id: 2,
    title: 'Biology 121',
    description: 'Introduction to Human biology',
    image: 'https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://www.youtube.com/embed/example2',
    testimonials: [
      { student: 'Student C', testimonial: 'Great course!' },
      { student: 'Student D', testimonial: 'Very informative.' },
    ],
    professors: [
      { name: 'Professor C', rating: 4.2 },
      { name: 'Professor D', rating: 3.8 },
    ],
  },
  {
    id: 3,
    title: 'Math 330',
    description: 'Statistical methods for computer science',
    image: 'https://media.istockphoto.com/id/640129130/photo/business-person-standing-in-front-of-mathematical-formula.jpg?s=2048x2048&w=is&k=20&c=JTJzB9uKIV0abkVODnPv4h-j1gnfOtIvk56Zs1dw0z0=',
    videoUrl: 'https://www.youtube.com/embed/example3',
    testimonials: [
      { student: 'Student E', testimonial: 'Very challenging but rewarding.' },
      { student: 'Student F', testimonial: 'Helped me understand statistics better.' },
    ],
    professors: [
      { name: 'Professor E', rating: 4.7 },
      { name: 'Professor F', rating: 4.3 },
    ],
  },
  {
    id: 4,
    title: 'Cosc 235',
    description: 'Introduction to computer science 2',
    image: 'https://media.istockphoto.com/id/1461146736/photo/close-up-of-laptop-computer-on-desk-with-glowing-globe-hologram-on-blurry-background-internet.jpg?s=2048x2048&w=is&k=20&c=Pbq3Q_mkZentJy4M1kzdhBONste4CfSXcqI-mqIhw5g=',
    videoUrl: 'https://www.youtube.com/embed/example4',
    testimonials: [
      { student: 'Student G', testimonial: 'Great introduction to advanced topics.' },
      { student: 'Student H', testimonial: 'Loved the hands-on projects.' },
    ],
    professors: [
      { name: 'Professor G', rating: 4.6 },
      { name: 'Professor H', rating: 4.1 },
    ],
  },
  {
    id: 5,
    title: 'Physics 320',
    description: 'The theory of computational physics in our world today',
    image: 'https://media.istockphoto.com/id/1866121335/photo/physics-and-mathematics.jpg?s=2048x2048&w=is&k=20&c=0e6C6C7zlAoYIBk5Pg6Nxa8ibY8aN0x5ZIMIJN4g0OU=',
    videoUrl: 'https://www.youtube.com/embed/example5',
    testimonials: [
      { student: 'Student I', testimonial: 'Fascinating insights into physics.' },
      { student: 'Student J', testimonial: 'Highly recommend for physics enthusiasts.' },
    ],
    professors: [
      { name: 'Professor I', rating: 4.8 },
      { name: 'Professor J', rating: 4.4 },
    ],
  },
  {
    id: 6,
    title: 'Math 265',
    description: 'Calculus 2 - Introduction to Integration',
    image: 'https://media.istockphoto.com/id/696935130/photo/complex-math-formulas-on-whiteboard-mathematics-and-science-with-economics.jpg?s=2048x2048&w=is&k=20&c=pu5FyP-VM0Y8Hb3qNQWPRSyEZgTx_RV8CHBo8OmwSjY=',
    videoUrl: 'https://www.youtube.com/embed/example6',
    testimonials: [
      { student: 'Student K', testimonial: 'A tough but essential course.' },
      { student: 'Student L', testimonial: 'Helped me master integration.' },
    ],
    professors: [
      { name: 'Professor K', rating: 4.9 },
      { name: 'Professor L', rating: 4.5 },
    ],
  },
  {
    id: 7,
    title: 'Biology 121',
    description: 'Introduction to Human biology',
    image: 'https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://www.youtube.com/embed/example2',
    testimonials: [
      { student: 'Student C', testimonial: 'Great course!' },
      { student: 'Student D', testimonial: 'Very informative.' },
    ],
    professors: [
      { name: 'Professor C', rating: 4.2 },
      { name: 'Professor D', rating: 3.8 },
    ],
  },
  {
    id: 8,
    title: 'Math 330',
    description: 'Statistical methods for computer science',
    image: 'https://media.istockphoto.com/id/640129130/photo/business-person-standing-in-front-of-mathematical-formula.jpg?s=2048x2048&w=is&k=20&c=JTJzB9uKIV0abkVODnPv4h-j1gnfOtIvk56Zs1dw0z0=',
    videoUrl: 'https://www.youtube.com/embed/example3',
    testimonials: [
      { student: 'Student E', testimonial: 'Very challenging but rewarding.' },
      { student: 'Student F', testimonial: 'Helped me understand statistics better.' },
    ],
    professors: [
      { name: 'Professor E', rating: 4.7 },
      { name: 'Professor F', rating: 4.3 },
    ],
  },
  {
    id: 9,
    title: 'Cosc 235',
    description: 'Introduction to computer science 2',
    image: 'https://media.istockphoto.com/id/1461146736/photo/close-up-of-laptop-computer-on-desk-with-glowing-globe-hologram-on-blurry-background-internet.jpg?s=2048x2048&w=is&k=20&c=Pbq3Q_mkZentJy4M1kzdhBONste4CfSXcqI-mqIhw5g=',
    videoUrl: 'https://www.youtube.com/embed/example4',
    testimonials: [
      { student: 'Student G', testimonial: 'Great introduction to advanced topics.' },
      { student: 'Student H', testimonial: 'Loved the hands-on projects.' },
    ],
    professors: [
      { name: 'Professor G', rating: 4.6 },
      { name: 'Professor H', rating: 4.1 },
    ],
  },
  {
    id: 10,
    title: 'Physics 320',
    description: 'The theory of computational physics in our world today',
    image: 'https://media.istockphoto.com/id/1866121335/photo/physics-and-mathematics.jpg?s=2048x2048&w=is&k=20&c=0e6C6C7zlAoYIBk5Pg6Nxa8ibY8aN0x5ZIMIJN4g0OU=',
    videoUrl: 'https://www.youtube.com/embed/example5',
    testimonials: [
      { student: 'Student I', testimonial: 'Fascinating insights into physics.' },
      { student: 'Student J', testimonial: 'Highly recommend for physics enthusiasts.' },
    ],
    professors: [
      { name: 'Professor I', rating: 4.8 },
      { name: 'Professor J', rating: 4.4 },
    ],
  },
  {
    id: 11,
    title: 'Math 265',
    description: 'Calculus 2 - Introduction to Integration',
    image: 'https://media.istockphoto.com/id/696935130/photo/complex-math-formulas-on-whiteboard-mathematics-and-science-with-economics.jpg?s=2048x2048&w=is&k=20&c=pu5FyP-VM0Y8Hb3qNQWPRSyEZgTx_RV8CHBo8OmwSjY=',
    videoUrl: 'https://www.youtube.com/embed/example6',
    testimonials: [
      { student: 'Student K', testimonial: 'A tough but essential course.' },
      { student: 'Student L', testimonial: 'Helped me master integration.' },
    ],
    professors: [
      { name: 'Professor K', rating: 4.9 },
      { name: 'Professor L', rating: 4.5 },
    ],
  },
  {
    id: 12,
    title: 'History 101',
    description: 'World History from the Renaissance to Modern Times',
    image: '' ,
    videoUrl: 'https://www.youtube.com/embed/example6',
    testimonials: [
      { student: 'Student K', testimonial: 'A tough but essential course.' },
      { student: 'Student L', testimonial: 'Helped me master integration.' },
    ],
    professors: [
      { name: 'Professor K', rating: 4.9 },
      { name: 'Professor L', rating: 4.5 },
    ],
  },
  // Add more courses as needed
];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 12 }}>
        <TextField
          label="Search Courses"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
            input: {
              color: theme.palette.mode === 'dark' ? '#fff' : '#000',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
              },
              '&:hover fieldset': {
                borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
              },
            },
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {filteredCourses.map((course) => (
              <Grid item key={course.id} xs={2} sm={4} md={4}>
                <Item>
                  <CourseCard
                    course={course}
                    videoUrl={course.videoUrl}
                    testimonials={course.testimonials}
                    professors={course.professors}
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}