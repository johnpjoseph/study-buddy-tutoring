import React, { useState, useEffect } from "react";
import { supabase } from "./config/supabase";
import StudentDashboard from "./components/StudentDashboard";
import LessonView from "./components/LessonView";
import { BookOpen, Users, Award } from "lucide-react";

function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("grade");

    if (!error) setStudents(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Study Buddy</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="h-6 w-6 text-yellow-500" />
              <span className="text-sm text-gray-600">Keep Learning!</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentView === "dashboard" && (
          <StudentDashboard
            students={students}
            onSelectStudent={setSelectedStudent}
            onStartLesson={() => setCurrentView("lesson")}
          />
        )}

        {currentView === "lesson" && selectedStudent && (
          <LessonView
            student={selectedStudent}
            onBackToDashboard={() => setCurrentView("dashboard")}
          />
        )}
      </main>
    </div>
  );
}

export default App;
