import classes from "./NumSpinner.module.css";

function NumSpinner(props) {
  return (
    <div className={classes.container}>
      <span className={classes.increase} onClick={props.increase}></span>
      <span className={classes.decrease} onClick={props.decrease}></span>
      <div id={classes.box}>
        <span>{props.value}</span>
      </div>
    </div>
  );
}

export default NumSpinner;
