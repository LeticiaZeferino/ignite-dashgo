import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leticia Zeferino</Text>
          <Text color="gray.300" fontSize="small">
            leticia.zeferino@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Leticia Zeferino"
        src="https://github.com/leticiazeferino.png"
      />
    </Flex>
  );
}
