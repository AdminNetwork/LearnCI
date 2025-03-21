export const analyseLitteraire = {
  id: "analyse-litteraire",
  title: "Analyse littéraire",
  description: "Analysez des textes littéraires et identifiez les figures de style, les thèmes et les procédés narratifs.",
  difficulty: "difficile",
  difficultyColor: "red",
  color: "orange",
  subject: "Littérature",
  xp: 160,
  duration: 30,
  series: [
    {
      id: "analyse-litteraire-serie1",
      title: "Figures de style",
      description: "Identifiez les figures de style dans des extraits littéraires.",
      xp: 10,
      duration: 15,
      progress: 0,
      questions: [
        {
          id: "al1",
          text: "Quel est l'effet de la métaphore dans un texte?",
          options: [
            { id: "a", text: "Créer une image" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "La métaphore crée une image en associant deux éléments différents."
        },
        {
          id: "al2",
          text: "Quel est l'effet de l'oxymore dans un texte?",
          options: [
            { id: "a", text: "Créer une image" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "L'oxymore associe deux termes contradictoires pour créer un effet de surprise."
        },
        {
          id: "al3",
          text: "Quel est l'effet de l'allitération dans un texte?",
          options: [
            { id: "a", text: "Créer une musicalité" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "L'allitération répète des sons consonantiques pour créer une musicalité."
        },
        {
          id: "al4",
          text: "Quel est l'effet de l'assonance dans un texte?",
          options: [
            { id: "a", text: "Créer une musicalité" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "L'assonance répète des sons vocaliques pour créer une musicalité."
        },
        {
          id: "al5",
          text: "Quel est l'effet de l'hyperbole dans un texte?",
          options: [
            { id: "a", text: "Exagérer une idée" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "L'hyperbole exagère une idée pour créer un effet fort."
        }
      ]
    },
    {
      id: "analyse-litteraire-serie2",
      title: "Analyse de poèmes",
      description: "Identifiez les figures de style dans des poèmes.",
      xp: 10,
      duration: 15,
      progress: 0,
      questions: [
        {
          id: "al6",
          text: "Quel est l'effet de la personnification dans un poème?",
          options: [
            { id: "a", text: "Donner vie à des objets inanimés" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "La personnification donne des caractéristiques humaines à des objets inanimés."
        },
        {
          id: "al7",
          text: "Quel est l'effet de l'anaphore dans un poème?",
          options: [
            { id: "a", text: "Répéter un mot ou une phrase" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "L'anaphore répète un mot ou une phrase pour créer un effet de rythme."
        },
        {
          id: "al8",
          text: "Quel est l'effet de la comparaison dans un poème?",
          options: [
            { id: "a", text: "Comparer deux éléments" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "La comparaison établit un lien entre deux éléments pour créer une image."
        },
        {
          id: "al9",
          text: "Quel est l'effet de la métonymie dans un poème?",
          options: [
            { id: "a", text: "Remplacer un terme par un autre" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "La métonymie remplace un terme par un autre qui lui est lié."
        },
        {
          id: "al10",
          text: "Quel est l'effet de l'oxymore dans un poème?",
          options: [
            { id: "a", text: "Créer une image" },
            { id: "b", text: "Rendre le texte plus long" },
            { id: "c", text: "Simplifier le texte" },
            { id: "d", text: "Rendre le texte plus difficile" }
          ],
          correctAnswer: "a",
          explanation: "L'oxymore associe deux termes contradictoires pour créer un effet de surprise."
        }
      ]
    }
  ]
};