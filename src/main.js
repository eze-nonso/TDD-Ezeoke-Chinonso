


const aritGeo = (argList) => {
    if (!(Array.isArray(argList))) {
        return 'input not a list';
    }
    if (argList.length === 0) {
        return 0;
    }
    if (argList.length === 2 || argList.length === 1) {
        return 'insufficient array items'
    }
    if (typeof(argList[0]) !== 'number' && typeof(argList[arglist.length - 1]) !== 'number') {
        return -1;
    }
    let returnVal = 'Arithmetic';
    for (let i = 1; i<argList.length - 1; i++) {
        if (typeof(argList[i]) !== 'number') {
            returnVal = -1;
            break;
        } else {
        if ((argList[i-1] - argList[i]) !== (argList[i] - argList[i+1])) {
            returnVal = 'Geometric';
            if ((argList[i-1] / argList[i]) !== (argList[i] / argList[i+1]) && returnVal !== 'Arithmetic') {
                returnVal = -1;
            }
        }}
    } return returnVal;
}
export default aritGeo;
