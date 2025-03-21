
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, BookOpen, CheckCircle, PlayCircle, Clock, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LessonContent from '@/components/LessonContent';
import { toast } from '@/components/ui/use-toast';

const coursesData = {
  'equations-second-degre': {
    id: 'equations-second-degre',
    title: 'Équations du second degré',
    level: 'Première',
    duration: '20 min',
    description: 'Apprendre à résoudre les équations du second degré en utilisant la formule quadratique et d\'autres méthodes.',
    progress: 30,
    chapters: [
      {
        id: 'chapitre-1',
        title: 'Introduction aux équations du second degré',
        duration: '5 min',
        completed: true,
        content: [
          { 
            type: 'video', 
            title: 'Qu\'est-ce qu\'une équation du second degré?', 
            duration: '2 min', 
            completed: true,
            content: 'Dans cette vidéo, nous explorons ce qu\'est une équation du second degré. Une équation du second degré est une équation polynomiale de degré 2, c\'est-à-dire qu\'elle contient un terme en x² mais pas de terme de degré supérieur. Ces équations sont fondamentales en algèbre et trouvent de nombreuses applications en physique, en ingénierie et dans d\'autres domaines scientifiques.'
          },
          { 
            type: 'text', 
            title: 'Forme standard ax²+bx+c=0', 
            duration: '1 min', 
            completed: true,
            content: 'La forme standard d\'une équation du second degré est ax² + bx + c = 0, où a, b et c sont des coefficients réels et a ≠ 0. Le coefficient a est celui du terme quadratique (x²), b est le coefficient du terme linéaire (x), et c est le terme constant. Cette forme nous permet d\'appliquer diverses méthodes de résolution comme la factorisation, la complétion du carré, ou la formule quadratique.'
          },
          { 
            type: 'exercise', 
            title: 'Identifier les équations du second degré', 
            duration: '2 min', 
            completed: true,
            content: 'Parmi les équations suivantes, identifiez celles qui sont du second degré et donnez les valeurs des coefficients a, b et c :\n1) 3x² - 2x + 1 = 0\n2) x³ + 2x² - 5 = 0\n3) 4x - 7 = 0\n4) x² = 9\n5) 2x² + x = 3'
          }
        ]
      },
      {
        id: 'chapitre-2',
        title: 'La formule quadratique',
        duration: '8 min',
        completed: false,
        content: [
          { 
            type: 'video', 
            title: 'Dérivation de la formule quadratique', 
            duration: '3 min', 
            completed: true,
            content: 'Cette vidéo démontre comment on obtient la fameuse formule quadratique à partir de la technique de complétion du carré. La formule quadratique nous donne directement les solutions de l\'équation ax² + bx + c = 0, qui sont x = (-b ± √(b² - 4ac)) / 2a. Le discriminant Δ = b² - 4ac joue un rôle crucial dans la détermination du nombre et de la nature des solutions.'
          },
          { 
            type: 'text', 
            title: 'Application de la formule', 
            duration: '2 min', 
            completed: false,
            content: 'Pour appliquer la formule quadratique à une équation ax² + bx + c = 0, suivez ces étapes :\n1) Identifiez les coefficients a, b et c\n2) Calculez le discriminant Δ = b² - 4ac\n3) Si Δ > 0, l\'équation a deux solutions réelles distinctes\n4) Si Δ = 0, l\'équation a une solution réelle double\n5) Si Δ < 0, l\'équation n\'a pas de solution réelle (mais a deux solutions complexes conjuguées)\n6) Calculez les solutions avec la formule x = (-b ± √Δ) / 2a'
          },
          { 
            type: 'exercise', 
            title: 'Résolution d\'équations avec la formule', 
            duration: '3 min', 
            completed: false,
            content: 'Résolvez les équations suivantes en utilisant la formule quadratique :\n1) x² - 5x + 6 = 0\n2) 2x² + 4x + 1 = 0\n3) 3x² - 2x + 4 = 0\n4) x² - 6x + 9 = 0\n5) 4x² - 1 = 0'
          }
        ]
      },
      {
        id: 'chapitre-3',
        title: 'Factorisation des équations',
        duration: '7 min',
        completed: false,
        content: [
          { 
            type: 'video', 
            title: 'Méthode de factorisation', 
            duration: '3 min', 
            completed: false,
            content: 'Cette vidéo présente la méthode de factorisation pour résoudre les équations du second degré. Factoriser une équation consiste à l\'écrire sous la forme (x - r)(x - s) = 0, où r et s sont les racines de l\'équation. Cette méthode est particulièrement utile lorsque les racines sont des nombres entiers ou des fractions simples.'
          },
          { 
            type: 'text', 
            title: 'Cas particuliers', 
            duration: '2 min', 
            completed: false,
            content: 'Certains cas particuliers d\'équations du second degré peuvent être résolus plus facilement :\n1) Équations de la forme x² = k : les solutions sont x = ±√k\n2) Équations de la forme (x-a)² = b : les solutions sont x = a ± √b\n3) Équations à coefficients symétriques (ax² + bx + a = 0) : si x est une solution, alors 1/x est aussi une solution\n4) Équations qui se factorisent facilement, comme x² - (r+s)x + rs = 0 qui se factorise en (x-r)(x-s) = 0'
          },
          { 
            type: 'exercise', 
            title: 'Exercices de factorisation', 
            duration: '2 min', 
            completed: false,
            content: 'Résolvez les équations suivantes par factorisation :\n1) x² - x - 6 = 0\n2) 2x² - 7x + 3 = 0\n3) x² - 4 = 0\n4) 3x² = 12x\n5) x² + 2x + 1 = 0'
          }
        ]
      }
    ]
  },
  'trigonometrie-appliquee': {
    id: 'trigonometrie-appliquee',
    title: 'Trigonométrie appliquée',
    level: 'Terminale',
    duration: '25 min',
    description: 'Approfondissement des concepts de trigonométrie et leur application dans des problèmes concrets.',
    progress: 60,
    chapters: [
      {
        id: 'chapitre-1',
        title: 'Rappels sur les fonctions trigonométriques',
        duration: '6 min',
        completed: true,
        content: [
          { 
            type: 'video', 
            title: 'Les fonctions sinus, cosinus et tangente', 
            duration: '3 min', 
            completed: true,
            content: 'Cette vidéo rappelle les définitions et propriétés des fonctions trigonométriques fondamentales. Le sinus, cosinus et tangente sont définis sur le cercle trigonométrique de rayon 1. Pour un angle θ, sin(θ) est l\'ordonnée du point sur le cercle, cos(θ) est l\'abscisse, et tan(θ) = sin(θ)/cos(θ). Nous examinons leurs domaines de définition, leur périodicité et leurs propriétés fondamentales.'
          },
          { 
            type: 'text', 
            title: 'Propriétés fondamentales', 
            duration: '1 min', 
            completed: true,
            content: 'Propriétés essentielles :\n- sin²(θ) + cos²(θ) = 1\n- sin(a+b) = sin(a)cos(b) + cos(a)sin(b)\n- cos(a+b) = cos(a)cos(b) - sin(a)sin(b)\n- sin(-θ) = -sin(θ) (fonction impaire)\n- cos(-θ) = cos(θ) (fonction paire)\n- Périodicité : sin(θ+2π) = sin(θ), cos(θ+2π) = cos(θ)'
          },
          { 
            type: 'exercise', 
            title: 'Calculs de valeurs trigonométriques', 
            duration: '2 min', 
            completed: true,
            content: 'Calculez les valeurs suivantes :\n1) sin(π/4) et cos(π/4)\n2) sin(π/3) et cos(π/3)\n3) tan(π/6)\n4) sin(7π/6)\n5) cos(5π/3)'
          }
        ]
      },
      {
        id: 'chapitre-2',
        title: 'Équations trigonométriques',
        duration: '10 min',
        completed: true,
        content: [
          { 
            type: 'video', 
            title: 'Résolution d\'équations simples', 
            duration: '4 min', 
            completed: true,
            content: 'Cette vidéo présente les techniques de résolution des équations trigonométriques élémentaires. Nous verrons comment résoudre des équations de la forme sin(x) = a, cos(x) = b, ou tan(x) = c, ainsi que des équations plus complexes pouvant se ramener à ces formes simples par substitution ou factorisation.'
          },
          { 
            type: 'text', 
            title: 'Équations avec transformations', 
            duration: '3 min', 
            completed: true,
            content: 'Pour résoudre des équations trigonométriques avec transformations :\n1) Équation sin(ax+b) = c : on pose u = ax+b, on résout sin(u) = c, puis on revient à x\n2) Équations homogènes : si l\'équation est de la forme asin(x) + bcos(x) = 0, on peut diviser par cos(x) et poser t = tan(x)\n3) Utilisation des formules de linéarisation : transformer les produits et puissances de fonctions trigonométriques en sommes\n4) Méthode de l\'angle auxiliaire : asin(x) + bcos(x) = r·sin(x+φ) où r = √(a²+b²) et φ = arctan(b/a)'
          },
          { 
            type: 'exercise', 
            title: 'Exercices pratiques', 
            duration: '3 min', 
            completed: true,
            content: 'Résolvez les équations suivantes sur [0,2π] :\n1) 2sin(x) - 1 = 0\n2) cos(2x) = 1/2\n3) sin(x)cos(x) = 1/4\n4) 2sin²(x) - 1 = 0\n5) sin(x) + sin(3x) = 0'
          }
        ]
      },
      {
        id: 'chapitre-3',
        title: 'Applications physiques',
        duration: '9 min',
        completed: false,
        content: [
          { 
            type: 'video', 
            title: 'Mouvement harmonique simple', 
            duration: '3 min', 
            completed: false,
            content: 'Cette vidéo illustre comment la trigonométrie s\'applique au mouvement harmonique simple. L\'équation différentielle d\'un oscillateur harmonique a pour solution une fonction sinusoïdale. Nous explorons des exemples tels que le pendule simple, le système masse-ressort, et les circuits RLC, en mettant en évidence le rôle fondamental des fonctions trigonométriques dans la description de ces phénomènes périodiques.'
          },
          { 
            type: 'text', 
            title: 'Circuits électriques et ondes', 
            duration: '3 min', 
            completed: false,
            content: 'Applications de la trigonométrie dans les circuits et les ondes :\n1) Courant alternatif : i(t) = I₀sin(ωt + φ) où ω est la pulsation et φ le déphasage\n2) Impédance complexe : Z = R + jX où j est l\'unité imaginaire, R la résistance et X la réactance\n3) Ondes électromagnétiques : E(x,t) = E₀sin(kx - ωt) où k est le nombre d\'onde\n4) Interférences : superposition de deux ondes conduisant à des renforcements ou des atténuations selon le déphasage\n5) Résonance : amplification maximale quand la fréquence d\'excitation correspond à la fréquence propre du système'
          },
          { 
            type: 'exercise', 
            title: 'Problèmes d\'application', 
            duration: '3 min', 
            completed: false,
            content: 'Résolvez les problèmes suivants :\n1) Un pendule de longueur 1m oscille avec une amplitude de 5°. Quelle est la période de son mouvement?\n2) Un circuit RLC en série a une résistance R = 10Ω, une inductance L = 0.1H et une capacité C = 10⁻⁴F. Quelle est sa fréquence de résonance?\n3) Deux haut-parleurs émettent des ondes sonores de même fréquence 440Hz. Si les haut-parleurs sont séparés de 2m, déterminez les positions où l\'intensité sonore est maximale pour un auditeur situé à 10m des haut-parleurs.'
          }
        ]
      }
    ]
  },
  'primitives-integrales': {
    id: 'primitives-integrales',
    title: 'Primitives et intégrales',
    level: 'Terminale',
    duration: '30 min',
    description: 'Étude des primitives de fonctions et calcul d\'intégrales avec applications pratiques.',
    progress: 15,
    chapters: [
      {
        id: 'chapitre-1',
        title: 'Notion de primitive',
        duration: '7 min',
        completed: true,
        content: [
          { 
            type: 'video', 
            title: 'Définition et exemples simples', 
            duration: '3 min', 
            completed: true,
            content: 'Cette vidéo introduit le concept de primitive d\'une fonction. Une primitive F de f est une fonction telle que F\' = f. Par exemple, F(x) = x³/3 est une primitive de f(x) = x². Nous explorons plusieurs exemples et montrons comment vérifier si une fonction est bien la primitive d\'une autre en calculant sa dérivée.'
          },
          { 
            type: 'text', 
            title: 'Propriétés des primitives', 
            duration: '2 min', 
            completed: true,
            content: 'Propriétés fondamentales des primitives :\n1) Si F est une primitive de f, alors F + C (où C est une constante) est aussi une primitive de f\n2) L\'ensemble des primitives d\'une fonction f sur un intervalle I est de la forme F + C où F est une primitive particulière de f et C une constante réelle\n3) Primitive d\'une somme : la primitive de f + g est la somme des primitives de f et g\n4) Primitive d\'un produit par une constante : la primitive de k·f est k fois la primitive de f'
          },
          { 
            type: 'exercise', 
            title: 'Calcul de primitives élémentaires', 
            duration: '2 min', 
            completed: true,
            content: 'Déterminez les primitives des fonctions suivantes :\n1) f(x) = 2x + 3\n2) g(x) = x²\n3) h(x) = 1/x\n4) p(x) = e^x\n5) q(x) = sin(x)'
          }
        ]
      },
      {
        id: 'chapitre-2',
        title: 'Intégrale définie',
        duration: '12 min',
        completed: false,
        content: [
          { 
            type: 'video', 
            title: 'Interprétation géométrique', 
            duration: '4 min', 
            completed: false,
            content: 'Cette vidéo explique l\'interprétation géométrique de l\'intégrale définie comme l\'aire sous la courbe d\'une fonction. Pour une fonction f positive sur un intervalle [a,b], l\'intégrale ∫[a,b] f(x)dx représente l\'aire de la région délimitée par la courbe de f, l\'axe des abscisses, et les droites x=a et x=b. Nous illustrons ce concept avec plusieurs exemples visuels.'
          },
          { 
            type: 'text', 
            title: 'Théorème fondamental du calcul', 
            duration: '3 min', 
            completed: false,
            content: 'Le théorème fondamental du calcul établit le lien entre dérivation et intégration :\n1) Premier théorème : Si f est continue sur [a,b] et si F est une primitive de f, alors ∫[a,b] f(x)dx = F(b) - F(a)\n2) Second théorème : Si f est continue sur un intervalle I, alors la fonction g définie sur I par g(x) = ∫[a,x] f(t)dt est dérivable et g\'(x) = f(x)\nCes théorèmes montrent que l\'intégration et la dérivation sont des opérations inverses l\'une de l\'autre.'
          },
          { 
            type: 'exercise', 
            title: 'Calcul d\'aires', 
            duration: '5 min', 
            completed: false,
            content: 'Calculez l\'aire des régions suivantes :\n1) Région sous la courbe y = x² entre x = 0 et x = 2\n2) Région délimitée par la courbe y = sin(x), l\'axe des x, et les droites x = 0 et x = π\n3) Région entre les courbes y = x² et y = x entre x = 0 et x = 1\n4) Aire du disque de rayon R (indice : utilisez l\'intégrale en coordonnées polaires)\n5) Région sous la courbe y = e^(-x²) entre x = -1 et x = 1'
          }
        ]
      },
      {
        id: 'chapitre-3',
        title: 'Techniques d\'intégration',
        duration: '11 min',
        completed: false,
        content: [
          { 
            type: 'video', 
            title: 'Intégration par parties', 
            duration: '4 min', 
            completed: false,
            content: 'Cette vidéo présente la technique d\'intégration par parties, basée sur la formule ∫u(x)v\'(x)dx = u(x)v(x) - ∫u\'(x)v(x)dx. Cette méthode est particulièrement utile pour intégrer des produits de fonctions, comme x·sin(x) ou ln(x). Nous montrons plusieurs exemples d\'application et discutons des stratégies pour choisir judicieusement les fonctions u et v.'
          },
          { 
            type: 'text', 
            title: 'Changement de variable', 
            duration: '3 min', 
            completed: false,
            content: 'La technique du changement de variable permet de transformer une intégrale complexe en une intégrale plus simple :\n1) On pose u = φ(x), où φ est une fonction dérivable et bijective sur l\'intervalle considéré\n2) On a dx = du/φ\'(x) = du/φ\'(φ⁻¹(u))\n3) L\'intégrale devient ∫f(x)dx = ∫f(φ⁻¹(u))·[1/φ\'(φ⁻¹(u))]du\nCette méthode est particulièrement efficace pour les intégrales contenant des compositions de fonctions, comme ∫sin(x²)·x·dx où le changement u = x² est naturel.'
          },
          { 
            type: 'exercise', 
            title: 'Applications pratiques', 
            duration: '4 min', 
            completed: false,
            content: 'Calculez les intégrales suivantes :\n1) ∫x·e^x dx (par parties)\n2) ∫x·ln(x) dx (par parties)\n3) ∫sin²(x) dx (par linéarisation)\n4) ∫√(1-x²) dx (changement de variable trigonométrique)\n5) ∫1/(1+x²) dx (à relier à la fonction arctan)'
          }
        ]
      }
    ]
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData[courseId as keyof typeof coursesData];
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedContent, setSelectedContent] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<string>("chapters");
  
  // Sélectionner automatiquement le premier chapitre au chargement
  useEffect(() => {
    if (course && course.chapters.length > 0 && !selectedChapter) {
      const firstChapter = course.chapters[0];
      setSelectedChapter(firstChapter.id);
      
      // Optionnellement, sélectionner le premier contenu du chapitre
      if (firstChapter.content.length > 0) {
        setSelectedContent(firstChapter.content[0]);
        setActiveTab("lesson");
      }
    }
  }, [course]);
  
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Cours non trouvé</h1>
          <Link to="/cours">
            <Button variant="outline">Retour aux cours</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapter(chapterId);
    
    // Sélectionner automatiquement le premier contenu du chapitre
    const chapter = findChapterById(chapterId);
    if (chapter && chapter.content.length > 0) {
      setSelectedContent(chapter.content[0]);
      setActiveTab("lesson");
    } else {
      setSelectedContent(null);
    }
    
    toast({
      title: "Chapitre sélectionné",
      description: `Vous consultez maintenant : ${findChapterById(chapterId)?.title}`,
    });
  };

  const handleContentSelect = (content: any) => {
    setSelectedContent(content);
    setActiveTab("lesson");
    
    toast({
      title: "Leçon sélectionnée",
      description: `Vous consultez maintenant : ${content.title}`,
      className: "bg-cyan-50 border-cyan-200 text-cyan-800",
    });
  };

  const findChapterById = (id: string) => {
    return course.chapters.find(chapter => chapter.id === id);
  };
  
  const navigateContent = (direction: 'prev' | 'next') => {
    if (!selectedChapter || !selectedContent) return;
    
    const currentChapter = findChapterById(selectedChapter);
    if (!currentChapter) return;
    
    const currentIndex = currentChapter.content.findIndex(c => c.title === selectedContent.title);
    
    if (direction === 'next') {
      if (currentIndex < currentChapter.content.length - 1) {
        // Passer au contenu suivant dans le même chapitre
        setSelectedContent(currentChapter.content[currentIndex + 1]);
      } else {
        // Passer au chapitre suivant
        const chapterIndex = course.chapters.findIndex(c => c.id === selectedChapter);
        if (chapterIndex < course.chapters.length - 1) {
          const nextChapter = course.chapters[chapterIndex + 1];
          setSelectedChapter(nextChapter.id);
          if (nextChapter.content.length > 0) {
            setSelectedContent(nextChapter.content[0]);
          }
        }
      }
    } else {
      // Précédent
      if (currentIndex > 0) {
        // Passer au contenu précédent dans le même chapitre
        setSelectedContent(currentChapter.content[currentIndex - 1]);
      } else {
        // Passer au chapitre précédent
        const chapterIndex = course.chapters.findIndex(c => c.id === selectedChapter);
        if (chapterIndex > 0) {
          const prevChapter = course.chapters[chapterIndex - 1];
          setSelectedChapter(prevChapter.id);
          if (prevChapter.content.length > 0) {
            setSelectedContent(prevChapter.content[prevChapter.content.length - 1]);
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-cyan-500">CleverTutor</span>
                <span className="ml-2 text-xs px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded-full">Beta</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link to="/" className="text-base font-medium text-slate-900 hover:text-cyan-600">
                Accueil
              </Link>
              <Link to="/cours" className="text-base font-medium text-slate-900 hover:text-cyan-600">
                Cours
              </Link>
              <Link to="/exercices" className="text-base font-medium text-slate-900 hover:text-cyan-600">
                Exercices
              </Link>
              <Link to="/progres" className="text-base font-medium text-slate-900 hover:text-cyan-600">
                Progrès
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Course Header */}
      <div className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/cours" className="inline-flex items-center text-sm text-slate-600 hover:text-cyan-600">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Retour aux cours
            </Link>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  {course.level}
                </span>
                <div className="flex items-center text-slate-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-3">{course.title}</h1>
              <p className="text-slate-600 mb-4">{course.description}</p>
              <div className="flex items-center gap-2">
                <div className="text-sm text-slate-600">Progression: {course.progress}%</div>
                <Progress value={course.progress} className="w-64 h-2" />
              </div>
            </div>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              <PlayCircle className="mr-2 h-4 w-4" />
              Continuer
            </Button>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="chapters">Chapitres</TabsTrigger>
            <TabsTrigger value="lesson" disabled={!selectedContent}>Leçon en cours</TabsTrigger>
            <TabsTrigger value="resources">Ressources</TabsTrigger>
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chapters">
            <div className="space-y-6">
              {course.chapters.map((chapter, index) => (
                <Card 
                  key={chapter.id} 
                  className={`overflow-hidden border ${
                    selectedChapter === chapter.id ? 'border-cyan-500 shadow-md' : 'border-slate-200'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          chapter.completed ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {chapter.completed ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <span>{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{chapter.title}</h3>
                          <div className="flex items-center text-slate-500 text-sm mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            {chapter.duration}
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant={chapter.completed ? "secondary" : "default"}
                        onClick={() => handleChapterSelect(chapter.id)}
                      >
                        {selectedChapter === chapter.id ? 'En cours' : (chapter.completed ? 'Réviser' : 'Commencer')}
                      </Button>
                    </div>
                    
                    {selectedChapter === chapter.id && (
                      <div className="mt-6 border-t border-slate-200 pt-4">
                        <h4 className="font-semibold mb-3">Contenu du chapitre</h4>
                        <ul className="space-y-3">
                          {chapter.content.map((item, itemIndex) => (
                            <li key={itemIndex} 
                                className={`flex items-center justify-between p-3 rounded-md hover:bg-slate-100 cursor-pointer transition-colors
                                           ${selectedContent && selectedContent.title === item.title ? 'bg-cyan-50 border border-cyan-200' : 'bg-slate-50'}`}
                                onClick={() => handleContentSelect(item)}>
                              <div className="flex items-center gap-3">
                                {item.type === 'video' && <PlayCircle className="h-5 w-5 text-blue-500" />}
                                {item.type === 'text' && <BookOpen className="h-5 w-5 text-purple-500" />}
                                {item.type === 'exercise' && <BarChart3 className="h-5 w-5 text-amber-500" />}
                                <div>
                                  <div className="font-medium">{item.title}</div>
                                  <div className="text-xs text-slate-500">{item.duration}</div>
                                </div>
                              </div>
                              {item.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {!selectedChapter && (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="content">
                          <AccordionTrigger className="text-sm text-slate-600">
                            Contenu du chapitre
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-3 mt-2">
                              {chapter.content.map((item, itemIndex) => (
                                <li key={itemIndex} 
                                    className="flex items-center justify-between p-3 rounded-md bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors"
                                    onClick={() => handleContentSelect(item)}>
                                  <div className="flex items-center gap-3">
                                    {item.type === 'video' && <PlayCircle className="h-5 w-5 text-blue-500" />}
                                    {item.type === 'text' && <BookOpen className="h-5 w-5 text-purple-500" />}
                                    {item.type === 'exercise' && <BarChart3 className="h-5 w-5 text-amber-500" />}
                                    <div>
                                      <div className="font-medium">{item.title}</div>
                                      <div className="text-xs text-slate-500">{item.duration}</div>
                                    </div>
                                  </div>
                                  {item.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="lesson">
            {selectedContent ? (
              <div className="mb-6">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mb-4"
                  onClick={() => setActiveTab("chapters")}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Retour au chapitre
                </Button>
                
                {selectedChapter && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-medium text-slate-600">
                      {findChapterById(selectedChapter)?.title}
                    </span>
                    <span className="text-slate-400">›</span>
                    <span className="font-medium">{selectedContent.title}</span>
                  </div>
                )}
                
                <LessonContent content={selectedContent} />
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => navigateContent('prev')}
                  >
                    Précédent
                  </Button>
                  <Button
                    onClick={() => navigateContent('next')}
                  >
                    Suivant
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-4">Aucune leçon sélectionnée</h3>
                <p className="text-slate-600 mb-6">Veuillez sélectionner un chapitre et une leçon pour commencer à apprendre.</p>
                <Button onClick={() => setActiveTab("chapters")}>
                  Voir les chapitres
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="resources">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Ressources supplémentaires</h3>
                <p className="text-slate-600 mb-6">
                  Documents et liens complémentaires pour approfondir vos connaissances sur ce sujet.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center p-3 rounded-md bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                    <BookOpen className="h-5 w-5 text-purple-500 mr-3" />
                    <span>Fiche de synthèse du cours</span>
                  </li>
                  <li className="flex items-center p-3 rounded-md bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                    <BookOpen className="h-5 w-5 text-purple-500 mr-3" />
                    <span>Exercices supplémentaires corrigés</span>
                  </li>
                  <li className="flex items-center p-3 rounded-md bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                    <BookOpen className="h-5 w-5 text-purple-500 mr-3" />
                    <span>Bibliographie recommandée</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="discussion">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Discussion</h3>
                <p className="text-slate-600 mb-6">
                  Cette section sera bientôt disponible pour permettre des échanges entre apprenants.
                </p>
                <div className="p-4 bg-cyan-50 rounded-md border border-cyan-200 text-cyan-800">
                  <p>La fonctionnalité de discussion sera disponible dans une future mise à jour. Restez connectés !</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetail;
