import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Augusto Moscardo</Text>
          <Text color="gray.300" fontSize="small">
            augusto.moscardo@unitau.br
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Augusto Moscardo"
        src="https://github.com/augustomoscardo.png"
      />
    </Flex>
  );
}
