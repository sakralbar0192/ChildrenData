export const addUniqueId = (array: {id: number}[]): number => {
    let uniqueId:number = array.length+1;
    for (let i=1; i<=array.length; i++) {
        const elementWithSameId = array.find(element=> {
            return element.id === i
        })
        if (elementWithSameId === undefined) {
            uniqueId = i
            break
        }
    }
    return uniqueId
}