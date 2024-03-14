import { useState, ChangeEvent } from 'react';
export type FullInputPropsType = {
    addToMessage: (title: string) => void;
};
export const FullInput = (props: FullInputPropsType) => {
    const [title, setTitle] = useState('');

    const onChangeInputHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTitle(event.currentTarget.value);
    };
    const onClickButtonHandler = () => {
        props.addToMessage(title);
        setTitle('');
    };
    return (
        <div className="App">
            <h3>FullInput</h3>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
