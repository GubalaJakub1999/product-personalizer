import styles from './Product.module.scss';
import PropTypes, { element } from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const getPrice = useMemo(() => {
    const foundSize = props.sizes.find(element => element.name === currentSize.name)

    return props.basePrice + foundSize.additionalPrice
  }, [currentSize.name, props.basePrice, props.sizes])

  return (
    <article className={styles.product}>
      <ProductImage title={props.title}  currentColor={currentColor} name={props.name}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm currentSize={currentSize} title={props.title} currentColor={currentColor} getPrice={getPrice} colors={props.colors} setCurrentColor={setCurrentColor} sizes={props.sizes} setCurrentSize={setCurrentSize}/>
      </div>
    </article>
  )
};
Product.propTypes = {
  title: PropTypes.string.isRequired
};
export default Product;