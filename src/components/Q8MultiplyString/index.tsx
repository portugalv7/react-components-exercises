interface IQ8MultiplyStringProps {
    text: string;
    times: number;
}

const Q8MultiplyString: React.FC<IQ8MultiplyStringProps> = ({
    text,
    times,
}) => <span>{text.repeat(times)}</span>;

export default Q8MultiplyString;
