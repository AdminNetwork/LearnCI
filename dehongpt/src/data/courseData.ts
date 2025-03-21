
type LessonContentType = {
  type: 'video' | 'text' | 'exercise';
  title: string;
  content: string;
  duration: string;
  completed: boolean;
};

export type CourseType = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  lessons: {
    title: string;
    contents: LessonContentType[];
  }[];
};

export const coursesData: CourseType[] = [
  {
    id: "equations-second-degre",
    title: "Équations du Second Degré",
    description: "Apprenez à résoudre des équations du second degré et comprendre leurs applications",
    image: "/lovable-uploads/cdf308ca-465d-4a30-87fb-6140b1fe2272.png",
    category: "Mathématiques",
    level: "Seconde / Première",
    duration: "2h30",
    lessons: [
      {
        title: "Introduction aux équations du second degré",
        contents: [
          {
            type: "text",
            title: "Définition et forme générale",
            content: `# Les Équations du Second Degré

## I. Définition

Une équation du second degré est une équation de la forme :
ax² + bx + c = 0

où :
- a, b, c sont des coefficients réels avec a ≠ 0
- x est l'inconnue.

Cette forme ax² + bx + c = 0 est appelée la **forme générale** d'une équation du second degré.

### Exemples d'équations du second degré:
- 3x² - 2x + 1 = 0
- x² - 4 = 0
- 2x² + x = 0`,
            duration: "5 min",
            completed: false
          },
          {
            type: "video",
            title: "Reconnaître une équation du second degré",
            content: "Dans cette vidéo, vous apprendrez à identifier une équation du second degré parmi différentes équations. Nous verrons comment repérer le terme en x² et comment vérifier que le coefficient a est non nul. Nous étudierons également comment mettre une équation sous sa forme générale.",
            duration: "8 min",
            completed: false
          },
          {
            type: "exercise",
            title: "Identifier les équations du second degré",
            content: "Parmi les équations suivantes, identifiez celles qui sont du second degré. Pour chaque équation du second degré, donnez les valeurs des coefficients a, b et c.",
            duration: "10 min",
            completed: false
          }
        ]
      },
      {
        title: "Le discriminant",
        contents: [
          {
            type: "text",
            title: "Calcul et interprétation du discriminant",
            content: `## II. Résolution d'une Équation du Second Degré

### 1. Calcul du discriminant

Le discriminant, noté Δ (delta), est défini par la formule :
Δ = b² - 4ac

L'étude du discriminant permet de déterminer le nombre de solutions de l'équation.

### 2. Étude des cas en fonction de Δ

- Si Δ > 0 : L'équation admet deux solutions réelles distinctes :
  x₁ = (-b - √Δ) / 2a
  x₂ = (-b + √Δ) / 2a

- Si Δ = 0 : L'équation admet une solution réelle unique :
  x = -b / 2a

- Si Δ < 0 : L'équation n'a pas de solution réelle, mais possède deux solutions complexes :
  x₁ = (-b - i√(-Δ)) / 2a
  x₂ = (-b + i√(-Δ)) / 2a

où i est l'unité imaginaire avec i² = -1.`,
            duration: "7 min",
            completed: false
          },
          {
            type: "video",
            title: "Comment calculer le discriminant",
            content: "Cette vidéo explique comment calculer le discriminant d'une équation du second degré et interpréter sa valeur. Nous verrons des exemples concrets pour comprendre l'importance du discriminant dans la résolution des équations du second degré.",
            duration: "10 min",
            completed: false
          },
          {
            type: "exercise",
            title: "Calculer des discriminants",
            content: "Calculez le discriminant de chacune des équations suivantes et déterminez le nombre de solutions réelles :\n1. x² - 5x + 6 = 0\n2. 2x² + 4x + 2 = 0\n3. 3x² - 2x + 1 = 0",
            duration: "12 min",
            completed: false
          }
        ]
      },
      {
        title: "Résolution et applications",
        contents: [
          {
            type: "text",
            title: "Formes factorisée et canonique",
            content: `## III. Factorisation et Forme Canonique

L'équation du second degré peut aussi s'écrire sous forme factorisée si Δ ≥ 0 :
a(x - x₁)(x - x₂) = 0

Si Δ = 0, la factorisation devient :
a(x - x₀)² = 0 (racine double)

Une autre forme importante est la forme canonique :
a(x - α)² + β = 0

avec :
α = -b / 2a
β = -Δ / 4a

### Avantages des différentes formes:
- Forme générale: pratique pour calculer le discriminant
- Forme factorisée: permet de lire directement les solutions
- Forme canonique: utile pour étudier les variations de la fonction associée`,
            duration: "8 min",
            completed: false
          },
          {
            type: "video",
            title: "Applications concrètes",
            content: "Dans cette vidéo, nous explorons des problèmes concrets qui peuvent être résolus à l'aide d'équations du second degré. Nous verrons des exemples de problèmes de géométrie, de physique et d'économie qui utilisent des équations du second degré.",
            duration: "15 min",
            completed: false
          },
          {
            type: "exercise",
            title: "Résoudre des équations du second degré",
            content: "Résolvez les équations suivantes en utilisant la méthode du discriminant :\n1. x² - 6x + 8 = 0\n2. 2x² - 5x + 2 = 0\n3. 3x² + 2x + 1 = 0\n\nIndication: Calculez d'abord le discriminant, puis utilisez les formules appropriées selon le signe de Δ.",
            duration: "15 min",
            completed: false
          }
        ]
      }
    ]
  }
];

export const getCoursById = (id: string): CourseType | undefined => {
  return coursesData.find(course => course.id === id);
};
