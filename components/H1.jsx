import styles from "./H1.module.css";
import H2 from "./H2";
import H3 from "./H3";
const H1 = (props) => {
  return (
    <>
      <div className={`${styles.calc}`}>
        <H2 val={props.val}></H2>
        <H3 calArr={props.calArr} operators={props.operators} onSetClickButton={props.onSetClickButton} ></H3>
      </div>
    </>
  );
};
export default H1;


