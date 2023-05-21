import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `BaBy pUPuS-${title}`;
    }, [title])
};
export default useTitle;