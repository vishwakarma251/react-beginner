const Child = (props) => {
  return (
    <>
      This is a Child Component
      <br />
      <br />
      title: {props.title}
      <br />
      <br />
      Object value 1: {props.obj.key1}
      <br />
      Object value 2: {props.obj.key2}
      <br />
      <br />
    </>
  );
};

export default Child;

export const ChildDestructure = ({ title, obj }) => {
  return (
    <>
      This is a Child Destructure Component <br /> <br />
      Destructure Title: {title}
      <br /> <br />
      Destructure Object Value 1: {obj.key1}
      <br /> <br />
      Destructure Object Value 2: {obj.key2}
      <br /> <br />
    </>
  );
};
