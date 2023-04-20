import React from 'react';
import ReactDOM from 'react-dom/client';

class Ex1 extends React.Component {
    state = {
        names: ['Rostik', 'Eren', 'Aizen', 'Light', 'Gats'],
    }

    render() {
        return (
            <ul>
                {this.state.names.map(name => <li>{name}</li>)}
            </ul>
        );
    }
}

class Ex2 extends React.Component {
    state = {
        names: ['Rostik', 'Eren', 'Aizen', 'Light', 'Gats'],
    };

    handleClick = () => {
        const newNames = [...this.state.names, 'пункт'];
        this.setState({ names: newNames });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
                <button onClick={this.handleClick}>Додати пункт</button>
            </div>
        );
    }
}

class Ex3 extends React.Component {
    state = {
        names: ['Rostik', 'Eren', 'Aizen', 'Light', 'Gats'],
        removeCount: 0,
    };

    handleRemoveClick = () => {
        this.setState(prevState => ({
            removeCount: prevState.removeCount + 1,
        }));
    };

    render() {
        const { names, removeCount } = this.state;
        const visibleNames = names.slice(0, names.length - removeCount);

        return (
            <div>
                <ul>
                    {visibleNames.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
                <button onClick={this.handleRemoveClick}>Видалити останній пункт</button>
            </div>
        );
    }
}

class Ex4 extends React.Component {
    state = {
        names: ['Rostik', 'Eren', 'Aizen', 'Light', 'Gats'],
    }

    handleDelete = index => {
        const names = [...this.state.names];
        names.splice(index, 1);
        this.setState({ names });
    }

    render() {
        return (
            <ul>
                {this.state.names.map((name, index) => (
                    <li key={index}>
                        {name}
                        <button onClick={() => this.handleDelete(index)}>Видалити</button>
                    </li>
                ))}
            </ul>
        );
    }
}

class Ex5 extends React.Component {
    state = {
        inputText: '',
    };

    handleInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputText} onChange={this.handleInputChange} />
                <p>{this.state.inputText}</p>
            </div>
        );
    }
}

class Ex6 extends React.Component {
    state = {
        text: '',
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value.toUpperCase() });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <p>{this.state.text}</p>
            </div>
        );
    }
}

class Ex7 extends React.Component {
    state = {
        age: '',
        birthYear: ''
    }

    handleInput = (e) => {
        const age = e.target.value;
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - age;

        this.setState({ age, birthYear });
    }

    render() {
        return (
            <div>
                <input type="number" onInput={this.handleInput} />
                <p>{this.state.birthYear}</p>
            </div>
        );
    }
}

class Ex8 extends React.Component {
    state = {
        fullName: '',
        surname: '',
        name: '',
        patronymic: ''
    }

    handleInputChange = (event) => {
        const fullName = event.target.value;
        const [surname, name, patronymic] = fullName.split(' ');
        this.setState({ fullName, surname, name, patronymic });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInputChange} />
                <p>{this.state.surname}</p>
                <p>{this.state.name}</p>
                <p>{this.state.patronymic}</p>
            </div>
        );
    }
}

class Ex9 extends React.Component {
    state = {
        inputValue: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ inputValue: event.target.input.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="input" />
                    <button type="submit">Відправити</button>
                </form>
                <p>{this.state.inputValue}</p>
            </div>
        );
    }
}

class Ex10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            sum: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSum = this.handleSum.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSum() {
        const { num1, num2 } = this.state;
        const sum = parseInt(num1) + parseInt(num2);
        this.setState({ sum });
    }

    render() {
        const { num1, num2, sum } = this.state;

        return (
            <div>
                <label>
                    Number 1:
                    <input type="number" name="num1" value={num1} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Number 2:
                    <input type="number" name="num2" value={num2} onChange={this.handleChange} />
                </label>
                <br />
                <button onClick={this.handleSum}>Порахувати</button>
                <br />
                <p>Sum: {sum}</p>
            </div>
        );
    }
}

class Ex11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            fullName: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, middleName } = this.state;
        const fullName = `${lastName} ${firstName} ${middleName}`;
        this.setState({ fullName });
    }

    render() {
        const { firstName, lastName, middleName, fullName } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Ім'я:
                        <input type="text" name="firstName" value={firstName} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Прізвище:
                        <input type="text" name="lastName" value={lastName} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        По батькові:
                        <input type="text" name="middleName" value={middleName} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <button type="submit">Відправити</button>
                </form>
                {fullName && <p>Повне ім'я: {fullName}</p>}
            </div>
        );
    }
}


class Ex12 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: ['Rostik', 'Eren', 'Aizen'],
            newUser: ""
        };
    }

    handleInputChange = event => {
        this.setState({ newUser: event.target.value });
    };

    handleButtonClick = () => {
        const { users, newUser } = this.state;
        const updatedUsers = [...users, newUser];
        this.setState({ users: updatedUsers, newUser: "" });
    };

    render() {
        const { users, newUser } = this.state;

        return (
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user}>{user}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newUser}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleButtonClick}>Add user</button>
            </div>
        );
    }
}

class Ex13 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Rostik', 'Eren', 'Aizen'],
            newname: ''
        };
    }

    handleNameChange = (event) => {
        this.setState({ newname: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(state => ({
            names: [...state.names, state.newname],
            newname: ''
        }));
    }

    handleDelete = (index) => {
        this.setState(state => ({
            names: state.names.filter((name, i) => i !== index)
        }));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.names.map((name, index) => (
                        <li key={index}>
                            {name}
                            <button onClick={() => this.handleDelete(index)}>Видалити</button>
                        </li>
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newname} onChange={this.handleNameChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

class Ex14 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hrefs: [
                { href: '1.html', text: 'посилання 1' },
                { href: '2.html', text: 'посилання 2' },
                { href: '3.html', text: 'посилання 3' },
            ],
            newHref: '',
            newText: ''
        };
    }

    handleHrefChange = (event) => {
        this.setState({ newHref: event.target.value });
    }

    handleTextChange = (event) => {
        this.setState({ newText: event.target.value });
    }

    addLink = () => {
        const { hrefs, newHref, newText } = this.state;
        const newLink = { href: newHref, text: newText };
        this.setState({ hrefs: [...hrefs, newLink], newHref: '', newText: '' });
    }

    render() {
        const { hrefs, newHref, newText } = this.state;
        return (
            <div>
                <ul>
                    {hrefs.map((link, index) => (
                        <li key={index}><a href={link.href}>{link.text}</a></li>
                    ))}
                </ul>
                <input type="text" value={newHref} onChange={this.handleHrefChange} />
                <input type="text" value={newText} onChange={this.handleTextChange} />
                <button onClick={this.addLink}>Додати посилання</button>
            </div>
        );
    }
}


class Ex15 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
            itemToDelete: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ itemToDelete: event.target.value });
    }

    handleDeleteItem = () => {
        const { items, itemToDelete } = this.state;
        items.splice(itemToDelete - 1, 1);
        this.setState({ items, itemToDelete: '' });
    }

    render() {
        const { items, itemToDelete } = this.state;

        return (
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div>
                    <input type="number" value={itemToDelete} onChange={this.handleInputChange} />
                    <button onClick={this.handleDeleteItem}>Видалити</button>
                </div>
            </div>
        );
    }
}

class Ex16 extends React.Component {
    state = {
        users: [
            { name: 'Rostik', age: 30 },
            { name: 'Eren', age: 40 },
            { name: 'Aizen', age: 50 },
        ],
        newName: '',
        newAge: '',
    };

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value });
    };

    handleAgeChange = (event) => {
        this.setState({ newAge: event.target.value });
    };

    handleAddUser = () => {
        const { users, newName, newAge } = this.state;
        const newUser = { name: newName, age: newAge };
        this.setState({ users: [...users, newUser], newName: '', newAge: '' });
    };

    handleDeleteUser = (index) => {
        const { users } = this.state;
        this.setState({ users: users.filter((user, i) => i !== index) });
    };

    render() {
        const { users, newName, newAge } = this.state;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Ім'я</th>
                            <th>Вік</th>
                            <th>Видалити</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button onClick={() => this.handleDeleteUser(index)}>Видалити</button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <input type="text" value={newName} onChange={this.handleNameChange} />
                            </td>
                            <td>
                                <input type="text" value={newAge} onChange={this.handleAgeChange} />
                            </td>
                            <td>
                                <button onClick={this.handleAddUser}>Додати</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <p>Ex1</p>
        <Ex1 />

        <p>Ex2</p>
        <Ex2 />

        <p>Ex3</p>
        <Ex3 />

        <p>Ex4</p>
        <Ex4 />

        <p>Ex5</p>
        <Ex5 />

        <p>Ex6</p>
        <Ex6 />

        <p>Ex7</p>
        <Ex7 />

        <p>Ex8</p>
        <Ex8 />

        <p>Ex9</p>
        <Ex9 />

        <p>Ex10</p>
        <Ex10 />

        <p>Ex11</p>
        <Ex11 />

        <p>Ex12</p>
        <Ex12 />

        <p>Ex13</p>
        <Ex13 />

        <p>Ex14</p>
        <Ex14 />

        <p>Ex15</p>
        <Ex15 />

        <p>Ex16</p>
        <Ex16 />


    </div>

);