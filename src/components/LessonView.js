import React, { useState } from "react";
import { ArrowLeft, Play, CheckCircle, Star } from "lucide-react";

const LessonView = ({ student, onBackToDashboard }) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Sample lesson content for 4th grade multiplication
  const lessonSteps = [
    {
      type: "explanation",
      title: "What is Multiplication?",
      content:
        'Multiplication is like adding the same number many times! When we see 3 × 4, it means "add 3 four times" or 3 + 3 + 3 + 3 = 12',
      visual: "🍎🍎🍎 + 🍎🍎🍎 + 🍎🍎🍎 + 🍎🍎🍎 = 12 apples",
    },
    {
      type: "example",
      title: "Let's Try an Example",
      content:
        "If you have 2 bags with 5 candies each, how many candies do you have total?",
      solution: "2 × 5 = 10 candies",
      visual: "🍭🍭🍭🍭🍭  +  🍭🍭🍭🍭🍭",
    },
    {
      type: "practice",
      title: "Your Turn!",
      question: "What is 4 × 3?",
      options: [10, 12, 14, 16],
      correct: 1,
    },
  ];

  const currentStepData = lessonSteps[currentStep];

  const nextStep = () => {
    if (currentStep < lessonSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBackToDashboard}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </button>

        <div className="text-right">
          <h2 className="text-2xl font-bold text-gray-900">
            Grade {student.grade} - Multiplication Basics
          </h2>
          <p className="text-gray-600">
            Step {currentStep + 1} of {lessonSteps.length}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200 rounded-full h-3 mb-8">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
          style={{
            width: `${((currentStep + 1) / lessonSteps.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Lesson Content */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {currentStepData.title}
          </h3>

          {currentStepData.type === "explanation" && (
            <div className="space-y-6">
              <p className="text-xl text-gray-700">{currentStepData.content}</p>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-2xl font-mono">{currentStepData.visual}</p>
              </div>
            </div>
          )}

          {currentStepData.type === "example" && (
            <div className="space-y-6">
              <p className="text-xl text-gray-700">{currentStepData.content}</p>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-2xl font-mono mb-4">
                  {currentStepData.visual}
                </p>
                <p className="text-xl font-bold text-green-600">
                  {currentStepData.solution}
                </p>
              </div>
            </div>
          )}

          {currentStepData.type === "practice" && (
            <div className="space-y-6">
              <p className="text-2xl font-bold text-gray-800">
                {currentStepData.question}
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {currentStepData.options.map((option, index) => (
                  <button
                    key={index}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-4 px-6 rounded-xl transition-all duration-200 text-xl"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="bg-gray-300 hover:bg-gray-400 disabled:opacity-50 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all duration-200"
        >
          Previous
        </button>

        <button
          onClick={nextStep}
          disabled={currentStep === lessonSteps.length - 1}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 flex items-center"
        >
          {currentStep === lessonSteps.length - 1 ? "Complete!" : "Next"}
          {currentStep !== lessonSteps.length - 1 && (
            <Play className="h-4 w-4 ml-2" />
          )}
          {currentStep === lessonSteps.length - 1 && (
            <Star className="h-4 w-4 ml-2" />
          )}
        </button>
      </div>
    </div>
  );
};

export default LessonView;
