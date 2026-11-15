import { Spinner } from "./ui/spinner"


const Loading = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <Spinner className="size-8 text-primary" />
    </div>
  )
}

export default Loading
