export const createClassName = (param) => {
    let tempArr = []
    Object.keys(param).forEach((el, index) => {
        if (param[el]) {
            tempArr.push(el)
        }
    })
    return tempArr.join(' ')
}