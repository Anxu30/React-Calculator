import styles from './H3.module.css';
import H4 from './H4'
const H3=(props)=>{
return (
  <>
  <div className={`${styles.key} row`}>
    {props.calArr.map((item,index)=>(
   <H4 key={index} item={item}  onSetClickButton={ props.onSetClickButton}></H4>
    ))
    }
    
    </div>
  </>
)
}
export default H3;