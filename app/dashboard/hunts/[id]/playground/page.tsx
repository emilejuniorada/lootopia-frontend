import Playground from "@/components/dashboard/hunts/Playground";
import React from "react";

const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  return <Playground id={id} />;
};

export default Page;
