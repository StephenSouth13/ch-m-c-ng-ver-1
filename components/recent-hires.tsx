import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentHires() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jane Doe</p>
          <p className="text-sm text-muted-foreground">UX Designer</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge>Design</Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Mark Smith</p>
          <p className="text-sm text-muted-foreground">Frontend Developer</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge>Engineering</Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Alex Johnson</p>
          <p className="text-sm text-muted-foreground">Product Manager</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge>Product</Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>RB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Rachel Brown</p>
          <p className="text-sm text-muted-foreground">HR Specialist</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge>Human Resources</Badge>
        </div>
      </div>
    </div>
  )
}
