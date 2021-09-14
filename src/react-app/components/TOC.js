import React, { Component } from 'react';

class TOC extends Component {
    render(){
      var lists = [];
      var data = this.props.data;
      var i=0;

      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
              // 이런 식으로도 할 수 있음
              /*onClick={function(id, e){ // 원래 객체가 한 칸 씩 뒤로
                e.preventDefault();
                this.props.onChangePage(id);
              }.bind(this, data[i].id)}*/
            >
              {data[i].title}
            </a>
          </li>
        );
        i=i+1;
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

 export default TOC;