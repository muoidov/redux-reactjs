var initialState={
	sort:{
		by:'name',value:1
	}
}
var myReducer=(state=initialState,action)=>{

	if(action.type==='sort'){
		// state.sort={
		// 	by: action.sort.by,
		// 	value:action.sort.value
		// }
		var {by,value}=action.sort;
		//var {status}=state ;
		return {by,value};
	}
	return state;
}
export default myReducer;