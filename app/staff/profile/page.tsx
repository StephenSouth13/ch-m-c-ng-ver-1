"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hồ sơ cá nhân</h1>
        <p className="text-muted-foreground">Xem và cập nhật thông tin cá nhân của bạn.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Avatar" />
              <AvatarFallback>NVA</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Nguyễn Văn A</CardTitle>
              <CardDescription className="flex items-center gap-2">
                Nhân viên <Badge>Phòng Kỹ thuật</Badge>
              </CardDescription>
            </div>
            <div className="ml-auto">
              <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Hủy" : "Chỉnh sửa"}
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="info" className="md:col-span-2">
          <TabsList>
            <TabsTrigger value="info">Thông tin cá nhân</TabsTrigger>
            <TabsTrigger value="password">Đổi mật khẩu</TabsTrigger>
            <TabsTrigger value="settings">Cài đặt</TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin cá nhân</CardTitle>
                <CardDescription>Xem và cập nhật thông tin cá nhân của bạn.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Họ và tên</Label>
                    <Input id="fullName" defaultValue="Nguyễn Văn A" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="nguyenvana@company.com" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input id="phone" defaultValue="0912345678" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthday">Ngày sinh</Label>
                    <Input id="birthday" type="date" defaultValue="1990-01-01" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Phòng ban</Label>
                    <Select disabled={!isEditing} defaultValue="tech">
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Chọn phòng ban" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Phòng Kỹ thuật</SelectItem>
                        <SelectItem value="hr">Phòng Nhân sự</SelectItem>
                        <SelectItem value="marketing">Phòng Marketing</SelectItem>
                        <SelectItem value="finance">Phòng Tài chính</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Chức vụ</Label>
                    <Input id="position" defaultValue="Kỹ sư phần mềm" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Địa chỉ</Label>
                    <Textarea
                      id="address"
                      defaultValue="123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-end">{isEditing && <Button>Lưu thay đổi</Button>}</CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Đổi mật khẩu</CardTitle>
                <CardDescription>Cập nhật mật khẩu đăng nhập của bạn.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Mật khẩu mới</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Cập nhật mật khẩu</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Cài đặt</CardTitle>
                <CardDescription>Quản lý các cài đặt tài khoản của bạn.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Ngôn ngữ</Label>
                  <Select defaultValue="vi">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Chọn ngôn ngữ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vi">Tiếng Việt</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notifications">Thông báo</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="notifications">
                      <SelectValue placeholder="Cài đặt thông báo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả thông báo</SelectItem>
                      <SelectItem value="important">Chỉ thông báo quan trọng</SelectItem>
                      <SelectItem value="none">Tắt thông báo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Lưu cài đặt</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
