import React from 'react';
import { connect } from 'react-redux'
import {
     getMutildata
} from '../../store2/contantCroart';


class Profiler extends React.PureComponent {
     constructor(props) {
          super(props);

          this.state = {};
     }
     componentDidMount() {
          this.props.getMutilList();
     }
     render() {
          return <div>
               <h1>我是展示异步数据的组件</h1>
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
          </div>;
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
          getMutilList() {
               dispatch(getMutildata);
          }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profiler);