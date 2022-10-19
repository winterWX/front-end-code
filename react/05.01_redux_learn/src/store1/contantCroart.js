import {
     ABOUT_ADD,
     ABOUT_INCREMENT,
     HOME_ADD,
     HOME_INCREMENT
} from './contant.js'


export const aboutAdd = (num) => {
     return {
          type: ABOUT_ADD,
          num
     }
}

export const aboutIncrement = (num) => ({ type: ABOUT_INCREMENT, num });

export const homeAdd = (num) => ({ type: HOME_ADD, num });

export const homeIncrement = (num) => ({ type: HOME_INCREMENT, num });


