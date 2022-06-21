import styles from './OptionSize.module.scss'
import clsx from 'clsx';
import shortid from 'shortid';

const OptionSize = ({sizes, setCurrentSize, currentSize}) => {
  return (
    <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) =>
                <li key={shortid()}><button type="button" onClick={() => setCurrentSize(size)} className={clsx(currentSize === size && styles.active)}>{size.name}</button></li>
              )}
            </ul>
          </div>
  )
}
export default OptionSize;