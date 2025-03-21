
import React, { useState } from 'react';
import { 
  GraduationCap, 
  ChevronDown, 
  BookOpen, 
  LibraryBig,
  ScrollText 
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface SchoolLevel {
  id: string;
  name: string;
  classes: SchoolClass[];
}

interface SchoolClass {
  id: string;
  name: string;
  color: string;
  subjects: Subject[];
}

interface Subject {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const subjects = [
  { id: 'math', name: 'Mathématiques', icon: <ScrollText className="h-4 w-4" /> },
  { id: 'french', name: 'Français', icon: <BookOpen className="h-4 w-4" /> },
  { id: 'history', name: 'Histoire-Géo', icon: <LibraryBig className="h-4 w-4" /> },
  { id: 'science', name: 'Sciences', icon: <BookOpen className="h-4 w-4" /> }
];

const schoolLevels: SchoolLevel[] = [
  {
    id: 'college',
    name: 'Collège',
    classes: [
      { 
        id: '6e', 
        name: '6ème', 
        color: 'from-indigo-500 to-blue-500',
        subjects: subjects 
      },
      { 
        id: '5e', 
        name: '5ème', 
        color: 'from-cyan-500 to-blue-500',
        subjects: subjects 
      },
      { 
        id: '4e', 
        name: '4ème', 
        color: 'from-teal-500 to-green-500',
        subjects: subjects 
      },
      { 
        id: '3e', 
        name: '3ème', 
        color: 'from-blue-500 to-indigo-600',
        subjects: subjects 
      }
    ]
  },
  {
    id: 'lycee',
    name: 'Lycée',
    classes: [
      { 
        id: '2nd', 
        name: 'Seconde', 
        color: 'from-purple-500 to-pink-500',
        subjects: subjects 
      },
      { 
        id: '1st', 
        name: 'Première', 
        color: 'from-red-500 to-orange-500',
        subjects: subjects 
      },
      { 
        id: 'term', 
        name: 'Terminale', 
        color: 'from-amber-500 to-yellow-500',
        subjects: subjects 
      }
    ]
  }
];

interface SchoolLevelNavigationProps {
  onLevelChange: (level: string) => void;
  onClassChange: (classId: string) => void;
  onSubjectChange: (subject: string) => void;
  activeLevel: string;
  activeClass: string;
  activeSubject: string;
}

const SchoolLevelNavigation: React.FC<SchoolLevelNavigationProps> = ({ 
  onLevelChange,
  onClassChange,
  onSubjectChange,
  activeLevel,
  activeClass,
  activeSubject
}) => {
  // Ajouter un effet visuel lorsqu'une classe est sélectionnée
  const getCurrentClassColor = () => {
    const level = schoolLevels.find(level => level.id === activeLevel);
    if (level) {
      const schoolClass = level.classes.find(c => c.id === activeClass);
      if (schoolClass) {
        return schoolClass.color;
      }
    }
    return 'from-cyan-500 to-blue-600'; // Couleur par défaut
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-0 shadow-md rounded-2xl bg-white">
        <div className="p-4 bg-gradient-radial from-cyan-500 to-blue-600">
          <h2 className="text-xl font-bold text-white flex items-center">
            <GraduationCap className="h-5 w-5 mr-2" />
            Niveaux & Matières
          </h2>
        </div>

        <div className="p-4">
          <Accordion type="single" collapsible className="w-full" defaultValue={activeLevel}>
            {schoolLevels.map((level) => (
              <AccordionItem key={level.id} value={level.id} className="border-b border-blue-100">
                <AccordionTrigger 
                  className="py-3 text-lg font-medium text-gray-800 hover:text-cyan-700 hover:no-underline"
                  onClick={() => onLevelChange(level.id)}
                >
                  <span className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-cyan-600" />
                    {level.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-3">
                    {level.classes.map((schoolClass) => (
                      <div key={schoolClass.id} className="rounded-lg overflow-hidden">
                        <button
                          onClick={() => onClassChange(schoolClass.id)}
                          className={`w-full text-left p-3 rounded-lg transition-all ${
                            activeClass === schoolClass.id
                              ? `bg-gradient-to-r ${schoolClass.color} text-white shadow-md`
                              : 'bg-blue-50 text-gray-700 hover:bg-blue-100'
                          }`}
                        >
                          <div className="font-medium">{schoolClass.name}</div>
                        </button>
                        
                        {activeClass === schoolClass.id && (
                          <div className="mt-2 pl-3 border-l-2 border-blue-300 ml-2 animate-fade-in">
                            <div className="text-sm font-medium text-gray-500 mb-2 mt-2">Matières:</div>
                            <div className="space-y-1">
                              {schoolClass.subjects.map((subject) => (
                                <button
                                  key={subject.id}
                                  onClick={() => onSubjectChange(subject.id)}
                                  className={`flex items-center w-full text-left p-2 rounded-md text-sm transition-all ${
                                    activeSubject === subject.id
                                      ? 'bg-cyan-100 text-cyan-800 font-medium'
                                      : 'hover:bg-gray-100 text-gray-700'
                                  }`}
                                >
                                  <span className="mr-2">{subject.icon}</span>
                                  {subject.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Card>
    </div>
  );
};

export default SchoolLevelNavigation;
