export default function compareObject(objectOrigin: any, object: any){
    // objectOrigin: original object
    // object: object to compare
    let arrays = {};
    Object.keys(objectOrigin).forEach((v) => {
      if(Object.keys(object).find(val => val === v)){
        if(objectOrigin[v] !== object[v]){
            arrays= {
                ...arrays,
                [v]: objectOrigin[v]
            }
        }
      }
    });
    return arrays;
}