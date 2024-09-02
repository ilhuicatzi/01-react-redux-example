import { Button } from "@/components/ui/button"
import {Link} from 'react-router-dom';
import { ModeToggle } from "./ModeToggle"
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MenuColapse() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex justify-center items-center sm:hidden" variant="outline" size="icon"><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
            <SheetClose asChild >
            <Link to="/" className="px-3 py-1.5 hover:bg-muted rounded-md">Home</Link>
            </SheetClose>
            <SheetClose asChild >
            <Link to="/about" className="px-3 py-1.5 hover:bg-muted rounded-md">About</Link>
            </SheetClose>
            <SheetClose asChild >
            <Link to="/newTask" className="px-3 py-1.5 hover:bg-muted rounded-md">New Task</Link>
            </SheetClose>
            <div className="flex items-center">
            <ModeToggle />
            </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
