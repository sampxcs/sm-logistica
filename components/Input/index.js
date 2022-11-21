import InputFile from './InputFile'
import InputSelect from './InputSelect'
import InputDefault from './InputDefault'

export default function Input({
  defaultValue,
  disabled,
  error,
  id,
  info,
  label,
  name,
  onChange,
  options,
  pattern,
  placeholder,
  required,
  title,
  autofocus,
  type,
  checked,
  selected,
}) {
  if (type === 'select')
    return (
      <InputSelect
        defaultValue={defaultValue}
        error={error}
        id={id}
        name={name}
        options={options}
        info={info}
        selected={selected}
        label={label}
        onChange={onChange}
      />
    )

  if (type === 'file')
    return (
      <InputFile
        name={name}
        required={required}
        disabled={disabled}
        error={error}
        id={id}
        label={label}
        title={title}
        onChange={onChange}
      />
    )

  return (
    <InputDefault
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      id={id}
      info={info}
      label={label}
      name={name}
      onChange={onChange}
      pattern={pattern}
      placeholder={placeholder}
      required={required}
      title={title}
      autofocus={autofocus}
      type={type}
      checked={checked}
    />
  )
}
