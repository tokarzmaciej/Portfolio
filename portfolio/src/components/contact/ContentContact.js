import "bulma/css/bulma.css";
import { Box, Icon, Link, VStack } from "@chakra-ui/react";
import { email, github, linkedin } from "./static";
import "bulma/css/bulma.css";

function ContentContact() {
  const style = {
    fontSize: "23px",
    ml: "30px",
    color: "#030303",
  };
  return (
    <VStack>
      <Box>
        <Link href={linkedin}>
          <Icon className="fab fa-linkedin fa-4x" color="#0a66c2"></Icon>
        </Link>
        <Link {...style} href={linkedin}>
          Linkedin
        </Link>
      </Box>
      <Box>
        <Link>
          <Icon className="fas fa-at fa-4x"></Icon>
        </Link>
        <Link {...style}>{email}</Link>
      </Box>
      <Box>
        <Link href={github}>
          <Icon className="fab fa-github-square fa-4x"></Icon>
        </Link>
        <Link {...style} href={github}>
          Github
        </Link>
      </Box>
    </VStack>
  );
}

export default ContentContact;
