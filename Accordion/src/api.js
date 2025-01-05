let data = [
  {
    id: 1,
    question: "What are React Hooks?",
    answer:
      "React Hooks are functions that let you use state and other React features without writing a class. They offer a simpler way to manage stateful logic in functional components.",
  },

  {
    id: 2,
    question: "Explain the purpose of JSX in React.",
    answer:
      "JSX is a syntax extension for JavaScript used with React to describe what the UI should look like. It allows developers to write HTML-like code directly within JavaScript, which is then transformed into standard JavaScript function calls by tools like Babel.",
  },

  {
    id: 3,
    question: "Differentiate between state and props in React.",
    answer:
      "State is managed within a component and can be updated using setState(), while props are read-only properties passed from a parent component and help components communicate.",
  },

  {
    id: 4,
    question: "What is the role of useEffect in React Hooks?",
    answer:
      "useEffect allows performing side effects in functional components, such as fetching data or subscribing to events.It runs after every render and can optionally clean up resources.",
  },
  {
    id: 5,
    question: "How does React handle forms?",
    answer:
      "React manages form elements using controlled components, where form data is handled by state and updated via onChange handlers. This approach ensures that the React state and the rendered output are always in sync.",
  },
];
