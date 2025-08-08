import React from "react";
import { User, BookOpen, Trophy, ChevronRight } from "lucide-react";

const StudentDashboard = ({ students, onSelectStudent, onStartLesson }) => {
  const handleStudentSelect = (student) => {
    onSelectStudent(student);
    onStartLesson();
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your Study Buddy!
        </h2>
        <p className="text-xl text-gray-600">
          Select your grade level to start learning
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {students.map((student) => (
          <div
            key={student.id}
            onClick={() => handleStudentSelect(student)}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-blue-500"
          >
            <div className="p-8 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Grade {student.grade}
              </h3>

              <p className="text-gray-600 mb-6">
                {student.grade === 4
                  ? "Elementary Math Adventures"
                  : "Advanced Math Challenges"}
              </p>

              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>5 Topics</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-1" />
                  <span>0/5 Complete</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center mx-auto">
                Start Learning
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
