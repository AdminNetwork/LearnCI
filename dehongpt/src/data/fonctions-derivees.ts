export const fonctionsDerivees = {
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
        "id": "fonctions-derivees-serie3",
        "title": "Dérivées et applications",
        "description": "Utilisation des dérivées pour l'étude de fonctions et optimisation.",
        "xp": 15,
        "duration": 20,
        "progress": 0,
        "questions": [
          {
            "id": "fd11",
            "text": "Quelle est l'interprétation graphique de la dérivée d'une fonction en un point?",
            "options": [
              { "id": "a", "text": "L'aire sous la courbe" },
              { "id": "b", "text": "La pente de la tangente en ce point" },
              { "id": "c", "text": "La valeur moyenne de la fonction" },
              { "id": "d", "text": "L'intégrale de la fonction" }
            ],
            "correctAnswer": "b",
            "explanation": "La dérivée représente la pente de la tangente à la courbe en un point donné."
          },
          {
            "id": "fd12",
            "text": "Si f'(x) > 0 sur un intervalle, que peut-on en conclure?",
            "options": [
              { "id": "a", "text": "f est décroissante" },
              { "id": "b", "text": "f est constante" },
              { "id": "c", "text": "f est croissante" },
              { "id": "d", "text": "f est périodique" }
            ],
            "correctAnswer": "c",
            "explanation": "Une fonction est croissante lorsque sa dérivée est positive sur un intervalle."
          },
          {
            "id": "fd13",
            "text": "Si f'(x) = 0 et f''(x) > 0, que peut-on dire du point x?",
            "options": [
              { "id": "a", "text": "x est un point d'inflexion" },
              { "id": "b", "text": "x est un minimum local" },
              { "id": "c", "text": "x est un maximum local" },
              { "id": "d", "text": "x est un point de discontinuité" }
            ],
            "correctAnswer": "b",
            "explanation": "Si f'(x) = 0 et f''(x) > 0, la fonction a un minimum local en x."
          },
          {
            "id": "fd14",
            "text": "Quelle est la dérivée de f(x) = x^3 - 6x^2 + 9x?",
            "options": [
              { "id": "a", "text": "3x^2 - 12x + 9" },
              { "id": "b", "text": "x^2 - 3x + 9" },
              { "id": "c", "text": "3x^2 - 6x" },
              { "id": "d", "text": "x^2 - 6x + 3" }
            ],
            "correctAnswer": "a",
            "explanation": "La dérivée de f(x) = x³ - 6x² + 9x est f'(x) = 3x² - 12x + 9."
          },
          {
            "id": "fd15",
            "text": "Quelle est la dérivée de f(x) = x e^x?",
            "options": [
              { "id": "a", "text": "e^x" },
              { "id": "b", "text": "x e^x" },
              { "id": "c", "text": "e^x (x + 1)" },
              { "id": "d", "text": "e^x (x - 1)" }
            ],
            "correctAnswer": "c",
            "explanation": "La dérivée de f(x) = x e^x est f'(x) = e^x (x + 1) (règle du produit)."
          }
        ]
      },
      {
        "id": "fonctions-derivees-serie4",
        "title": "Dérivées et étude de variations",
        "description": "Application des dérivées pour déterminer les variations et extremums.",
        "xp": 15,
        "duration": 20,
        "progress": 0,
        "questions": [
          {
            "id": "fd16",
            "text": "Si f'(x) change de signe de + à - en x, que peut-on dire?",
            "options": [
              { "id": "a", "text": "x est un minimum local" },
              { "id": "b", "text": "x est un maximum local" },
              { "id": "c", "text": "x est un point d'inflexion" },
              { "id": "d", "text": "x est un point de discontinuité" }
            ],
            "correctAnswer": "b",
            "explanation": "Si f'(x) passe de positif à négatif, alors x est un maximum local."
          },
          {
            "id": "fd17",
            "text": "Quelle est la dérivée seconde de f(x) = x^4 - 4x^3 + 6x^2?",
            "options": [
              { "id": "a", "text": "12x^2 - 24x + 12" },
              { "id": "b", "text": "4x^3 - 12x^2 + 12x" },
              { "id": "c", "text": "24x - 24" },
              { "id": "d", "text": "12x - 24" }
            ],
            "correctAnswer": "c",
            "explanation": "La dérivée seconde est f''(x) = 12x - 24."
          },
          {
            "id": "fd18",
            "text": "Quel critère permet de trouver les points d'inflexion?",
            "options": [
              { "id": "a", "text": "f'(x) = 0" },
              { "id": "b", "text": "f''(x) = 0 et changement de signe de f''(x)" },
              { "id": "c", "text": "f(x) est positive" },
              { "id": "d", "text": "f'(x) est négative" }
            ],
            "correctAnswer": "b",
            "explanation": "Un point d'inflexion se trouve lorsque f''(x) = 0 et qu'il y a un changement de signe."
          },
          {
            "id": "fd19",
            "text": "Quelle est la dérivée de f(x) = 1/x?",
            "options": [
              { "id": "a", "text": "1/x²" },
              { "id": "b", "text": "-1/x²" },
              { "id": "c", "text": "x" },
              { "id": "d", "text": "x²" }
            ],
            "correctAnswer": "b",
            "explanation": "La dérivée de f(x) = 1/x est f'(x) = -1/x²."
          },
          {
            "id": "fd20",
            "text": "Si f'(x) est négative sur un intervalle, que peut-on dire de f?",
            "options": [
              { "id": "a", "text": "f est constante" },
              { "id": "b", "text": "f est croissante" },
              { "id": "c", "text": "f est décroissante" },
              { "id": "d", "text": "f est périodique" }
            ],
            "correctAnswer": "c",
            "explanation": "Si f'(x) est négative, alors f est décroissante sur l'intervalle."
          }







        ]
    }
  ]
};