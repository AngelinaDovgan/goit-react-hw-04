import { useState } from "react";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
    const [value, setValue] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        if (!value.trim()) {
            toast.error("Type here your text!");
            return;
        } 
        onSubmit(value);
        setValue("");
    }

    return (
        <>
        <header>
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    autoComplete="off"
    autoFocus
    value = {value}
    placeholder="Search images and photos"
    onChange={(e) => setValue(e.target.value)}
    />
    <button type="submit">Search</button>
  </form>
</header>
        </>
    )
}