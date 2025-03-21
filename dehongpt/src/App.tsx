
import Index from "@/pages/Index";
import Cours from "@/pages/Cours";
import CourseDetail from "@/pages/CourseDetail";
import SQLTranslator from "@/pages/SQLTranslator";
import TutorPage from "@/pages/TutorPage";
import CourseContentPage from "@/pages/CourseContentPage";
import Exercices from "@/pages/Exercices";
import ExerciseSeriesList from "@/pages/ExerciseSeriesList";
import ExerciceDetail from "@/pages/ExerciceDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/cours/:courseId" element={<CourseDetail />} />
          <Route path="/cours/contenu/:courseId" element={<CourseContentPage />} />
          <Route path="/sql-translator" element={<SQLTranslator />} />
          <Route path="/tutor" element={<TutorPage />} />
          <Route path="/exercices" element={<Exercices />} />
          <Route path="/exercices/:exerciseId" element={<ExerciseSeriesList />} />
          <Route path="/exercices/:exerciseId/series/:seriesId" element={<ExerciceDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
