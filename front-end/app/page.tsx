import NavBar from "@/components/navigation/nav-bar"
import Button from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      <div className="my-10" />
      <Button />
    </div>
  )
}
