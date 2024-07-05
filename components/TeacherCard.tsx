import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

  
  const TeacherCard = () => {
    return (
      <Card className="w-[350px] px-4 py-4 bg-gray-100">
        <div className="w-full h-40 relative">
          <Image src='/CardBg.svg' width={100} height={100} alt='' className=" w-full h-full object-cover rounded-xl" />
          <div className="flex gap-20">
            <div>
              <Avatar className="size-16 absolute -bottom-12 left-2">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="font-semibold text-sm leading-3">
              <h2 className="text-base">Jammy, 21</h2>
              <p>JP</p>
            </div>
          </div>
        </div>
        <CardHeader className="mt-4">
        </CardHeader>
        <CardContent className="flex justify-between text-sm font-semibold">
          <p>Language Statistics</p>
          <Badge variant="outline" className="bg-gray-100">Japanese</Badge>
        </CardContent>
        <CardContent className="progress flex flex-col gap-3 -mt-2">
          <div className="flex items-center gap-6">
            <Progress value={60} className="max-w-44" />
            <p className="text-sm text-neutral-400">Speaking</p>
          </div>
          <div className="flex items-center gap-6">
            <Progress value={80} className="max-w-44" />
            <p className="text-sm text-neutral-400">Reading</p>
          </div>
        </CardContent>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Link href='' className="bg-amber-300 text-black hover:bg-amber-300/90 rounded-full px-6 py-2 text-center">Message</Link>
            <Link href='' className="text-white bg-gray-700 hover:bg-gray-700/90 rounded-full px-6 py-2 text-center">Profile</Link>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  export default TeacherCard
  