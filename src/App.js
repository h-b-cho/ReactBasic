import React, { Component } from 'react';
import Subject from "./components/Subject"
import Toc from "./components/Toc"
import Content from "./components/Content"
import './App.css';

class App extends Component {
    // 어떠한 컴포넌트가 실행될 때, render() 보다 constructor라는 함수가 먼저 실행해서 초기화 담당한다.
    constructor(props){
        super(props);
        this.state = {
            mode: 'read',
            subject: {title: 'WEB', sub: 'world wide web!'},
            welcome: {title: 'Welcome', desc: 'Hello React!!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'}
            ]
        }
    }
    render() {
        console.log('App render');
        var _title, _desc = null;
        if(this.state.mode === "welcome"){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if(this.state.mode === "read"){
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        return (
            <div className="App">
                <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
                <Toc data={this.state.contents}></Toc>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;