interface IQ5FirstCharStringProps {
    value: string;
}

const Q5FirstCharString: React.FC<IQ5FirstCharStringProps> = ({ value }) => (
    <>{value.slice(0, 1)}</>
);

export default Q5FirstCharString;
