import * as types from './../cons/actiont.js';

export const status =()=>{
	return{
	type: types.TG_STT
	};
}
export const sort=(sort)=>{
	return {
	type:types.sort,
	sort
	};}
