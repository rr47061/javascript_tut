import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Counter from './components/counter';

/*
class Hello extends React.Component
{
    render()
    {
        return (
            <h1> hello  </h1>
        )
    }
}

class World extends React.Component
{
    render()
    {
        return (
            <h1>  world </h1>
        )
    }
}
class HelloWorld extends React.Component
{
    constructor()
    {
        super();
        this.name = " rohit";
    }
    getName()
    {
        return "Shoaib";
    }

    render()
    {
        return (

            <section className="foo">
                <Hello/>
                <World/>
                {this.getName()};
                {this.name};
            </section>
        )
    }
}

ReactDom.render(<HelloWorld/>,document.getElementById('root'));

*/


/*
class TodoList extends React.Component
{
    constructor()
    {
        super();
        this.state = { names:['rohit','ranjan','mohit']};
    }

    render()
    {
        return(
            <ul>{
                this.state.names.map(function (name) {
                    return <TodoItem key={name} detail={name}/>
                })
            }
            </ul>

        )
    }
}

class TodoItem extends React.Component
{
    render()
    {
        return (
            <li>
                {this.props.detail}
            </li>
        )
    }
}

ReactDom.render(<TodoList/>,document.getElementById('root'));
*/

ReactDom.render(<Counter/>, document.getElementById("root"));