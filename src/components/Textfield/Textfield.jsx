import classNames from 'classnames/bind';
import styles from './Textfield.module.scss';

const cx = classNames.bind(styles);

function Textfield({ placeholder, className }) {
  const classes = cx('wrapper', {
    [className]: className,
  });
  return <input className={classes} placeholder={placeholder} />;
}

export default Textfield;
