const questions = [
  "Você já testemunhou ou experimentou pessoalmente um incidente de racismo? Como isso afetou você?",
  "Como você acredita que suas próprias experiências de vida moldaram sua compreensão do racismo?",
  "Qual foi o momento em que você percebeu pela primeira vez a existência do racismo?",
  "Você já se viu perpetuando estereótipos raciais sem perceber? Como isso te fez sentir?",
  "Quais são as maneiras pelas quais você procura combater o racismo em sua vida cotidiana?",
  "Como as suas próprias origens étnicas influenciam a sua perspectiva sobre o racismo?",
  "Você já teve uma conversa difícil com alguém sobre racismo? Como foi essa experiência?",
  "Em que medida você acha que a sua educação formal abordou questões relacionadas ao racismo?",
  "Como você acha que as redes sociais influenciam a maneira como as pessoas percebem o racismo?",
  "Qual foi o momento mais impactante em que você viu pessoas unidas para combater o racismo?",
  "Você já mudou a sua opinião sobre o racismo após aprender mais sobre o assunto? O que motivou essa mudança?",
  "Como você acha que a representação de diferentes grupos raciais nos meios de comunicação afeta a sociedade?",
  "Você já sentiu que não pôde expressar suas preocupações sobre racismo com medo de ser mal compreendido(a)?",
  "Quais são os desafios específicos que você acredita que as minorias raciais enfrentam em sua comunidade?",
  "Como as suas próprias crenças e valores moldaram a maneira como você aborda o racismo?",
  "Você já teve um momento de autodescoberta em relação aos seus próprios preconceitos? O que você fez a respeito?",
  "Qual foi a última vez que você aprendeu algo novo sobre racismo? O que você aprendeu?",
  "Como você equilibra o reconhecimento das diferenças raciais com o desejo de tratar todos de maneira igual?",
  "Você já teve dificuldades para se conectar com alguém devido a diferenças culturais ou raciais? Como superou isso?",
  "O que você acredita que pode ser feito para melhorar a educação sobre racismo nas escolas?",
  "Você já sofreu algum tipo de preconceito racial?",
];

const generateBtn = document.getElementById("generateBtn");
const questionDisplay = document.getElementById("questionDisplay");

generateBtn.addEventListener("click", generateRandomQuestion);

function generateRandomQuestion() {
  if (questions.length === 0) {
    questionDisplay.textContent =
      "Parabéns, você respondeu a todas as perguntas!";
    generateBtn.disabled = true; // Desativa o botão quando todas as perguntas foram respondidas.
    return;
  }

  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions.splice(randomIndex, 1)[0];
  questionDisplay.textContent = randomQuestion;
}
