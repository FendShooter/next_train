function Title({ text, classes }) {
  return <div className={classes}>{text}</div>;
}

export default Title;

Title.defaultProps = {
  text: 'My big Texts',
};
