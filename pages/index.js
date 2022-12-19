import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";

const HomePage = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default HomePage;
