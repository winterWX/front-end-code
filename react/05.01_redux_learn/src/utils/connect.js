import React, { PureComponent } from 'react';
import store from '../store2';

export default function connect(mapStateToProps, mapDispatchToProps) {
     return function enhanceComponment(WrappedComponment) {
          return class extends PureComponent {

               componentDidMount() {
                    this.unSubscribe = store.subscribe(() => {
                         this.setState({
                              counter: store.getState().counter
                         })
                    })
               }

               componentWillUnmount() {
                    this.unSubscribe();
               }

               render() {
                    return <WrappedComponment {...this.props}
                         {...mapStateToProps(store.getState())}
                         {...mapDispatchToProps(store.dispatch)}
                    />
               }
          }
     }
}