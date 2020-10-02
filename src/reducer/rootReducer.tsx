const initState = {
  companyId: "",
  companyName: "",
  survies: [],
  userId: 0,
  userType: 0,
  companyLogo: "",
  surveyId: "",
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
    case 'SURVEYID_INPUT':
      return {
        ...state,
        surveyId: action.surveyId
      }
  }
  return state
}

export default rootReducer;