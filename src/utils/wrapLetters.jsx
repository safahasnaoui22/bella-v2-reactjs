export const wrapLetters = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter">
        {char}
      </span>
    ));
  };
  