import { Wrap, WrapItem } from "@chakra-ui/react";
import LinkForProject from "./LinkForProject";
import { projects } from "./static";

function ContentProjects() {
  return (
    <Wrap justify="center" spacing="40px" mx="6px">
      {projects.map(({ linkToImage, linkToRepo, nameProject }, idx) => (
        <WrapItem key={idx}>
          <LinkForProject
            linkToImage={linkToImage}
            linkToRepo={linkToRepo}
            nameProject={nameProject}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default ContentProjects;
