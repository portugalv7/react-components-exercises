interface IQ4CountCharProps {
    value: string;
}

const Q4CountChar: React.FC<IQ4CountCharProps> = ({ value }) => (
    <span>{value.length}</span>
);

export default Q4CountChar;
