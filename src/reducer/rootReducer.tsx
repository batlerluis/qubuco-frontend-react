const initState = {
  companyInfo: {},
  snackInfo: {},
  companyId: "",
  companyName: "",
  survies: [],
  userId: 0,
  userType: 0,
  companyLogo: "",
}

const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'SNACK':
      return {
        ...state,
        snackInfo: action.snackInfo
      }
    case 'COMPANY_SELECT':
      return {
        ...state,
        companyInfo: action.companyInfo
      }
    case 'SURVEY_SELECT':
      return {
        ...state,
        userType: action.userType
      }
    case 'USER_ID':
      return {
        ...state,
        userId: action.uid
      }
  }
  return state
}

export default rootReducer;