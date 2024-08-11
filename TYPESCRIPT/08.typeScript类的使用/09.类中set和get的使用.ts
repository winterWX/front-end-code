class Ref{
    _value: any
    constructor(value: any){
        this._value = value;
    }
    get value(){
        return this._value + 'vvv'
    }
    set value(newValue){
        this._value = newValue + 'hhh'
    }
}

const ref = new Ref('哈哈哈')

console.log('====', ref.value)