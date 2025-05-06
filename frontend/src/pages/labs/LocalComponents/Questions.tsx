import hintbulb from "../../../assets/images/hint.png";
import solutionIcon from "../../../assets/images/solution.png";
import Hint from "./Hint";
import Solution from "./Solution";
import {
  CheckCircleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useState } from "react";

const questions = [
  "What is the main purpose of React's virtual DOM?",
  "Explain the difference between props and state in React.",
  "How does React handle component lifecycle events?",
  "What are React hooks and why are they useful?",
  "Explain the concept of 'lifting state up' in React.",
  "What is the main purpose of React's virtual DOM?",
];

const AttemptLab = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [attempts, setAttempts] = useState(Array(questions.length).fill(3));
  const [xpStatus, setXpStatus] = useState(
    Array(questions.length).fill({ xp: 90, status: "default" })
  );
  const [hintsSeen, setHintsSeen] = useState(
    Array(questions.length).fill(false)
  );
  const [solutionsSeen, setSolutionsSeen] = useState(
    Array(questions.length).fill(false)
  );

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (index: number) => {
    const newAttempts = [...attempts];
    newAttempts[index] -= 1;
    setAttempts(newAttempts);

    const newXpStatus = [...xpStatus];
    const isCorrect = answers[index].length > 10;
    newXpStatus[index] = {
      xp: 90,
      status: isCorrect ? "correct" : "wrong",
    };
    setXpStatus(newXpStatus);
  };

  const handleHintSeen = (index: number) => {
    const newHintsSeen = [...hintsSeen];
    newHintsSeen[index] = true;
    setHintsSeen(newHintsSeen);
  };

  const handleSolutionSeen = (index: number) => {
    const newSolutionsSeen = [...solutionsSeen];
    newSolutionsSeen[index] = true;
    setSolutionsSeen(newSolutionsSeen);

    const newXpStatus = [...xpStatus];
    newXpStatus[index] = {
      xp: 0,
      status: "solution",
    };
    setXpStatus(newXpStatus);
  };

  const getStatusIcon = (index: number) => {
    if (attempts[index] < 3) {
      if (answers[index].length >= 10) {
        return <CheckCircleIcon className="w-4 h-4 text-green-500" />;
      }
      return <ShieldExclamationIcon className="w-4 h-4 text-red-500" />;
    }
    return null;
  };

  const getAttemptText = (index: number) => {
    if (attempts[index] === 0) {
      return "Incorrect (No attempts Remaining)";
    }
    if (attempts[index] === 3) {
      return `${attempts[index]} Attempts`;
    }
    if (answers[index].length < 10) {
      return `Retry (${attempts[index]} Attempts Remaining)`;
    }
    return `${attempts[index]} Attempts`;
  };

  const getCircleProgress = () => {
    const answeredCount = answers.filter(answer => answer.trim() !== "").length;
    const totalQuestions = questions.length;
    const percentage = (answeredCount / totalQuestions) * 100;

    if (percentage === 100) {
      return "border-primaryGreen-100";
    } else if (answeredCount > 0) {
      return `border-semantic-yellow`;
    }
    return "border-gray-300";
  };

  const getCircleStyle = () => {
    const answeredCount = answers.filter(answer => answer.trim() !== "").length;
    const totalQuestions = questions.length;
    const percentage = (answeredCount / totalQuestions) * 100;

    const dashArray = 2 * Math.PI * 12;
    const dashOffset = dashArray * ((100 - percentage) / 100);

    return {
      strokeDasharray: dashArray,
      strokeDashoffset: dashOffset,
    };
  };

  return (
    <div className="bg-white p-6 lg:rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between">
        <div className="flex mb-6">
          <h2 className="text-lg font-semibold">
            {questions.length} Questions
          </h2>
        </div>
         <div className="relative h-8 w-8 rounded-full overflow-hidden animate-pulse">
          <svg
            className="absolute inset-0"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <circle
              cx="12"
              cy="12"
              r="12"
              fill="none"
              className="stroke-gray-300"
              strokeWidth="8"
              strokeDasharray="6.27"
              strokeDashoffset="5.89"
            />
            <circle
              cx="12"
              cy="12"
              r="12"
              fill="none"
              className={`${
                getCircleProgress() === "border-primaryGreen-100"
                  ? "stroke-primaryGreen-100"
                  : "stroke-semantic-yellow"
              }`}
              strokeWidth="8"
              style={getCircleStyle()}
            />
          </svg>
        </div>
      </div>
      <Accordion type="single" collapsible>
        {questions.map((question, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="border-b border-gray-200 last:border-b-0"
          >
            <AccordionTrigger className="text-left w-full py-4 px-2 rounded-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-dark-100 font-semibold w-6 bg-gray-100 rounded-lg px-1.5 text-sm">
                      {index + 1}.
                    </span>
                  </div>
                  <span className="text-dark-100 font-semibold text-sm">
                    {question}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(index)}
                    {solutionsSeen[index] && (
                      <img
                        src={solutionIcon}
                        alt="solution"
                        className="w-4 h-4"
                      />
                    )}
                    {hintsSeen[index] && (
                      <img src={hintbulb} alt="hint" className="w-5 h-5" />
                    )}
                  </div>
                  <p className="text-dark-70 text-sm">
                    {xpStatus[index].status === "default" ? (
                      `${xpStatus[index].xp}XP`
                    ) : (
                      <span
                        className={`${
                          xpStatus[index].status === "correct"
                            ? "text-green-500"
                            : xpStatus[index].status === "wrong"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {xpStatus[index].status === "correct" ? "+" : "-"}
                        {xpStatus[index].xp}XP
                      </span>
                    )}
                  </p>
                  <span className="text-xs text-gray-500 mt-1">
                    {getAttemptText(index)}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-md mt-2 mb-4 mx-2">
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Type your answer here..."
                    className={`bg-gray-100/10 py-2 px-1 ${
                      attempts[index] === 0 || xpStatus[index].status === "correct" 
                        ? 'opacity-50 cursor-not-allowed' 
                        : ''
                    }`}
                    value={answers[index]}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    disabled={attempts[index] === 0 || xpStatus[index].status === "correct"}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Hint onHintSeen={() => handleHintSeen(index)} />
                    <Solution
                      onSolutionSeen={() => handleSolutionSeen(index)}
                    />
                  </div>
                  <div className="flex items-end gap-2">
                    <button
                      className={`${
                        answers[index].trim() && attempts[index] > 0 && xpStatus[index].status !== "correct"
                          ? "bg-primaryOrange-100 hover:bg-primary-600 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      } px-5 py-2 rounded-md text-sm font-medium`}
                      disabled={!answers[index].trim() || attempts[index] === 0 || xpStatus[index].status === "correct"}
                      onClick={() => handleSubmit(index)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AttemptLab;
