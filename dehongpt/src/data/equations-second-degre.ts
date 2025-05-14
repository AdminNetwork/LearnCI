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
       {
  id: "eq2",
  text: "Résolvez l'équation : x² + 3x - 10 = 0",
  options: [
    { id: "a", text: "x = 5 et x = -2" },
    { id: "b", text: "x = -5 et x = 2" },
    { id: "c", text: "x = -3 et x = 10" },
    { id: "d", text: "x = 5 et x = 2" }
  ],
  correctAnswer: "a",
  explanation: "Produit = -10 et somme = 3. Les solutions sont x = 5 et x = -2."
},
{
  id: "eq3",
  text: "Résolvez l'équation : x² - 4x + 4 = 0",
  options: [
    { id: "a", text: "x = 2" },
    { id: "b", text: "x = -2" },
    { id: "c", text: "x = 2 ou x = -2" },
    { id: "d", text: "x = 0" }
  ],
  correctAnswer: "a",
  explanation: "Il s'agit d’un carré parfait : (x - 2)² = 0, donc x = 2."
},
{
  id: "eq4",
  text: "Résolvez l'équation : x² + 6x + 9 = 0",
  options: [
    { id: "a", text: "x = -3" },
    { id: "b", text: "x = 3" },
    { id: "c", text: "x = -3 ou x = 3" },
    { id: "d", text: "x = 0" }
  ],
  correctAnswer: "a",
  explanation: "C’est un carré parfait : (x + 3)² = 0, donc x = -3."
},
{
  id: "eq5",
  text: "Résolvez l'équation : x² - x - 6 = 0",
  options: [
    { id: "a", text: "x = -3 et x = 2" },
    { id: "b", text: "x = 3 et x = -2" },
    { id: "c", text: "x = 1 et x = -6" },
    { id: "d", text: "x = -1 et x = 6" }
  ],
  correctAnswer: "a",
  explanation: "Produit = -6 et somme = -1, les solutions sont x = -3 et x = 2."
},
{
  id: "eq6",
  text: "Résolvez l'équation : x² + x - 12 = 0",
  options: [
    { id: "a", text: "x = 4 et x = -3" },
    { id: "b", text: "x = -4 et x = 3" },
    { id: "c", text: "x = -6 et x = 2" },
    { id: "d", text: "x = 6 et x = -2" }
  ],
  correctAnswer: "a",
  explanation: "Produit = -12 et somme = 1, les solutions sont x = 4 et x = -3."
},
{
  id: "eq7",
  text: "Résolvez l'équation : x² - 7x + 12 = 0",
  options: [
    { id: "a", text: "x = 3 et x = 4" },
    { id: "b", text: "x = -3 et x = -4" },
    { id: "c", text: "x = 2 et x = 6" },
    { id: "d", text: "x = 1 et x = 12" }
  ],
  correctAnswer: "a",
  explanation: "Produit = 12 et somme = -7, donc x = 3 et x = 4 (racines négatives)."
},
{
  id: "eq8",
  text: "Résolvez l'équation : x² - 9 = 0",
  options: [
    { id: "a", text: "x = 3 ou x = -3" },
    { id: "b", text: "x = 9" },
    { id: "c", text: "x = -9" },
    { id: "d", text: "x = 0" }
  ],
  correctAnswer: "a",
  explanation: "Il s’agit d’une différence de carrés : (x - 3)(x + 3) = 0, donc x = ±3."
},
{
  id: "eq9",
  text: "Résolvez l'équation : x² + 2x + 1 = 0",
  options: [
    { id: "a", text: "x = -1" },
    { id: "b", text: "x = 1" },
    { id: "c", text: "x = -2" },
    { id: "d", text: "x = 2" }
  ],
  correctAnswer: "a",
  explanation: "C’est un carré parfait : (x + 1)² = 0, donc x = -1."
},
{
  id: "eq10",
  text: "Résolvez l'équation : x² - 2x - 15 = 0",
  options: [
    { id: "a", text: "x = 5 et x = -3" },
    { id: "b", text: "x = -5 et x = 3" },
    { id: "c", text: "x = 4 et x = -4" },
    { id: "d", text: "x = 0 et x = -15" }
  ],
  correctAnswer: "a",
  explanation: "Produit = -15 et somme = -2, les racines sont x = 5 et x = -3."
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
  text: "Résolvez l'inéquation : x² - 5x + 6 < 0",
  options: [
    { id: "a", text: "2 < x < 3" },
    { id: "b", text: "x < 2 ou x > 3" },
    { id: "c", text: "x < -2 ou x > -3" },
    { id: "d", text: "x > 5" }
  ],
  correctAnswer: "a",
  explanation: "On factorise : (x - 2)(x - 3) < 0. L'expression est négative entre les racines, donc 2 < x < 3."
},
{
  id: "ineq3",
  text: "Résolvez l'inéquation : x² + 4x + 3 > 0",
  options: [
    { id: "a", text: "x < -3 ou x > -1" },
    { id: "b", text: "-3 < x < -1" },
    { id: "c", text: "x < -1 ou x > -3" },
    { id: "d", text: "x > 0" }
  ],
  correctAnswer: "a",
  explanation: "Factorisation : (x + 1)(x + 3) > 0. L'expression est positive pour x < -3 ou x > -1."
},
{
  id: "ineq4",
  text: "Résolvez l'inéquation : x² - 9 < 0",
  options: [
    { id: "a", text: "-3 < x < 3" },
    { id: "b", text: "x < -3 ou x > 3" },
    { id: "c", text: "x > -3 ou x < 3" },
    { id: "d", text: "x > 3" }
  ],
  correctAnswer: "a",
  explanation: "x² - 9 < 0 ⇔ (x - 3)(x + 3) < 0 ⇔ -3 < x < 3."
},
{
  id: "ineq5",
  text: "Résolvez l'inéquation : x² - 4x + 3 ≥ 0",
  options: [
    { id: "a", text: "x ≤ 1 ou x ≥ 3" },
    { id: "b", text: "1 < x < 3" },
    { id: "c", text: "x > 3" },
    { id: "d", text: "x < 1 ou x > 3" }
  ],
  correctAnswer: "a",
  explanation: "On résout (x - 1)(x - 3) ≥ 0, ce qui est vrai si x ≤ 1 ou x ≥ 3."
},
{
  id: "ineq6",
  text: "Résolvez l'inéquation : x² + 2x + 1 ≤ 0",
  options: [
    { id: "a", text: "x = -1" },
    { id: "b", text: "x < -1" },
    { id: "c", text: "x ≤ -1" },
    { id: "d", text: "x > -1" }
  ],
  correctAnswer: "a",
  explanation: "x² + 2x + 1 = (x + 1)². Cette expression est toujours ≥ 0, et = 0 seulement si x = -1."
},
{
  id: "ineq7",
  text: "Résolvez l'inéquation : -x² + 4x - 3 > 0",
  options: [
    { id: "a", text: "1 < x < 3" },
    { id: "b", text: "x < 1 ou x > 3" },
    { id: "c", text: "x > 0" },
    { id: "d", text: "x < -3 ou x > 1" }
  ],
  correctAnswer: "a",
  explanation: "-x² + 4x - 3 = -(x - 1)(x - 3). Donc l'inéquation est vérifiée entre les racines : 1 < x < 3."
},
{
  id: "ineq8",
  text: "Résolvez l'inéquation : x² + 1 > 0",
  options: [
    { id: "a", text: "Pour tout x réel" },
    { id: "b", text: "x ≠ 0" },
    { id: "c", text: "x > 0" },
    { id: "d", text: "x ≠ 1" }
  ],
  correctAnswer: "a",
  explanation: "x² + 1 est toujours strictement positif, donc l'inéquation est vraie pour tout x réel."
},
{
  id: "ineq9",
  text: "Résolvez l'inéquation : x² - 2x + 1 < 0",
  options: [
    { id: "a", text: "Aucune solution" },
    { id: "b", text: "x < 1" },
    { id: "c", text: "x > 1" },
    { id: "d", text: "x = 1" }
  ],
  correctAnswer: "a",
  explanation: "x² - 2x + 1 = (x - 1)² ≥ 0 pour tout x. Donc l'inéquation est strictement fausse."
},
{
  id: "ineq10",
  text: "Résolvez l'inéquation : -x² + x + 6 ≤ 0",
  options: [
    { id: "a", text: "-2 ≤ x ≤ 3" },
    { id: "b", text: "x ≤ -2 ou x ≥ 3" },
    { id: "c", text: "x ≥ -2 et x ≤ 3" },
    { id: "d", text: "-3 ≤ x ≤ 2" }
  ],
  correctAnswer: "a",
  explanation: "On résout l'équation -x² + x + 6 = 0 ⇔ x = -2 et x = 3. Le trinôme est négatif ou nul entre ces deux valeurs."
}

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
        {
  id: "app2",
  text: "Un rectangle a une aire de 48 m² et une longueur de (x + 4) mètres et une largeur de (x - 2) mètres. Quelle équation permet de trouver x ?",
  options: [
    { id: "a", text: "(x + 4)(x - 2) = 48" },
    { id: "b", text: "(x + 2)(x - 4) = 48" },
    { id: "c", text: "x² + 2x - 8 = 48" },
    { id: "d", text: "x² - 4 = 48" }
  ],
  correctAnswer: "a",
  explanation: "Aire = longueur × largeur ⇒ (x + 4)(x - 2) = 48."
},
{
  id: "app3",
  text: "Un objet est lancé en l'air avec une hauteur h(t) = -5t² + 20t + 1. Quelle est la hauteur maximale atteinte ?",
  options: [
    { id: "a", text: "21 mètres" },
    { id: "b", text: "20 mètres" },
    { id: "c", text: "25 mètres" },
    { id: "d", text: "16 mètres" }
  ],
  correctAnswer: "a",
  explanation: "Sommet de la parabole : t = -b/2a = -20 / (2 × -5) = 2. h(2) = -5(4) + 40 + 1 = 21."
},
{
  id: "app4",
  text: "Un jardin carré a une aire de 100 m². Quelle est la longueur de son côté ?",
  options: [
    { id: "a", text: "10 m" },
    { id: "b", text: "5 m" },
    { id: "c", text: "20 m" },
    { id: "d", text: "100 m" }
  ],
  correctAnswer: "a",
  explanation: "x² = 100 ⇒ x = √100 ⇒ x = 10."
},
{
  id: "app5",
  text: "La somme de deux entiers est 10 et leur produit est 21. Quels sont ces deux entiers ?",
  options: [
    { id: "a", text: "3 et 7" },
    { id: "b", text: "4 et 6" },
    { id: "c", text: "5 et 5" },
    { id: "d", text: "2 et 8" }
  ],
  correctAnswer: "a",
  explanation: "Soit x un des nombres, l'autre est 10 - x. Produit : x(10 - x) = 21 ⇒ x² - 10x + 21 = 0 ⇒ x = 3 ou 7."
},
{
  id: "app6",
  text: "La hauteur d’un triangle est de (x + 1) cm et sa base est (x - 1) cm. Si son aire est de 24 cm², quelle équation permet de trouver x ?",
  options: [
    { id: "a", text: "0.5(x + 1)(x - 1) = 24" },
    { id: "b", text: "(x + 1)(x - 1) = 24" },
    { id: "c", text: "x² + 1 = 24" },
    { id: "d", text: "x² - 1 = 48" }
  ],
  correctAnswer: "a",
  explanation: "Aire = (1/2) × base × hauteur ⇒ (1/2)(x + 1)(x - 1) = 24."
},
{
  id: "app7",
  text: "Un mobile parcourt 20 mètres en t secondes selon la loi s(t) = 2t² + 3t. Quelle équation permet de déterminer le moment où il atteint 20 m ?",
  options: [
    { id: "a", text: "2t² + 3t = 20" },
    { id: "b", text: "2t² - 3t = 20" },
    { id: "c", text: "t² + 3t = 10" },
    { id: "d", text: "3t² + 2t = 20" }
  ],
  correctAnswer: "a",
  explanation: "Il faut résoudre s(t) = 20 ⇒ 2t² + 3t = 20."
},
{
  id: "app8",
  text: "La différence entre le carré d’un nombre et le nombre est 12. Quel est ce nombre ?",
  options: [
    { id: "a", text: "-3 ou 4" },
    { id: "b", text: "3 ou -4" },
    { id: "c", text: "6 ou -2" },
    { id: "d", text: "2 ou -6" }
  ],
  correctAnswer: "a",
  explanation: "Soit x le nombre. x² - x = 12 ⇒ x² - x - 12 = 0. Les solutions sont x = -3 ou x = 4."
}
,
{
  id: "app9",
  text: "Le produit de deux nombres consécutifs est 132. Quel est le plus petit de ces nombres ?",
  options: [
    { id: "a", text: "11" },
    { id: "b", text: "12" },
    { id: "c", text: "10" },
    { id: "d", text: "13" }
  ],
  correctAnswer: "a",
  explanation: "Soit x le plus petit nombre ⇒ x(x+1) = 132 ⇒ x² + x - 132 = 0 ⇒ x = 11 ou -12 ⇒ on garde x = 11."
},
{
  id: "app10",
  text: "Un jardinier veut entourer un carré de côté x m avec une clôture. Si le périmètre doit être de 36 m, quelle est l'équation ?",
  options: [
    { id: "a", text: "4x = 36" },
    { id: "b", text: "x² = 36" },
    { id: "c", text: "2x + 2x = 36" },
    { id: "d", text: "x + x + x + x = 36" }
  ],
  correctAnswer: "a",
  explanation: "Le périmètre d’un carré est 4x ⇒ 4x = 36 ⇒ x = 9."
}

      ]
    }
  ]
};