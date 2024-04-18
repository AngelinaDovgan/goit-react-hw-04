import { Form, Field, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
   
  return (
    <div>
      <Toaster />
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (!values.query.trim()) {
            toast.error("Please type your text!")
          } else {
            onSearch(values.query);
            actions.resetForm()
          }
        }}>
        
        <Form>
          <Field
            type="text"
            name="query"
            placeholder="search images"
            autoComplete="off"
            autoFocus
          />
          <button type="submit">Search</button>
        </Form>
</Formik>
        </div>
    
  )
}