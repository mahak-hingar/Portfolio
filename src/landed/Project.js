import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Work from "../components/Work";
import Heroimg2 from "../components/Heroimg2";
const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Some of my most recent works." />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
