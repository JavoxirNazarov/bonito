export function dateParser(date) {
  let day =
    date.getDate() < 10
      ? '0' + date.getDate().toString()
      : date.getDate().toString();
  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month.toString() : month.toString();
  let year = date.getFullYear().toString();

  return day + '-' + month + '-' + year;
}

export function sendDate(date) {
  let day =
    date.getDate() < 10
      ? '0' + date.getDate().toString()
      : date.getDate().toString();
  let month = date.getMonth() < 12 ? date.getMonth() + 1 : 1;
  month = month < 10 ? '0' + month.toString() : month.toString();
  let year = date.getFullYear().toString();

  return year + month + day;
}

export function toCurrency(number) {
  if (number) {
    let num = number.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

    return num;
  } else {
    return '0';
  }
}

export function calculateCost(products) {
  let cost = 0;

  products.forEach((el) => {
    cost += el.amount * el.Цена;
  });

  if (typeof cost == 'number') return cost;
  else if (typeof cost == 'string') return +cost;
  else return 0;
}

export function randomColor() {
  return (
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')'
  );
}

export function isEmpty(obj) {
  return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
}
