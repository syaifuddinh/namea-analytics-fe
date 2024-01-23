export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
}

const Checkbox = (props: CheckboxProps) => (
  <div className="flex items-center gap-[6px] hover:cursor-pointer">
    <input
      className="
        peer relative appearance-none shrink-0 w-4 h-4 rounded border border-solid border-[rgba(223,244,246,0.10)] bg-checkbox
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
        checked:bg-blue-500 checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400
      "
      type="checkbox"
      {...props}
    />
    <svg
      className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <label className="font-light" htmlFor={props.id}>
      {props.label}
    </label>
  </div>
);

export default Checkbox;