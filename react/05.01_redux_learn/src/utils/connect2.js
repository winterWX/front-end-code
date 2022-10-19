// 改造connect

import React, { PureComponent } from 'react';

import StoreState from './context';

export default function connect(mapStateToProps, mapDispatchToProps) {
     
     return function enhanceComponment(WrappedComponment) {
          
          class EnhanceCnp extends PureComponent {
               constructor(props, context) {
                    super(props, context)
                    this.state = {
                         StoreState: mapStateToProps(context.getState())
                    }
               }


               componentWillUnmount() {
                    this.unSubscribe();
               }

               render() {
                    return <WrappedComponment {...this.props}
                         {...mapStateToProps(this.context.getState())}
                         {...mapDispatchToProps(this.context.dispatch)}
                    />
               }

          }

          EnhanceCnp.contextType = StoreState;
          return EnhanceCnp;
     }
}