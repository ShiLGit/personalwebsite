import * as actionTypes from "../actions/actionTypes";

const defaultState = {
	webDevTS: "",
	schoolTS: "",
	otherTS: "",

	bio: ""
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.LOAD_FPAGEDATA:
			return { ...action.fpageData };
	}
};

export default reducer;
