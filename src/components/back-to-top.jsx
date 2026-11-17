import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"


const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 700)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    },[])

    const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

if (!isVisible) return null;

  return (
     <Button
    onClick={scrollToTop}
    size="icon"
    aria-label="Back to top"
    className="fixed bottom-6 right-6 z-50 size-11 rounded-full shadow-lg"
  >
    <ArrowUp className="size-5" />
  </Button>
  )
}

export default BackToTop
