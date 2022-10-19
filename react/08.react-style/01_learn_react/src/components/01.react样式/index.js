import React, {PureComponent} from 'react';

import { TopDiv } from './style';

class index extends PureComponent {
     constructor(props) {
          super(props);

          this.state = {
              bgColor: 'red'              
          };
     }

     render() {
          return (
               <TopDiv>
                  <div>dadasdasd</div>
                  <h2 className='title titleDefalut'>styled-component 的使用</h2>
                  <span className='span_style'>span 内容</span>
                  <p  className="pContext" bgColor={this.state.bgColor}>我是P标签的数据</p>
               </TopDiv>
          );
     }
}

export default index;

