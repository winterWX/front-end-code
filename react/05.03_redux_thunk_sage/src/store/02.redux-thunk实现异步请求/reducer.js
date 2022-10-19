import {
    BANNERLIST,
    RECOMMENDLIST
  } from './actionTypes'
  const nameInitialState = {
        banner :[],
        recommend :[]
  }
  const reducer = (state = nameInitialState, action) => {
      switch (action.type) {
          case BANNERLIST:
              return {...state,...{ banner: [...state.banner,...action.list] }} 
          case RECOMMENDLIST:
              return {...state,...{ recommend: [...state.recommend,...action.list] }}  
          default:
              return state
      }
  }
  
  export default reducer