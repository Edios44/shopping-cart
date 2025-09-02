import classes from "./button.module.css";

export default function Button({ content, style, handler }) {
  return (
    <>
      <button className={classes[style]} onClick={handler}>
        {content}
      </button>
    </>
  );
}
