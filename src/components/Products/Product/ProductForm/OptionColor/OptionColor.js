import styles from './OptionColor.module.scss'
import shortid from 'shortid';
import clsx from 'clsx';

const OptionColor = ({colors, setCurrentColor, currentColor}) => {
  return (
    <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) =>
                <li key={shortid()}><button type="button" onClick={() => setCurrentColor(color)} className={clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()], currentColor === color && styles.active)} /></li>
              )}
            </ul>
          </div>
  )
}
export default OptionColor;