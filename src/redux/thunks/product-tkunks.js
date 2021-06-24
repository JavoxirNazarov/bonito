import {addProduct} from '../reducers/products-reducer';

export function addProductThunk(product) {
  return (dispatch, getState) => {
    const {products} = getState().productsState;

    const exist = products.some(
      (el) =>
        el.ИД == product.ИД &&
        el.Цвет == product.Цвет &&
        el.Размер == product.Размер &&
        el.Номенклатура == product.Номенклатура &&
        el.Характеристика == product.Характеристика,
    );

    if (!exist) dispatch(addProduct(product));
    else return;
  };
}
