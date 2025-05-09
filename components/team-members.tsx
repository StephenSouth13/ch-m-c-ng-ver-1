import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export function TeamMembers() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-[1fr_1fr_150px_80px] gap-4 rounded-md border p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Jane Doe</p>
            <p className="text-xs text-muted-foreground">jane.doe@example.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-sm">UX Designer</p>
        </div>
        <div className="flex items-center">
          <Badge>Design</Badge>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr_150px_80px] gap-4 rounded-md border p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Mark Smith</p>
            <p className="text-xs text-muted-foreground">mark.smith@example.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-sm">Frontend Developer</p>
        </div>
        <div className="flex items-center">
          <Badge>Engineering</Badge>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr_150px_80px] gap-4 rounded-md border p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Alex Johnson</p>
            <p className="text-xs text-muted-foreground">alex.johnson@example.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-sm">Product Manager</p>
        </div>
        <div className="flex items-center">
          <Badge>Product</Badge>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
