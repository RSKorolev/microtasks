import './App.css';
import { Body } from './site/Body';
import { Header } from './site/Header';
import { Footer } from './site/Footer';
import { NewComponent } from './site/NewComponent';
import { NewComponent1 } from './site/NewComponent1';
import { Button } from './site/Button';
import { useState } from 'react';
import { FullInput } from './site/FullInput';
import { Input } from './site/Input';
function App() {
    const students = [
        { id: 1, name: 'James', age: 8 },
        { id: 2, name: 'Robert', age: 18 },
        { id: 3, name: 'John', age: 28 },
        { id: 4, name: 'Michael', age: 38 },
        { id: 5, name: 'William', age: 48 },
        { id: 6, name: 'David', age: 58 },
        { id: 7, name: 'Richard', age: 68 },
        { id: 8, name: 'Joseph', age: 78 },
        { id: 9, name: 'Thomas', age: 88 },
        { id: 10, name: 'Charles', age: 98 },
        { id: 11, name: 'Christopher', age: 100 },
    ];
    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' },
    ];
    // const myFirstSubmit = () => {
    //     alert('Hello! Im Rus!');
    // };
    // const myFirstSubmit1 = () => {
    //     alert('Hello! Im Ivan!');
    // };

    const onClickHandler = (name: string) => {
        alert(name);
    };
    const foo1 = () => {
        alert(34);
    };
    const foo2 = (number: number) => {
        alert(number);
    };

    const Button1Foo = (name: string, age: number, addres: string) => {
        alert(`${name} ${age} ${addres}`);
    };

    const Button1Foo1 = () => {
        alert('Я тупая кнопка');
    };
    let initialState = 1;
    let [count, setCount] = useState(initialState);
    const onClickHandlerCount = () => {
        setCount(++count);
    };
    const onClickHandlerCountZero = () => {
        setCount((count = 0));
    };

    type FilterType = 'all' | 'dollar' | 'ruble';

    const [money, setMoney] = useState([
        { banknote: 'dollar', nominal: 100, number: ' a1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' z1234567890' },
        { banknote: 'ruble', nominal: 100, number: ' w1234567890' },
        { banknote: 'dollar', nominal: 100, number: ' e1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' c1234567890' },
        { banknote: 'ruble', nominal: 100, number: ' r1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' x1234567890' },
        { banknote: 'ruble', nominal: 50, number: ' v1234567890' },
    ]);

    const [filter, setFilter] = useState('all');
    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter(
            (filteredMoney) => filteredMoney.banknote === 'dollar'
        );
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(
            (filteredMoney) => filteredMoney.banknote === 'ruble'
        );
    }

    const onClickHandlerFilter = (nameButton: FilterType) => {
        setFilter(nameButton);
    };

    const [message, setMessage] = useState([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' },
        { message: 'message4' },
        { message: 'message5' },
    ]);

    const [title, setTitle] = useState('');
    const callBackButterHundler = () => {
        addToMessage(title);
        setTitle('');
    };

    const addToMessage = (title: string) => {
        let newMessage = { message: title };
        setMessage([newMessage, ...message]);
    };
    return (
        <div className="App">
            {/* <Header title={'New Header'} />
            <Body title={'New Body'} />
            <Footer title={'New Footer'} /> */}
            <NewComponent students={students} />
            <NewComponent1 Cars={topCars} />
            {/* <button
                onClick={(event) => {
                    alert('Hello!');
                }}
            >
                My button
            </button> */}
            <button onClick={() => onClickHandler('Rus')}>My button</button>
            <button onClick={() => onClickHandler('Ivan')}>My button</button>
            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(34)}>2</button>
            <div>
                <Button
                    name={'My Button 1'}
                    callBack={() => Button1Foo('Hello BelloRus', 34, 'Sib')}
                />
            </div>
            <div>
                <Button
                    name={'My Button 2'}
                    callBack={() => Button1Foo('Hello Rus', 24, 'Tomsk')}
                />
                <Button name={'Я тупая кнопка'} callBack={Button1Foo1} />
            </div>
            <div>
                <h3>{count}</h3>
                <button onClick={onClickHandlerCount}>Счетчик</button>
                <button onClick={onClickHandlerCountZero}>Zero</button>
            </div>
            <div>
                <Button
                    name={`Счетчик ${count}`}
                    callBack={onClickHandlerCount}
                />
                <Button name={'Zero'} callBack={onClickHandlerCountZero} />
            </div>
            <div className="filter">
                <ul>
                    {currentMoney.map((objFromMoneyArr, i) => {
                        return (
                            <li key={i}>
                                <span>{objFromMoneyArr.banknote}</span>
                                <span>{objFromMoneyArr.nominal}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        );
                    })}
                </ul>
                <Button
                    name={'All'}
                    callBack={() => onClickHandlerFilter('all')}
                />
                <Button
                    name={'dollar'}
                    callBack={() => onClickHandlerFilter('dollar')}
                />
                <Button
                    name={'rubl'}
                    callBack={() => onClickHandlerFilter('ruble')}
                />
            </div>
            <div className="FullInput">
                <FullInput addToMessage={addToMessage} />
                {message.map((el, index) => {
                    return <div key={index}>{el.message}</div>;
                })}
            </div>
            <div className="Input">
                <Input setTitle={setTitle} title={title} />
                <Button name={'+'} callBack={callBackButterHundler} />
                {message.map((el, index) => {
                    return <div key={index}>{el.message}</div>;
                })}
            </div>
        </div>
    );
}

export default App;
