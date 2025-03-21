export const equationsSecondDegre = {
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
        // Ajoutez d'autres questions ici
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
        // Ajoutez d'autres questions ici
      ]
    },
    {
      id: "equations-second-degre-serie3",
      title: "Applications des équations du second degré",
      description: "Mettez en pratique vos compétences avec des problèmes du monde réel.",
      xp: 10,
      duration: 20,
      progress: 0,
      questions: [
        {
          id: "app1",
          text: "Si a = 2, b = -3 et c = -2, quelle est la nature des racines de ax² + bx + c = 0 ?",
          options: [
            { id: "a", text: "Deux racines réelles distinctes" },
            { id: "b", text: "Deux racines réelles égales" },
            { id: "c", text: "Pas de racine réelle" },
            { id: "d", text: "Une seule racine réelle" }
          ],
          correctAnswer: "a",
          explanation: "Le discriminant est Δ = b² - 4ac = (-3)² - 4(2)(-2) = 9 + 16 = 25 > 0, donc l'équation a deux racines réelles distinctes."
        },
        // Ajoutez d'autres questions ici
      ]
    }
  ]
};