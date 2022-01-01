import "bulma/css/bulma.css";
import { Text, Image, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function LinkForProject({ linkToRepo, linkToImage, nameProject }) {
  return (
    <Link href={linkToRepo} fontSize="20px">
      <Image width="220px" height="185px" src={linkToImage} alt="project" />

      <Text textAlign="center">
        {nameProject} <ExternalLinkIcon mx="2px" />
      </Text>
    </Link>
  );
}

export default LinkForProject;
