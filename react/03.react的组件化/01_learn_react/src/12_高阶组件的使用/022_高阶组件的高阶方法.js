
export default function enhanceComponent(WrappedComponent) {
     return props => {
          return (
               <WrappedComponent {...props}  level={10} auth="周树人" />
          )
     }
}

