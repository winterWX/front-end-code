import React from 'react';
import { ShowParams } from '../../../utils/context';

export default function UiShow(){
    return(
        <ShowParams.Consumer>
            {
                val=> ( <span>展示值:{val.name}-{val.age}-{val.sex},{val.date}</span> ) 
            }
        </ShowParams.Consumer>
    )
}
