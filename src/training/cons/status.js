var initialState=false;

var myReducer=(state=initialState,action)=>{
	if(action.type==='TG_STT'){
		state=!state;
		return state;
	}return state;
}
export default myReducer;