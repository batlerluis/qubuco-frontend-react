const initState = {
  companyId: "",
  companyName: "",
  survies: [],
  userId: 0,
  userType: 0,
  companyLogo: "",
}

const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'COMPANY_NAME':
      return {
        ...state,
        companyId: action.companyId,
        companyName: action.companyName,
        companyLogo: action.companyLogo,
      }
    case 'COMPANY_ADD':
      return {
        ...state,
        companyId: action.companyId,
        companyName: action.companyName,
      }
    case 'SURVEY_LOAD':
      return {
        ...state,
        survies: action.survies,
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