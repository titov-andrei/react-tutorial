import React from "react";

const ValidationMsg = ({ val }) => {
  if (val >= 10) {
    return <h2>Crate than 10</h2>;
  } else {
    return (
      <h3>
        Less than <em>10</em>
      </h3>
    );
  }
};

const App = () => {
  return <ValidationMsg val={8} />;
};

export default App;
