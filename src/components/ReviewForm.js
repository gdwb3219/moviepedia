import { useState } from "react"
import useTranslate from "../hooks/useTranslate"
import FileInput from "./FileInput"
import useAsync from "../hooks/useAsync"
import RatingInput from "./RatingInput"
import './ReviewForm.css'

const INITIAL_VALUES = {
  title: '',
  rating: 0,
  content: '',
  imgFile: null,
}

function ReviewForm({ initialValues = INITIAL_VALUES, initialPreview, onSubmitSuccess, onCancel, onSubmit }) {
  const t = useTranslate()
  const [isSubmitting, submittingError, onSubmitAsync ] = useAsync(onSubmit)
  const [values, setValues] = useState(initialValues)

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target
    handleChange(name, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', values.title)
    formData.append('rating', values.rating)
    formData.append('content', values.content)
    formData.append('imgFile', values.imgFile)

    const result = await onSubmitAsync(formData)
    if (!result) return
    
    const { review } = result
    onSubmitSuccess(review)
    setValues(INITIAL_VALUES);
  }

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgFile" value={values.imgFile} initialPreview={initialPreview} onChange={handleChange} />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput name="rating" value={values.rating} onChange={handleChange} />
      <textarea name="content" value={values.content} onChange={handleInputChange} />
      {onCancel && <button onClick={onCancel}>{t('cancel button')}</button>}
      <button type="submit" disabled={isSubmitting}>{t('confirm button')}</button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  )
}

export default ReviewForm