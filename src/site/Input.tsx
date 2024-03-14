import React from 'react';
type inputPropsType = {
    setTitle: (title: string) => void;
    title: string;
};

export const Input = (props: inputPropsType) => {
    const onChangeInputHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.setTitle(event.currentTarget.value);
    };
    return (
        <>
            <h3>Input</h3>
            <input value={props.title} onChange={onChangeInputHandler} />
        </>
    );
};
