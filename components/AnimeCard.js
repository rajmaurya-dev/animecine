import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Badge,
} from "@nextui-org/react";

export default function AnimeCard({ imgUrl, title, rank }) {
  return (
    <Card className=" max-w-[300px] h-[400px]">
      <CardBody className="overflow-visible py-2 justify-center items-center">
        <Badge
          content={rank}
          color="primary"
          placement="top-left"
          disableOutline
          size="lg"
        >
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={imgUrl}
            width={200}
            height={200}
          />
        </Badge>
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-center pb-5">
        <h4 className="font-bold text-white text-base text-center">{title}</h4>
      </CardFooter>
    </Card>
  );
}
