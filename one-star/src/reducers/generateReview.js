const generateReview = (state = {}, action) => {
  switch(action.type) {
    case 'GENERATE_REVIEW':
      return action.review;
    default:
      return state;
  }
};

export default generateReview;
