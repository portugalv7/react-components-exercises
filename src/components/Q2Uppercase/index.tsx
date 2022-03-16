interface IQ2StringProps {
    value: string;
}

const Q2Uppercase: React.FC<IQ2StringProps> = ({ value }) => (
    <>{value.toLocaleUpperCase()}</>
);

export default Q2Uppercase;
