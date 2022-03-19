interface IQ9MultiplyStringSeparatorProps {
    text: string;
    times: number;
}
const Q9MultiplyStringSeparator: React.FC<IQ9MultiplyStringSeparatorProps> = ({
    text,
    times,
}) => <span> {text.concat(', ').repeat(times)} </span>;

export default Q9MultiplyStringSeparator;
