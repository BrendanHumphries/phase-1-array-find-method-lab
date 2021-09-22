
function superbowlWin(record) {
    let isTrue = record.find(item => item.result === 'W');
    if (isTrue === undefined) {
        return undefined;
    } else {
        return record.find(item => item.result === 'W').year;
    }
}