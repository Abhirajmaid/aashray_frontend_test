import React from "react";
import { useParams } from "react-router-dom";

import { Featured } from "../components/common/page-componets";
import { Details } from "../components/singleProperty";

const SingleProperty = () => {
  const { id } = useParams();
  return (
    <div className="pt-16 md:px-[6%] px-[5%] ">
      Property {id}
      <Details />
      <Featured />
    </div>
  );
};

export default SingleProperty;
