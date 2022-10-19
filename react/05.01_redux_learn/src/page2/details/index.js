import React from 'react';
import { connect } from 'react-redux';
import {
     getActionFethData
} from '../../store2/contantCroart'

class Details extends React.PureComponent {
     constructor(props) {
          super(props);

          this.state = {
          };
     }
     componentDidMount() {
          this.props.getfetchData()
     }
     render() {
          return <div>
               <h1>我是用saga实现数据请求的：</h1>
               <ul>
                    {
                         this.props.banner.map(item => {
                              return <li key={item.acm}>{item.title}</li>
                         })
                    }
               </ul>
               <ul>
                    {
                         this.props.recommend.map(item => {
                              return <li key={item.acm}>{item.title}</li>
                         })
                    }
               </ul>
          </div>
     }
}

const mapStateToProps = state => {
     return {
          banner: state.banner,
          recommend: state.recommend
     }
}

const mapDispatchToProps = dispatch => {
     return {
          getfetchData() {
               dispatch(getActionFethData);
          }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);