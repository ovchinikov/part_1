const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

/* const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[3].exercises}
    </p>
  );
}; */

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts.reduce((acc, curr) => {
        return acc + curr.exercises;
      }, 0)}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Debugging React Apps",
        exercises: 10,
        id: 4,
      },
      {
        name: "redux",
        exercises: 5,
        id: 5,
      },
      {
        name: "zustand",
        exercises: 3,
        id: 6,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
    </>
  );
};

export default App;
