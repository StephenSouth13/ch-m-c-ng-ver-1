"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, route to staff or owner dashboard based on email
      if (email.includes("owner") || email.includes("admin")) {
        router.push("/owner/dashboard")
      } else {
        router.push("/staff/dashboard")
      }
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">HRM Pro</h1>
          </div>
          <p className="text-gray-500">Human Resource & Attendance Management System</p>
        </div>

        <Tabs defaultValue="login" className="mt-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Đăng nhập</TabsTrigger>
            <TabsTrigger value="help">Trợ giúp</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Đăng nhập tài khoản</CardTitle>
                <CardDescription>Nhập thông tin đăng nhập để truy cập vào hệ thống HRM Pro.</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@company.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Mật khẩu</Label>
                      <a href="#" className="text-xs text-primary hover:underline">
                        Quên mật khẩu?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="help">
            <Card>
              <CardHeader>
                <CardTitle>Trợ giúp đăng nhập</CardTitle>
                <CardDescription>Hướng dẫn và thông tin hỗ trợ đăng nhập vào hệ thống.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">Tài khoản demo:</h3>
                  <p className="text-sm text-gray-500">
                    <strong>Nhân viên:</strong> staff@example.com / password
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Quản lý:</strong> owner@example.com / password
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Không thể đăng nhập?</h3>
                  <p className="text-sm text-gray-500">
                    Nếu bạn gặp vấn đề khi đăng nhập, vui lòng liên hệ với quản trị viên hệ thống hoặc gửi email đến
                    support@hrmpro.com
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Liên hệ hỗ trợ</Button>
                <Button variant="ghost" onClick={() => window.location.reload()}>
                  Làm mới trang
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
