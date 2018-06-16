export const test = (payload) => {
    console.log(payload);
    
    return ({type : 'TEST', payload})
}