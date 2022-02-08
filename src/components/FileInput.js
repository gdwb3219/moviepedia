function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0]
    onChange(name, nextValue)
    console.log(e.target.value)
  }

  return <input type="file" onChange={handleChange} />
}

export default FileInput