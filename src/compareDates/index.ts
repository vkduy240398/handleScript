export default  function compareDate(current: string, startTime: string, endTime: string){
    const date_regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    if(current.match(date_regex) && startTime.match(date_regex) && endTime.match(date_regex)){
        const currentDate = reverseString(current, current.match(date_regex)?.[4] || '/').split(current.match(date_regex)?.[4] || '/');
        const start = reverseString(startTime, startTime.match(date_regex)?.[4] || '/').split(startTime.match(date_regex)?.[4] || '/');
        const end = reverseString(endTime, endTime.match(date_regex)?.[4] || '/').split(endTime.match(date_regex)?.[4] || '/');
        // 
        const newDatesCurr = new Date(parseInt(currentDate[0]), parseInt(currentDate[1]) - 1, parseInt(currentDate[2]))
        const newDatesStart = new Date(parseInt(start[0]), parseInt(start[1]) - 1, parseInt(start[2]))
        const newDatesEnd = new Date(parseInt(end[0]), parseInt(end[1]) - 1, parseInt(end[2]))
        const results: boolean = (newDatesCurr.getTime() >= newDatesStart.getTime() && newDatesCurr.getTime() <= newDatesEnd.getTime())
        return results
    }
    else
    {
        return false
    }
    
   
}
function reverseString(string: string, characters: string){
    const arrayStrings = string.split(characters);
    const reverse = arrayStrings.reverse();

    return reverse.join(characters)
}