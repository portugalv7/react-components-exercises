interface IQ11InnerStringProps {
    text1: string;
    text2: string;
}

const Q11InnerString: React.FC<IQ11InnerStringProps> = ({ text1, text2 }) => (
    <p>{text1.includes(text2) ? 'sim' : 'não'}</p>
);

export default Q11InnerString;
