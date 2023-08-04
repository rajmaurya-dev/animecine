import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function CardForFeature({ imgUrl, title, desc }) {
  return (
    <Card className="max-w-[400px] bg-gray-700" shadow="none">
      <CardBody className="items-center">
        <CardHeader className="justify-center">
          <Image
            alt="nextui logo"
            height={80}
            radius="sm"
            src={imgUrl}
            width={80}
          />
        </CardHeader>
        <div className="flex flex-col">
          <p className="text-md text-white font-bold ">{title}</p>
        </div>
        <p className="text-blue-200 text-center">{desc}</p>
      </CardBody>
    </Card>
  );
}
