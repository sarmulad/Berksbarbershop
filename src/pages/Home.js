import React from "react";
import { Courses, Gallery, Hero, Tuition, Welcome } from "components/home";
import { Wrapper } from "components/navigation";

const Home = () => {
  return (
    <Wrapper showTopNav={false}>
      <Hero />
      <Welcome />
      <Tuition />
      <Gallery />
      <Courses />
    </Wrapper>
  );
};

export default Home;
