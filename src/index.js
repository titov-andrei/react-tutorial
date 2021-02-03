import React from "react";
import ReactDOM from "react-dom";
// import Lesson from "./02_components/Lesson.jsx";
// import Lesson from "./03_state/Lesson.jsx";
// import Lesson from "./04_props/Lesson.jsx";
import { Lesson, Counter } from "./05_props/Lesson.jsx";

ReactDOM.render(<Lesson><Counter /></Lesson>, document.getElementById("root"));
