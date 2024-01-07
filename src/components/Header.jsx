import quizLogo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={quizLogo} alt="Quiz logo" />
      <h1>ReactQuizz</h1>
    </header>
  );
}

export default Header;
