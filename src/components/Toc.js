import React, { Component } from 'react';

class Toc extends Component {
    render() {
        var lists = [];
        var data =this.props.data;
        var i = 0;
        // while문
        // while(i < data.length){
        //     lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
        //     i = i + 1;
        // }
        // for문
        for(i = 0; i < data.length; i++){
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default Toc;