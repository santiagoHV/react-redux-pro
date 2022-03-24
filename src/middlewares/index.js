//
export const logActions = store => next => actionInfo => {
    console.log('disparando', actionInfo);
    console.log('middleware');
    next(actionInfo);
}