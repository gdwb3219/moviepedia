import { useState } from "react"
import './ReviewForm.css'

function sanitize(type, value) {
  switch (type) {
    case 'number':
      return Number(value) || 0
    default:
      return value
  }
}

function ReviewForm() {
  const [values, setValues] = useState({
    title: '',
    rating: 0,
    content: '',
  })

  const handleChange = (e) => {
    const {name, value, type} = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: sanitize(type, value)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input name="title" value={values.title} onChange={handleChange} />
      <input type="number" name="rating" value={values.rating} onChange={handleChange} />
      <textarea name="content" value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  )
}

export default ReviewForm