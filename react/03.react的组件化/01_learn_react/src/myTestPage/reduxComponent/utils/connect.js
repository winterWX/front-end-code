import { PureComponent } from "react";
//import store from "../store/index";
import storeContext from "./context";

export default function connect(mapStateToProps, mapDispatchToProps) {
    return function enhanceComponment(WrappedComponment) {
         class EnhancerComponent extends PureComponent {
              constructor(props,context){
                  super(props,context)
                  this.state={
                    defaultState: mapStateToProps(context.getState())
                  }
              }

              componentDidMount() {
                   this.unSubscribe = this.context.subscribe(() => {
                        this.setState({
                              defaultState: mapStateToProps(this.context.getState())
                        })
                   })
              }

               componentWillUnmount() {
                    this.unSubscribe();
               }
               // mapStateToProps 和 mapDispatchToProps 是函数调用。
               render() {
                    return <WrappedComponment {...this.props}
                         {...mapStateToProps(this.context.getState())}
                         {...mapDispatchToProps(this.context.dispatch)}
                    />
               }
          }

          EnhancerComponent.contextType = storeContext;

          return  EnhancerComponent
          
    }
}
