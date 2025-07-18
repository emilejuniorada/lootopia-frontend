import React from "react";
import SinglePage
 from "@/components/dashboard/hunts/SinglePage";
const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  return <SinglePage id={id} />;
};

export default Page;
