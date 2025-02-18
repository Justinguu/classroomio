import { QuestionTypes } from '../utils';

import type { ExerciseTemplate } from '$lib/utils/types';

const template: ExerciseTemplate = {
  title: 'React useMemo Hook Quiz',
  description: 'Test your knowledge about the React useMemo hook.',
  questionnaire: {
    questions: [
      {
        title: 'What is the primary purpose of the useMemo hook in React?',
        name: 'q1',
        points: 1,
        order: 0,
        question_type: QuestionTypes[0], // RADIO
        options: [
          { label: 'Managing component state', is_correct: false },
          { label: 'Optimizing performance by memoizing values', is_correct: true },
          { label: 'Creating functional components', is_correct: false },
        ],
      },
      {
        title: 'How do you import the useMemo hook in a React component?',
        name: 'q2',
        points: 1,
        order: 1,
        question_type: QuestionTypes[0], // RADIO
        options: [
          { label: 'import { useMemo } from "react";', is_correct: true },
          { label: 'import React, { useMemo } from "react";', is_correct: false },
          { label: 'import useMemo from "react";', is_correct: false },
        ],
      },
      {
        title: 'What is memoization in the context of the useMemo hook?',
        name: 'q3',
        points: 1,
        order: 2,
        question_type: QuestionTypes[0], // RADIO
        options: [
          { label: 'It is a technique to optimize component rendering', is_correct: false },
          { label: 'It is a process of storing and reusing the result of a function call', is_correct: true },
          { label: 'It is a way to manage component state', is_correct: false },
        ],
      },
      {
        title: 'When should you use the useMemo hook?',
        name: 'q4',
        points: 1,
        order: 3,
        question_type: QuestionTypes[0], // RADIO
        options: [
          { label: 'Only when creating class components', is_correct: false },
          { label: 'When you need to memoize a value to prevent unnecessary re-computation', is_correct: true },
          { label: 'When you want to manage component state', is_correct: false },
        ],
      },
      {
        title: 'What is the second argument passed to the useMemo function, and why is it important?',
        name: 'q5',
        points: 1,
        order: 4,
        question_type: QuestionTypes[0], // RADIO
        options: [
          { label: 'An array of dependencies; it specifies when the memoized value should recompute', is_correct: true },
          { label: 'A callback function; it runs after the memoized value is computed', is_correct: false },
          { label: 'A configuration object; it determines the memoization strategy', is_correct: false },
        ],
      },
      {
        title: 'In which scenarios can the useMemo hook help improve performance?',
        name: 'q6',
        points: 1,
        order: 5,
        question_type: QuestionTypes[1], // CHECKBOX
        options: [
          { label: 'Optimizing expensive calculations and computations', is_correct: true },
          { label: 'Reducing the number of re-renders in React components', is_correct: true },
          { label: 'Enhancing the speed of network requests', is_correct: false },
          { label: 'Memoizing functions passed as props to child components', is_correct: false },
        ],
      },
      {
        title: 'What is the primary difference between the useMemo and useCallback hooks?',
        name: 'q7',
        points: 1,
        order: 6,
        question_type: QuestionTypes[0], // RADIO
        options: [
          { label: 'useMemo memoizes values, while useCallback memoizes functions', is_correct: true },
          { label: 'useMemo is used for creating reusable components, while useCallback is for state management', is_correct: false },
          { label: 'There is no difference between them; they are interchangeable', is_correct: false },
        ],
      },
      {
        title: 'When should you avoid using the useMemo hook?',
        name: 'q8',
        points: 1,
        order: 7,
        question_type: QuestionTypes[1], // CHECKBOX
        options: [
          { label: 'When you want to re-render components frequently', is_correct: true },
          { label: 'When you have values with no dependencies', is_correct: true },
          { label: 'When you need to optimize the rendering of large lists', is_correct: true },
          { label: 'When you are working on a small-scale project', is_correct: false },
        ],
      },
      {
        title: 'What is the purpose of memoization in React?',
        name: 'q9',
        points: 1,
        order: 8,
        question_type: QuestionTypes[0], // RADIO
        options: [
          { label: 'To cache and reuse the results of expensive calculations', is_correct: true },
          { label: 'To eliminate the need for state management in components', is_correct: false },
          { label: 'To optimize performance by preventing unnecessary re-renders', is_correct: false },
        ],
      },
      {
        title: 'Which React hook can be used to memoize a value and prevent re-computation?',
        name: 'q10',
        points: 1,
        order: 9,
        question_type: QuestionTypes[0], // RADIO
        options: [
          { label: 'useMemo', is_correct: true },
          { label: 'useEffect', is_correct: false },
          { label: 'useState', is_correct: false },
        ],
      },
    ],
  },
};

export default template;
