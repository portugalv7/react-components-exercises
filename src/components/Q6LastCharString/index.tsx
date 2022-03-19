interface IQ6LastCharStringProps {
    value: string;
}

const Q6LastCharString: React.FC<IQ6LastCharStringProps> = ({ value }) => (
    <>{value.slice(value.length - 1, value.length)}</>
);

export default Q6LastCharString;
