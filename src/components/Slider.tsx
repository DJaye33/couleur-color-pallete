type SliderProps = {
  min: string;
  max: string;
  name: string;
  step: string;
};

const Slider = ({ min, max, name, step }: SliderProps) => {
  return (
    <div>
      <div>{name}</div>
      <input
        type="range"
        min={min}
        max={max}
        name={name.toLowerCase()}
        step={step}
      />
    </div>
  );
};

export default Slider;
