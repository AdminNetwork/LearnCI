export const reactionsChimiques = {
  id: "reactions-chimiques",
  title: "Réactions chimiques",
  description: "Évaluez vos connaissances sur les réactions chimiques, les équations et l'équilibre chimique.",
  difficulty: "facile",
  difficultyColor: "green",
  color: "teal",
  subject: "Chimie",
  xp: 80,
  duration: 12,
  series: [
    {
      id: "reactions-chimiques-serie1",
      title: "Équations chimiques",
      description: "Équilibrez des équations chimiques et identifiez les types de réactions.",
      xp: 8,
      duration: 10,
      progress: 0,
      questions: [
        {
          id: "ch1",
          text: "Quelle est l'équation équilibrée pour la combustion complète du méthane (CH₄) ?",
          options: [
            { id: "a", text: "CH₄ + O₂ → CO₂ + H₂O" },
            { id: "b", text: "CH₄ + 2O₂ → CO₂ + 2H₂O" },
            { id: "c", text: "CH₄ + 3O₂ → CO₂ + 2H₂O" },
            { id: "d", text: "CH₄ + O₂ → CO₂ + 2H₂" }
          ],
          correctAnswer: "b",
          explanation: "La combustion complète du méthane produit du dioxyde de carbone et de l'eau. En équilibrant l'équation, on obtient : CH₄ + 2O₂ → CO₂ + 2H₂O."
        },
        {
          id: "ch2",
          text: "Quelle est l'équation équilibrée pour la réaction entre l'acide chlorhydrique et le sodium ?",
          options: [
            { id: "a", text: "HCl + Na → NaCl + H₂" },
            { id: "b", text: "HCl + NaOH → NaCl + H₂O" },
            { id: "c", text: "HCl + Na₂CO₃ → NaCl + H₂O + CO₂" },
            { id: "d", text: "HCl + Na₂SO₄ → NaCl + NaHSO₄" }
          ],
          correctAnswer: "b",
          explanation: "L'acide chlorhydrique réagit avec l'hydroxyde de sodium pour former du chlorure de sodium et de l'eau."
        },
        {
          id: "ch3",
          text: "Quelle est l'équation équilibrée pour la réaction de décomposition de l'eau ?",
          options: [
            { id: "a", text: "2H₂O → 2H₂ + O₂" },
            { id: "b", text: "H₂O → H₂ + O" },
            { id: "c", text: "H₂O → H + O₂" },
            { id: "d", text: "H₂O → H₂ + O₂" }
          ],
          correctAnswer: "a",
          explanation: "La décomposition de l'eau produit de l'hydrogène et de l'oxygène."
        },
        {
          id: "ch4",
          text: "Quelle est l'équation équilibrée pour la réaction entre l'acide sulfurique et le sodium ?",
          options: [
            { id: "a", text: "H₂SO₄ + Na → Na₂SO₄ + H₂" },
            { id: "b", text: "H₂SO₄ + NaOH → Na₂SO₄ + H₂O" },
            { id: "c", text: "H₂SO₄ + Na₂CO₃ → Na₂SO₄ + H₂O + CO₂" },
            { id: "d", text: "H₂SO₄ + Na₂SO₄ → Na₂SO₄ + H₂" }
          ],
          correctAnswer: "b",
          explanation: "L'acide sulfurique réagit avec l'hydroxyde de sodium pour former du sulfate de sodium et de l'eau."
        },
        {
          id: "ch5",
          text: "Quelle est l'équation équilibrée pour la réaction entre l'acide acétique et le bicarbonate de sodium ?",
          options: [
            { id: "a", text: "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂" },
            { id: "b", text: "CH₃COOH + NaOH → CH₃COONa + H₂O" },
            { id: "c", text: "CH₃COOH + NaCl → CH₃COONa + HCl" },
            { id: "d", text: "CH₃COOH + Na₂CO₃ → CH₃COONa + H₂O + CO₂" }
          ],
          correctAnswer: "a",
          explanation: "L'acide acétique réagit avec le bicarbonate de sodium pour produire du vinaigre, de l'eau et du dioxyde de carbone."
        }
      ]
    },
    {
      id: "reactions-chimiques-serie2",
      title: "Réactions acido-basiques",
      description: "Identifiez les réactions acido-basiques et leurs produits.",
      xp: 8,
      duration: 10,
      progress: 0,
      questions: [
        {
          id: "ch6",
          text: "Quelle est l'équation de la neutralisation entre l'acide chlorhydrique et l'hydroxyde de sodium ?",
          options: [
            { id: "a", text: "HCl + NaOH → NaCl + H₂O" },
            { id: "b", text: "HCl + Na → NaCl + H₂" },
            { id: "c", text: "HCl + Na₂CO₃ → NaCl + H₂O + CO₂" },
            { id: "d", text: "HCl + Na₂SO₄ → NaCl + NaHSO₄" }
          ],
          correctAnswer: "a",
          explanation: "L'acide chlorhydrique réagit avec l'hydroxyde de sodium pour former du chlorure de sodium et de l'eau."
        },
        {
          id: "ch7",
          text: "Quelle est l'équation de la réaction entre l'acide sulfurique et le carbonate de calcium ?",
          options: [
            { id: "a", text: "H₂SO₄ + CaCO₃ → CaSO₄ + H₂O + CO₂" },
            { id: "b", text: "H₂SO₄ + Ca → CaSO₄ + H₂" },
            { id: "c", text: "H₂SO₄ + NaOH → Na₂SO₄ + H₂O" },
            { id: "d", text: "H₂SO₄ + Na₂CO₃ → Na₂SO₄ + H₂O + CO₂" }
          ],
          correctAnswer: "a",
          explanation: "L'acide sulfurique réagit avec le carbonate de calcium pour produire du sulfate de calcium, de l'eau et du dioxyde de carbone."
        },
        {
          id: "ch8",
          text: "Quelle est l'équation de la réaction entre le chlorure de sodium et le nitrate d'argent ?",
          options: [
            { id: "a", text: "NaCl + AgNO₃ → NaNO₃ + AgCl" },
            { id: "b", text: "NaCl + AgNO₃ → NaCl + AgNO₃" },
            { id: "c", text: "NaCl + AgNO₃ → NaCl + Ag" },
            { id: "d", text: "NaCl + AgNO₃ → NaNO₃ + Ag" }
          ],
          correctAnswer: "a",
          explanation: "Le chlorure de sodium réagit avec le nitrate d'argent pour former du nitrate de sodium et du chlorure d'argent, qui précipite."
        },
        {
          id: "ch9",
          text: "Quelle est l'équation de la réaction entre le sulfate de cuivre et le carbonate de sodium ?",
          options: [
            { id: "a", text: "CuSO₄ + Na₂CO₃ → CuCO₃ + Na₂SO₄" },
            { id: "b", text: "CuSO₄ + Na → NaSO₄ + Cu" },
            { id: "c", text: "CuSO₄ + NaOH → Na₂SO₄ + Cu" },
            { id: "d", text: "CuSO₄ + NaCl → NaCl + Cu" }
          ],
          correctAnswer: "a",
          explanation: "Le sulfate de cuivre réagit avec le carbonate de sodium pour former du carbonate de cuivre et du sulfate de sodium."
        },
        {
          id: "ch10",
          text: "Quelle est l'équation de la réaction entre le sulfate de fer et l'hydroxyde de sodium ?",
          options: [
            { id: "a", text: "FeSO₄ + 2NaOH → Fe(OH)₂ + Na₂SO₄" },
            { id: "b", text: "FeSO₄ + NaOH → Fe(OH) + Na₂SO₄" },
            { id: "c", text: "FeSO₄ + NaOH → Fe + Na + SO₄" },
            { id: "d", text: "FeSO₄ + NaOH → Fe(OH) + Na" }
          ],
          correctAnswer: "a",
          explanation: "Le sulfate de fer réagit avec l'hydroxyde de sodium pour former de l'hydroxyde de fer et du sulfate de sodium."
        }
      ]
    }
  ]
};