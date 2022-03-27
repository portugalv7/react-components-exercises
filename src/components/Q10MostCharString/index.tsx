interface IQ10MostCharStringProps {
    text1: string;
    text2: string;
}

const Q10MostCharString: React.FC<IQ10MostCharStringProps> = ({
    text1,
    text2,
}) => <span>{text1.length > text2.length ? text1 : text2}</span>;

export default Q10MostCharString;
