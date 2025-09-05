import styles from './H2.module.css';
import H3 from './H3'
const H2=(props)=>{
return (
  <>
    <div className={`${styles.cal}`}>
      <input type="text" name="display" id="dis" value={props.val} readOnly/>
      </div>
  </>
)
}
export default H2;