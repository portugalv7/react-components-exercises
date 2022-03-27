interface IQ12CharPositionProps {
    text: string;
    position: number;
}

const Q12CharPosition: React.FC<IQ12CharPositionProps> = ({
    text,
    position,
}) => <p>{position > text.length ? 'inválido' : text.charAt(position)}</p>;

export default Q12CharPosition;
