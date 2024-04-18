// import { Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
    const handleSubmit = (evt) => {
        evt.preventDefault();

        const form = evt.target;
        const query = form.elements.query.value;


        !query.trim()
            ? toast.error("Type here your text!")
          : onSubmit({ query });
        
        form.reset();
    };

    return (
        <>
        <header>
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    autoComplete="off"
    autoFocus
    name = "query"
    placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
                </form>
                
                <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: "400",
            style: {
              border: "1px solid #ff4800",
              padding: "16px",
              color: "#ff4800",
            },
          }}
        />
</header>
        </>
    )
}