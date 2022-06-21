import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize';
import styles from './ProductForm.module.scss'
import Button from '../../../Button/Button';

const ProductForm = ({currentSize, title, currentColor, getPrice, colors, setCurrentColor, sizes, setCurrentSize}) => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=========');
    console.log('Name: ' + title);
    console.log('Price: ' + getPrice + '$');
    console.log('Size: ' + currentSize.name);
    console.log('Color: ' + currentColor);
  }

  return (
    <form onSubmit={handleSubmit}>
          <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} currentSize={currentSize}/>
          <OptionColor colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor}/>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
  )
};

export default ProductForm;