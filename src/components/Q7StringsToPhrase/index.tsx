interface IQ7StringsToPhraseProps {
    phrase1: string;
    phrase2: string;
}

const Q7StringsToPhrase: React.FC<IQ7StringsToPhraseProps> = ({
    phrase1,
    phrase2,
}) => (
    <span>
        {' '}
        {phrase1} {phrase2}{' '}
    </span>
);

export default Q7StringsToPhrase;
