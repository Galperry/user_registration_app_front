function descCompare(a, b, orderBy) {
  if (orderBy !== "age"){
    if (b[orderBy].toLowerCase() < a[orderBy].toLowerCase()) {
      return -1;
    }
    else {
      return 1;
    }
  }
  else{
    if (b[orderBy] - a[orderBy] < 0) {
      return -1;
    }
    else{
      return 1;
    }
  }
}
  
export function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descCompare(a, b, orderBy)
      : (a, b) => -descCompare(a, b, orderBy);
}

export function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}