import React from 'react';
import Search from '../Search/Search';
import Colleges from '../Colleges/Colleges';
import StudentGallery from '../StudentGallery/StudentGallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';
import ReviewsFeedback from '../ReviewsFeedback/ReviewsFeedback';
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <>
      <Helmet>
        <title> College || Home</title>
      </Helmet>

      <div>
        <Search></Search>
        <Colleges></Colleges>
        <StudentGallery></StudentGallery>
        <ResearchPaper></ResearchPaper>
        <ReviewsFeedback></ReviewsFeedback>
      </div>
    </>
  );
};

export default Home;