import './App.css';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"
import React, { Component } from 'react';

class App extends Component {
  // 컴포넌트가 실행될 때 render 보다 먼저 실행돼서 컴포넌트를 초기화함.
  constructor(props){
    super(props);
    this.state = {
      mode : 'welcome',
      selected_content_id : 2,
      subject : {title:'WEB', sub:'World wide web!'},
      welcome : {title:'Welcome', desc:'Hello, React!!'},
      contents : [
        {id:0, title:'HTML', desc:'HTML is HyperText ...'},
        {id:1, title:'CSS', desc:'CSS is for design ...'},
        {id:2, title:'JavaScript', desc:'JavaScript is for interactive ...'}
      ]
    }
  }

  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[this.state.selected_content_id].title;
      _desc = this.state.contents[this.state.selected_content_id].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >  
        </Subject>
        <TOC 
          data={this.state.contents}
          onChangePage={function(data){
            this.setState({
              mode:'read',
              selected_content_id:data
            })
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
