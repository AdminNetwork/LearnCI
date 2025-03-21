export const exercisesData = [
  {
    id: "equations-second-degre",
    title: "Équations et inéquations",
    description: "Testez vos compétences en résolution d'équations du second degré et d'inéquations.",
    difficulty: "moyen",
    difficultyColor: "yellow",
    color: "violet",
    subject: "Mathématiques",
    xp: 100,
    duration: 15,
    series: [
      {
        id: "equations-second-degre-serie1",
        title: "Résolution d'équations du second degré",
        description: "Apprenez à résoudre des équations de la forme ax² + bx + c = 0.",
        xp: 10,
        duration: 15,
        progress: 0,
        questions: [
          {
            id: "eq1",
            text: "Résolvez l'équation : x² - 5x + 6 = 0",
            options: [
              { id: "a", text: "x = 2 et x = 3" },
              { id: "b", text: "x = -2 et x = -3" },
              { id: "c", text: "x = 2 et x = -3" },
              { id: "d", text: "x = -2 et x = 3" }
            ],
            correctAnswer: "a",
            explanation: "Pour résoudre cette équation, nous cherchons deux nombres dont la somme est -5 (coefficient de x) et le produit est 6 (terme constant). Ces nombres sont 2 et 3, donc x = 2 ou x = 3."
          },
          {
            id: "eq2",
            text: "Quelle est la forme canonique de l'équation x² - 6x + 8 ?",
            options: [
              { id: "a", text: "(x - 3)² - 1" },
              { id: "b", text: "(x - 3)² - 9" },
              { id: "c", text: "(x - 3)² + 1" },
              { id: "d", text: "(x + 3)² - 1" }
            ],
            correctAnswer: "a",
            explanation: "Pour obtenir la forme canonique, on complète le carré : x² - 6x + 8 = (x - 3)² - 1."
          },
          {
            id: "eq3",
            text: "Quel est le discriminant de l'équation 2x² - 4x + 1 = 0 ?",
            options: [
              { id: "a", text: "8" },
              { id: "b", text: "16" },
              { id: "c", text: "4" },
              { id: "d", text: "0" }
            ],
            correctAnswer: "a",
            explanation: "Le discriminant est Δ = b² - 4ac = (-4)² - 4(2)(1) = 16 - 8 = 8."
          },
          {
            id: "eq4",
            text: "Résolvez l'équation : 4x² - 4x + 1 = 0",
            options: [
              { id: "a", text: "x = 0 ou x = 1" },
              { id: "b", text: "x = 1/2" },
              { id: "c", text: "x = 0 et x = 1/2" },
              { id: "d", text: "Pas de solution réelle" }
            ],
            correctAnswer: "b",
            explanation: "Cette équation peut s'écrire sous la forme (2x-1)² = 0, ce qui donne une racine double x = 1/2."
          },
          {
            id: "eq5",
            text: "Si a = 2, b = -3 et c = -2, quelle est la nature des racines de ax² + bx + c = 0 ?",
            options: [
              { id: "a", text: "Deux racines réelles distinctes" },
              { id: "b", text: "Deux racines réelles égales" },
              { id: "c", text: "Pas de racine réelle" },
              { id: "d", text: "Une seule racine réelle" }
            ],
            correctAnswer: "a",
            explanation: "Le discriminant est Δ = b² - 4ac = (-3)² - 4(2)(-2) = 9 + 16 = 25 > 0, donc l'équation a deux racines réelles distinctes."
          }
        ]
      },
      {
        id: "equations-second-degre-serie2",
        title: "Inéquations du second degré",
        description: "Résolvez des inéquations de la forme ax² + bx + c > 0 ou ax² + bx + c < 0.",
        xp: 10,
        duration: 12,
        progress: 0,
        questions: [
          {
            id: "ineq1",
            text: "Résolvez l'inéquation : x² - x - 6 > 0",
            options: [
              { id: "a", text: "x < -2 ou x > 3" },
              { id: "b", text: "-2 < x < 3" },
              { id: "c", text: "x < 3 ou x > -2" },
              { id: "d", text: "x > 2 ou x < -3" }
            ],
            correctAnswer: "a",
            explanation: "On factorise d'abord : x² - x - 6 = (x-3)(x+2). L'inéquation (x-3)(x+2) > 0 est vérifiée quand les deux facteurs sont de même signe. Donc x < -2 ou x > 3."
          },
          {
            id: "ineq2",
            text: "Résolvez l'inéquation : 2x² - 3x + 1 ≤ 0",
            options: [
              { id: "a", text: "x ≤ 0,5 ou x ≥ 1" },
              { id: "b", text: "0,5 ≤ x ≤ 1" },
              { id: "c", text: "x ≤ 0,5 et x ≥ 1" },
              { id: "d", text: "Pas de solution" }
            ],
            correctAnswer: "b",
            explanation: "Le discriminant est Δ = 9-8 = 1. Les racines sont (3±1)/4, soit 0,5 et 1. Le coefficient de x² est positif, donc la parabole est orientée vers le haut. L'inéquation est vérifiée entre les racines, soit 0,5 ≤ x ≤ 1."
          },
          {
            id: "ineq3",
            text: "Résolvez l'inéquation : -x² + 4x - 3 > 0",
            options: [
              { id: "a", text: "x < 1 ou x > 3" },
              { id: "b", text: "1 < x < 3" },
              { id: "c", text: "x > 3" },
              { id: "d", text: "Pas de solution" }
            ],
            correctAnswer: "b",
            explanation: "Le discriminant est Δ = 16-12 = 4. Les racines sont (4±2)/2, soit 1 et 3. Le coefficient de x² est négatif, donc la parabole est orientée vers le bas. L'inéquation est vérifiée entre les racines, soit 1 < x < 3."
          },
          {
            id: "ineq4",
            text: "Résolvez l'inéquation : x² + 6x + 9 ≥ 0",
            options: [
              { id: "a", text: "x ≥ 0" },
              { id: "b", text: "x ≤ -3" },
              { id: "c", text: "x ≥ -3 ou x ≤ -3" },
              { id: "d", text: "Pour tout x réel" }
            ],
            correctAnswer: "d",
            explanation: "x² + 6x + 9 = (x+3)² ≥ 0 pour tout x réel, car un carré est toujours positif ou nul."
          },
          {
            id: "ineq5",
            text: "Résolvez l'inéquation : (x-1)(x+2)(x-3) < 0",
            options: [
              { id: "a", text: "-2 < x < 1 ou x > 3" },
              { id: "b", text: "x < -2 ou 1 < x < 3" },
              { id: "c", text: "x < -2 ou x > 3" },
              { id: "d", text: "-2 < x < 3" }
            ],
            correctAnswer: "b",
            explanation: "Les racines sont -2, 1 et 3. Le produit est négatif quand il y a un nombre impair de facteurs négatifs. Donc x < -2 ou 1 < x < 3."
          }
        ]
      },
      {
        id: "equations-second-degre-serie3",
        title: "Pratique des équations",
        description: "Exercices pratiques sur les équations du second degré.",
        xp: 10,
        duration: 15,
        progress: 0,
        questions: [
          {
            id: "peq1",
            text: "Résolvez l'équation : 2x² - 8x + 6 = 0",
            options: [
              { id: "a", text: "x = 1 et x = 3" },
              { id: "b", text: "x = 2 et x = 3" },
              { id: "c", text: "x = 1 et x = 2" },
              { id: "d", text: "Pas de solution réelle" }
            ],
            correctAnswer: "b",
            explanation: "Pour résoudre cette équation, on utilise la formule quadratique."
          },
          {
            id: "peq2",
            text: "Quelle est la solution de l'équation : x² - 4 = 0 ?",
            options: [
              { id: "a", text: "x = 2" },
              { id: "b", text: "x = -2" },
              { id: "c", text: "x = 2 et x = -2" },
              { id: "d", text: "Pas de solution réelle" }
            ],
            correctAnswer: "c",
            explanation: "Cette équation se factorise en (x-2)(x+2) = 0."
          },
          {
            id: "peq3",
            text: "Résolvez l'équation : 3x² + 12x + 9 = 0",
            options: [
              { id: "a", text: "x = -1" },
              { id: "b", text: "x = -3" },
              { id: "c", text: "x = -3 et x = -1" },
              { id: "d", text: "Pas de solution réelle" }
            ],
            correctAnswer: "b",
            explanation: "Cette équation peut être simplifiée et factorisée."
          }
        ]
      },
    ]
  },
  {
    id: "figures-historiques",
    title: "Figures historiques ivoiriennes",
    description: "Testez vos connaissances sur les personnalités qui ont marqué l'histoire de la Côte d'Ivoire.",
    difficulty: "moyen",
    difficultyColor: "yellow",
    color: "rose",
    subject: "Histoire",
    xp: 110,
    duration: 20,
    series: [
      {
        id: "figures-historiques-serie1",
        title: "Personnalités ivoiriennes",
        description: "Découvrez les figures emblématiques de l'histoire de la Côte d'Ivoire.",
        xp: 10,
        duration: 15,
        progress: 0,
        questions: [
          {
            id: "fh1",
            text: "Qui est le premier président de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "Félix Houphouët-Boigny" },
              { id: "b", text: "Laurent Gbagbo" },
              { id: "c", text: "Alassane Ouattara" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Félix Houphouët-Boigny a été le premier président de la Côte d'Ivoire, en fonction de 1960 à 1993."
          },
          {
            id: "fh2",
            text: "Qui a été le premier ministre de la Côte d'Ivoire après l'indépendance?",
            options: [
              { id: "a", text: "Félix Houphouët-Boigny" },
              { id: "b", text: "Laurent Gbagbo" },
              { id: "c", text: "Alassane Ouattara" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Félix Houphouët-Boigny a également été le premier ministre de la Côte d'Ivoire après l'indépendance."
          },
          {
            id: "fh3",
            text: "Quel événement a marqué l'indépendance de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "La guerre civile" },
              { id: "b", text: "La conférence de Berlin" },
              { id: "c", text: "La déclaration d'indépendance" },
              { id: "d", text: "La colonisation" }
            ],
            correctAnswer: "c",
            explanation: "La Côte d'Ivoire a déclaré son indépendance le 7 août 1960."
          },
          {
            id: "fh4",
            text: "Qui est considéré comme le père de la nation ivoirienne?",
            options: [
              { id: "a", text: "Félix Houphouët-Boigny" },
              { id: "b", text: "Laurent Gbagbo" },
              { id: "c", text: "Alassane Ouattara" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Félix Houphouët-Boigny est souvent appelé le père de la nation ivoirienne."
          },
          {
            id: "fh5",
            text: "Quel est le nom de la première femme ministre en Côte d'Ivoire?",
            options: [
              { id: "a", text: "Simone Gbagbo" },
              { id: "b", text: "Marie-Thérèse Houphouët-Boigny" },
              { id: "c", text: "Aminata Traoré" },
              { id: "d", text: "Mariam Ouattara" }
            ],
            correctAnswer: "b",
            explanation: "Marie-Thérèse Houphouët-Boigny a été la première femme ministre en Côte d'Ivoire."
          }
        ]
      },
      {
        id: "figures-historiques-serie2",
        title: "Personnalités ivoiriennes",
        description: "Découvrez les figures emblématiques de l'histoire de la Côte d'Ivoire.",
        xp: 10,
        duration: 15,
        progress: 0,
        questions: [
          {
            id: "fh6",
            text: "Quel est le nom de la capitale de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "Abidjan" },
              { id: "b", text: "Yamoussoukro" },
              { id: "c", text: "Bouaké" },
              { id: "d", text: "San Pedro" }
            ],
            correctAnswer: "b",
            explanation: "Yamoussoukro est la capitale politique et administrative de la Côte d'Ivoire."
          },
          {
            id: "fh7",
            text: "Quel est le nom de la monnaie utilisée en Côte d'Ivoire?",
            options: [
              { id: "a", text: "Franc CFA" },
              { id: "b", text: "Euro" },
              { id: "c", text: "Dollar" },
              { id: "d", text: "Livre" }
            ],
            correctAnswer: "a",
            explanation: "La monnaie utilisée en Côte d'Ivoire est le Franc CFA."
          },
          {
            id: "fh8",
            text: "Quel est le nom de l'hymne national de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "L'Abidjanaise" },
              { id: "b", text: "La Marseillaise" },
              { id: "c", text: "La Côte d'Ivoire" },
              { id: "d", text: "L'Hymne à la joie" }
            ],
            correctAnswer: "a",
            explanation: "L'Abidjanaise est l'hymne national de la Côte d'Ivoire."
          },
          {
            id: "fh9",
            text: "Quel est le nom du premier ministre actuel de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "Patrick Achi" },
              { id: "b", text: "Alassane Ouattara" },
              { id: "c", text: "Laurent Gbagbo" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Patrick Achi est le premier ministre actuel de la Côte d'Ivoire."
          },
          {
            id: "fh10",
            text: "Quel est le nom de la première femme présidente de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "Simone Gbagbo" },
              { id: "b", text: "Marie-Thérèse Houphouët-Boigny" },
              { id: "c", text: "Aminata Traoré" },
              { id: "d", text: "Mariam Ouattara" }
            ],
            correctAnswer: "a",
            explanation: "Simone Gbagbo a été la première femme présidente de la Côte d'Ivoire."
          }
        ]
      },
      {
        id: "figures-historiques-serie3",
        title: "Personnalités ivoiriennes",
        description: "Découvrez les figures emblématiques de l'histoire de la Côte d'Ivoire.",
        xp: 10,
        duration: 15,
        progress: 0,
        questions: [
          {
            id: "fh11",
            text: "Quel est le nom de l'hymne national de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "L'Abidjanaise" },
              { id: "b", text: "La Marseillaise" },
              { id: "c", text: "La Côte d'Ivoire" },
              { id: "d", text: "L'Hymne à la joie" }
            ],
            correctAnswer: "a",
            explanation: "L'Abidjanaise est l'hymne national de la Côte d'Ivoire."
          },
          {
            id: "fh12",
            text: "Quel est le nom de la première femme ministre en Côte d'Ivoire?",
            options: [
              { id: "a", text: "Simone Gbagbo" },
              { id: "b", text: "Marie-Thérèse Houphouët-Boigny" },
              { id: "c", text: "Aminata Traoré" },
              { id: "d", text: "Mariam Ouattara" }
            ],
            correctAnswer: "b",
            explanation: "Marie-Thérèse Houphouët-Boigny a été la première femme ministre en Côte d'Ivoire."
          },
          {
            id: "fh13",
            text: "Quel est le nom du premier président de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "Félix Houphouët-Boigny" },
              { id: "b", text: "Laurent Gbagbo" },
              { id: "c", text: "Alassane Ouattara" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Félix Houphouët-Boigny a été le premier président de la Côte d'Ivoire, en fonction de 1960 à 1993."
          },
          {
            id: "fh14",
            text: "Qui est considéré comme le père de la nation ivoirienne?",
            options: [
              { id: "a", text: "Félix Houphouët-Boigny" },
              { id: "b", text: "Laurent Gbagbo" },
              { id: "c", text: "Alassane Ouattara" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Félix Houphouët-Boigny est souvent appelé le père de la nation ivoirienne."
          },
          {
            id: "fh15",
            text: "Quel événement a marqué l'indépendance de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "La guerre civile" },
              { id: "b", text: "La conférence de Berlin" },
              { id: "c", text: "La déclaration d'indépendance" },
              { id: "d", text: "La colonisation" }
            ],
            correctAnswer: "c",
            explanation: "La Côte d'Ivoire a déclaré son indépendance le 7 août 1960."
          }
        ]
      },
      {
        id: "figures-historiques-serie4",
        title: "Personnalités ivoiriennes",
        description: "Découvrez les figures emblématiques de l'histoire de la Côte d'Ivoire.",
        xp: 10,
        duration: 15,
        progress: 0,
        questions: [
          {
            id: "fh16",
            text: "Quel est le nom du premier ministre actuel de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "Patrick Achi" },
              { id: "b", text: "Alassane Ouattara" },
              { id: "c", text: "Laurent Gbagbo" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Patrick Achi est le premier ministre actuel de la Côte d'Ivoire."
          },
          {
            id: "fh17",
            text: "Quel est le nom de la première femme présidente de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "Simone Gbagbo" },
              { id: "b", text: "Marie-Thérèse Houphouët-Boigny" },
              { id: "c", text: "Aminata Traoré" },
              { id: "d", text: "Mariam Ouattara" }
            ],
            correctAnswer: "a",
            explanation: "Simone Gbagbo a été la première femme présidente de la Côte d'Ivoire."
          },
          {
            id: "fh18",
            text: "Qui a été le premier ministre de la Côte d'Ivoire après l'indépendance?",
            options: [
              { id: "a", text: "Félix Houphouët-Boigny" },
              { id: "b", text: "Laurent Gbagbo" },
              { id: "c", text: "Alassane Ouattara" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Félix Houphouët-Boigny a également été le premier ministre de la Côte d'Ivoire après l'indépendance."
          },
          {
            id: "fh19",
            text: "Quel est le nom de la monnaie utilisée en Côte d'Ivoire?",
            options: [
              { id: "a", text: "Franc CFA" },
              { id: "b", text: "Euro" },
              { id: "c", text: "Dollar" },
              { id: "d", text: "Livre" }
            ],
            correctAnswer: "a",
            explanation: "La monnaie utilisée en Côte d'Ivoire est le Franc CFA."
          },
          {
            id: "fh20",
            text: "Quel est le nom de l'hymne national de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "L'Abidjanaise" },
              { id: "b", text: "La Marseillaise" },
              { id: "c", text: "La Côte d'Ivoire" },
              { id: "d", text: "L'Hymne à la joie" }
            ],
            correctAnswer: "a",
            explanation: "L'Abidjanaise est l'hymne national de la Côte d'Ivoire."
          }
        ]
      },
      {
        id: "figures-historiques-serie5",
        title: "Personnalités ivoiriennes",
        description: "Découvrez les figures emblématiques de l'histoire de la Côte d'Ivoire.",
        xp: 10,
        duration: 15,
        progress: 0,
        questions: [
          {
            id: "fh21",
            text: "Qui est considéré comme le père de la nation ivoirienne?",
            options: [
              { id: "a", text: "Félix Houphouët-Boigny" },
              { id: "b", text: "Laurent Gbagbo" },
              { id: "c", text: "Alassane Ouattara" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Félix Houphouët-Boigny est souvent appelé le père de la nation ivoirienne."
          },
          {
            id: "fh22",
            text: "Quel événement a marqué l'indépendance de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "La guerre civile" },
              { id: "b", text: "La conférence de Berlin" },
              { id: "c", text: "La déclaration d'indépendance" },
              { id: "d", text: "La colonisation" }
            ],
            correctAnswer: "c",
            explanation: "La Côte d'Ivoire a déclaré son indépendance le 7 août 1960."
          },
          {
            id: "fh23",
            text: "Quel est le nom de la première femme ministre en Côte d'Ivoire?",
            options: [
              { id: "a", text: "Simone Gbagbo" },
              { id: "b", text: "Marie-Thérèse Houphouët-Boigny" },
              { id: "c", text: "Aminata Traoré" },
              { id: "d", text: "Mariam Ouattara" }
            ],
            correctAnswer: "b",
            explanation: "Marie-Thérèse Houphouët-Boigny a été la première femme ministre en Côte d'Ivoire."
          },
          {
            id: "fh24",
            text: "Quel est le nom du premier ministre actuel de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "Patrick Achi" },
              { id: "b", text: "Alassane Ouattara" },
              { id: "c", text: "Laurent Gbagbo" },
              { id: "d", text: "Henri Konan Bédié" }
            ],
            correctAnswer: "a",
            explanation: "Patrick Achi est le premier ministre actuel de la Côte d'Ivoire."
          },
          {
            id: "fh25",
            text: "Quel est le nom de la première femme présidente de la Côte d'Ivoire?",
            options: [
              { id: "a", text: "Simone Gbagbo" },
              { id: "b", text: "Marie-Thérèse Houphouët-Boigny" },
              { id: "c", text: "Aminata Traoré" },
              { id: "d", text: "Mariam Ouattara" }
            ],
            correctAnswer: "a",
            explanation: "Simone Gbagbo a été la première femme présidente de la Côte d'Ivoire."
          }
        ]
      }
    ]
  },
  {
    id: "fonctions-derivees",
    title: "Fonctions dérivées",
    description: "Maîtrisez le calcul des dérivées de fonctions et leurs applications.",
    difficulty: "difficile",
    difficultyColor: "red",
    color: "indigo",
    subject: "Mathématiques",
    xp: 150,
    duration: 25,
    series: [
      {
        id: "fonctions-derivees-serie1",
        title: "Calcul des dérivées",
        description: "Apprenez à dériver des fonctions polynomiales, exponentielles et logarithmiques.",
        xp: 10,
        duration: 15,
        progress: 0,
        questions: [
          {
            id: "fd1",
            text: "Quelle est la dérivée de f(x) = x²?",
            options: [
              { id: "a", text: "2x" },
              { id: "b", text: "x" },
              { id: "c", text: "x²" },
              { id: "d", text: "2" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = x² est f'(x) = 2x."
          },
          {
            id: "fd2",
            text: "Quelle est la dérivée de f(x) = 3x³ - 5x + 2?",
            options: [
              { id: "a", text: "9x² - 5" },
              { id: "b", text: "3x² - 5" },
              { id: "c", text: "3x² + 5" },
              { id: "d", text: "9x² + 5" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = 3x³ - 5x + 2 est f'(x) = 9x² - 5."
          },
          {
            id: "fd3",
            text: "Quelle est la dérivée de f(x) = sin(x)?",
            options: [
              { id: "a", text: "cos(x)" },
              { id: "b", text: "sin(x)" },
              { id: "c", text: "tan(x)" },
              { id: "d", text: "1" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = sin(x) est f'(x) = cos(x)."
          },
          {
            id: "fd4",
            text: "Quelle est la dérivée de f(x) = e^x?",
            options: [
              { id: "a", text: "e^x" },
              { id: "b", text: "x*e^x" },
              { id: "c", text: "1" },
              { id: "d", text: "0" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = e^x est f'(x) = e^x."
          },
          {
            id: "fd5",
            text: "Quelle est la dérivée de f(x) = ln(x)?",
            options: [
              { id: "a", text: "1/x" },
              { id: "b", text: "x" },
              { id: "c", text: "e^x" },
              { id: "d", text: "0" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = ln(x) est f'(x) = 1/x."
          }
        ]
      },
      {
        id: "fonctions-derivees-serie2",
        title: "Dérivées de fonctions trigonométriques",
        description: "Apprenez à dériver des fonctions trigonométriques.",
        xp: 10,
        duration: 15,
        progress: 0,
        questions: [
          {
            id: "fd6",
            text: "Quelle est la dérivée de f(x) = cos(x)?",
            options: [
              { id: "a", text: "-sin(x)" },
              { id: "b", text: "sin(x)" },
              { id: "c", text: "cos(x)" },
              { id: "d", text: "1" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = cos(x) est f'(x) = -sin(x)."
          },
          {
            id: "fd7",
            text: "Quelle est la dérivée de f(x) = tan(x)?",
            options: [
              { id: "a", text: "sec²(x)" },
              { id: "b", text: "tan(x)" },
              { id: "c", text: "1" },
              { id: "d", text: "0" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = tan(x) est f'(x) = sec²(x)."
          },
          {
            id: "fd8",
            text: "Quelle est la dérivée de f(x) = sin²(x)?",
            options: [
              { id: "a", text: "2sin(x)cos(x)" },
              { id: "b", text: "sin(x)" },
              { id: "c", text: "cos(x)" },
              { id: "d", text: "2cos(x)" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = sin²(x) est f'(x) = 2sin(x)cos(x) (règle de la chaîne)."
          },
          {
            id: "fd9",
            text: "Quelle est la dérivée de f(x) = tan²(x)?",
            options: [
              { id: "a", text: "2tan(x)sec²(x)" },
              { id: "b", text: "sec²(x)" },
              { id: "c", text: "tan(x)" },
              { id: "d", text: "2sec(x)" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = tan²(x) est f'(x) = 2tan(x)sec²(x) (règle de la chaîne)."
          },
          {
            id: "fd10",
            text: "Quelle est la dérivée de f(x) = arcsin(x)?",
            options: [
              { id: "a", text: "1/√(1-x²)" },
              { id: "b", text: "1/x" },
              { id: "c", text: "1" },
              { id: "d", text: "0" }
            ],
            correctAnswer: "a",
            explanation: "La dérivée de f(x) = arcsin(x) est f'(x) = 1/√(1-x²)."
          }
        ]
      },
      {
        id: "fonctions-derivees-serie3",
        title: "Dérivées et applications",
        description: "Utilisation des dérivées pour l'étude de fonctions et optimisation.",
        xp: 15,
        duration: 20,
        progress: 0,
        questions: [
          {
            id: "fd11",
            text: "Quelle est l'interprétation graphique de la dérivée d'une fonction en un point?",
            options: [
              { id: "a", text: "L'aire sous la courbe" },
              { id: "b", text: "La pente de la tangente en ce point" },
              { id: "c", text: "La valeur moyenne de la fonction" },
              { id: "d", text: "L'intégrale de la fonction" }
            ],
            correctAnswer: "b",
            explanation: "La dérivée représente la pente de la tangente à la courbe en un point donné."
          },
          // Ajoutez d'autres questions ici...
        ]
      },
      {
        id: "fonctions-derivees-serie4",
        title: "Dérivées et étude de variations",
        description: "Application des dérivées pour déterminer les variations et extremums.",
        xp: 15,
        duration: 20,
        progress: 0,
        questions: [
          {
            id: "fd16",
            text: "Si f'(x) change de signe de + à - en x, que peut-on dire?",
            options: [
              { id: "a", text: "x est un minimum local" },
              { id: "b", text: "x est un maximum local" },
              { id: "c", text: "x est un point d'inflexion" },
              { id: "d", text: "x est un point de discontinuité" }
            ],
            correctAnswer: "b",
            explanation: "Si f'(x) passe de positif à négatif, alors x est un maximum local."
          },
          // Ajoutez d'autres questions ici...
        ]
      }
    ]
  },
  // Autres données...
];
