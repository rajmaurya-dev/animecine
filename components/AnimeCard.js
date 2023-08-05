import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Badge,
  Skeleton,
} from "@nextui-org/react";

export default function AnimeCard({ imgUrl, title, rank }) {
  return (
    <Card className=" md:w-[200px]  w-[145px] h-[250px] md:h-[350px]">
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
            isZoomed
            isBlurred
            loading="lazy"
            // classNames={"max-w-[50px] max-h-[50px]"}
          />
        </Badge>
      </CardBody>

      <CardFooter className=" pt-2 px-4 flex-col items-center pb-5">
        <h4 className="font-bold text-white text-[10px] md:text-base line-clamp-2 text-center ">
          {title}
        </h4>
      </CardFooter>
    </Card>
  );
}
