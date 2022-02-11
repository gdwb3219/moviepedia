import { useRef } from "react"

function FileInput({ name, value, onChange }) {
  const inputRef = useRef()

  const handleChange = (e) => {
    const nextValue = e.target.files[0]
    onChange(name, nextValue)
    // console.log(e.target.value)
  }

  const handleClearChange = () => {
    const inputNode = inputRef.current
    if (!inputNode) return

    inputNode.value = ''
    onChange(name, null)
  }

  return (
    <div>
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearChange}>X</button>}
    </div>
  )
}

export default FileInput