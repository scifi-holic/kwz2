"use client"

import { Emoji } from "app/team/[teamId]/qr/Emoji"
import { QRCode } from "app/team/[teamId]/qr/QRCode"
import { Header } from "components/Header"
import { Button } from "components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "components/ui/drawer"
import { useAuth } from "hooks/useAuth"
import { ArrowUp, BarChart, DollarSign, Minus, Plus } from "lucide-react"

export const runtime = "edge"

export default function Page() {
  const { user } = useAuth()

  return (
    <div className="flex w-full flex-col gap-8">
      <Header />

      <div className="flex w-full justify-center gap-2 text-4xl">
        <p className="tabular-nums">
          {Intl.NumberFormat("en-US", {
            currency: "USD",
          }).format(1000)}
        </p>
        <p className="">TUSD</p>
      </div>

      <div className="flex justify-center gap-6">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="gap-1 rounded-full">
              <DollarSign className="size-4" />
              Buy
            </Button>
          </DrawerTrigger>
          <DrawerContent className="mx-auto flex max-w-screen-sm gap-8 pb-8">
            <h3 className="px-12 text-center font-ink text-xl">
              Show this QR code to the cashier to buy TUSD with cash or card
            </h3>
            <div className="relative">
              <QRCode
                str={"0x6c95305d05CccD9376799c8e9514ADAAF8a46d6C"}
                className="size-64"
              />
              <Emoji
                e="🤑"
                n="money-mouth-face"
                className="absolute inset-0 m-auto size-24"
              />
            </div>
          </DrawerContent>
        </Drawer>
        <Button className="gap-1 rounded-full" variant="secondary">
          <ArrowUp className="size-4" />
          Send
        </Button>
      </div>

      {/* <div className="flex flex-col text-center">
        <h2 className="">Your wallet address</h2>
        <p className="font-bold font-mono text-sm">{user.address}</p>
      </div> */}
    </div>
  )
}
