import styles from './H4.module.css';
const H4=(props)=>{
return (
  <>
   <div className={`${styles.k} col-4`}>
      <button onClick={
        ()=>{
    props.onSetClickButton(props.item);
        }
      } className="w-100">{props.item}</button>
      </div>
  </>
)
}
export default H4;