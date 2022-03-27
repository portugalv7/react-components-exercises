interface IQ13ReplaceCharProps {
    text: string;
    char: string;
    substitute: string;
}

const Q13ReplaceChar: React.FC<IQ13ReplaceCharProps> = ({
    text,
    char,
    substitute,
}) => <p>{text.replaceAll(char, substitute)}</p>;

export default Q13ReplaceChar;
