import { isObject } from "@vue/shared";
import { reactive } from "./reactive";
import { activeEffect, trackEffects, triggerEffects } from "./effect";

export function ref(value){
    return new RefImpl(value);
}


class RefImpl {
    private _value = null;
    private __v_isRef = true;
    private dep = null;
    constructor(public rawValue){
        this._value = toReactive(rawValue) 
    }
    get value(){
        if(activeEffect){
            trackEffects(this.dep ||(this.dep = new Set()))
        }
        return this._value
    }
   set value(newValue){
        if(newValue !== this.rawValue){
            this._value = toReactive(newValue)
            this.rawValue = newValue
            triggerEffects(this.dep)
        }
   }
}


export function toReactive(value){
    return isObject(value) ? reactive(value):value
}

