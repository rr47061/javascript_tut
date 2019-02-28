import React, {Component} from 'react';

// export default class Counter extends Component
class Counter extends Component {

    state = {
        count: 0,
        // imageUrl: "https://picsum.photos/200/300?random",
        tags: [],
        tags1: ["tag1", 'tag2', 'tag3']
    };

    style = {
        fontSize: 50,
        fontWeight: "bold"
    };

    /*constructor()
    {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    */
    //handleIncrement() //undefined due  to this
    //handleIncrement=() =>
    handleIncrement = (product) => {
        console.log(product);
        //console.log("increment is clicked",this);
        this.setState({count: this.state.count + 1});
    };

    doHandleIncrement = () => {
        this.handleIncrement({id: 1});
    };

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    };

    render() {

        // let classes = this.getBadgeClasses();


        //return <h1> Hello world </h1>;

        return (
            <div>
                {/*<img src = "https://picsum.photos/200/300" alt="myimage"/>
                <img src = {this.state.imageUrl} alt="myimage"/>
                <button style={this.style}>test_button</button>
                 <span className="badge badge-warning m-2" >{"hello"}</span>
                <span style={{fontSize: 30}}>{this.formatCount()}</span>
                */}


                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/*<button onClick={this.handleIncrement }*/}
                {/*<button onClick={()=>this.handleIncrement (product)  }*/}
                <button onClick={() => this.handleIncrement({id: 1})}
                        className="btn btn-secondary btn-sm">Increment
                </button>
                <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>

                {this.state.tags.length === 0 && "please crete a new tag!"}
                {this.renderTags()}

            </div>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p> there are no tags !</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
