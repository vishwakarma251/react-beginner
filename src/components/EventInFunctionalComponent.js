function EventFunctionalComponent() {
  const handleEvent = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <button type="button" onClick={handleEvent}>
        Click Here
      </button>
    </div>
  );
}

export default EventFunctionalComponent;
