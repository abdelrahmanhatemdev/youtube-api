/**
 * The `useTitle` custom hook sets the document title to include a specified title followed by " -
 * Youtube".
 * @param title - The `title` parameter is a string that represents the title of the webpage. It will
 * be used to set the document title in the browser tab.
 */
import { useEffect } from 'react'

export default function useTitle(title) {
    useEffect(() => {
        document.title = (title ? title +" - " : "") +"Youtube";
    })
}
