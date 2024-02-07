import Child from "./Child";
import { ChildDestructure } from "./Child";
const Parent = () => {
  const propTitle = "This is a Prop title example written in Parent component";
  const propObj = {
    key1: "Parent object value 1",
    key2: "Parent object value 2",
  };
  const destructureTitle = "Destructure Parent Title";
  const propsObjDestructure = {
    key1: "Parent Destructure object value 1",
    key2: "Parent Destructure object value 2",
  };
  return (
    <>
      <h1>This is Message is from Parent Component</h1>
      <Child title={propTitle} obj={propObj} />
      <ChildDestructure title={destructureTitle} obj={propsObjDestructure} />
    </>
  );
};

export default Parent;
