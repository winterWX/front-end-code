import { PureComponent } from "react";
import contextStore from "../context/index"
export default function connect(mapStateToProps, mapDispatchToProps) {
    return function enhanceComponent(WrappedComponent) {
         class EnhanceCnp extends PureComponent {
               constructor(props, context) {
                    super(props, context)
                    this.state = {
                         StoreState: mapStateToProps(context.getState())
                    }
               }
               componentDidMount(){
                    this.unSubscribe = this.context.subscribe(() =>{
                         this.setState({
                             counter: this.context.getState().counter,
                             banner: [...this.context.getState().banner],
                             recommend: [...this.context.getState().recommend] 
                         })
                    })
               }
               componentWillUnmount() {
                    this.unSubscribe();
               }
               render() {
                    return <WrappedComponent {...this.props}
                         {...mapStateToProps(this.context.getState())}
                         {...mapDispatchToProps(this.context.dispatch)}
                    />
               }
         }
         EnhanceCnp.contextType = contextStore;
         return EnhanceCnp;
    }
}