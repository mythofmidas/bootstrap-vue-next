import { useAuthMethods } from "@/hooks/useAuthMethods";
import { usePocketBase } from "@/pocketbase";
import { useAuth } from "@/pocketbase/auth";
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Group,
  MediaQuery,
  Title,
  em,
  getBreakpointValue,
} from "@mantine/core";
import { IconCirclePlus, IconLogout } from "@tabler/icons-react";
import Link from "next/link";

function Nav() {
  const pb = usePocketBase();
  const { user } = useAuth();
  const { usernamePasswordEnabled } = useAuthMethods();

  return (
    <Box component="nav" mb="xl">
      <Group>
        <Anchor
          component={Link}
          href="/"
          color="white"
          sx={{ textDecoration: "none" }}
        >
          <Title
            sx={(theme) => ({
              [`@media (max-width: ${em(
                getBreakpointValue(theme.breakpoints.sm) - 1
              )})`]: {
                fontSize: theme.headings.sizes.h3.fontSize,
              },
            })}
          >
            Share Me
          </Title>
        </Anchor>
        <Box sx={{ flexGrow: 1 }} />
        {user ? (
          <Group>
            <Button
              radius="xl"
              variant="gradient"
              size="md"
              component={Link}
              href="/"
              leftIcon={<IconCirclePlus />}
            >
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Box>Create Post</Box>
              </MediaQuery>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Box>Post</Box>
              </MediaQuery>
            </Button>
            <ActionIcon onClick={() => pb.authStore.clear()}>
              <IconLogout />
            </ActionIcon>
          </Group>
        ) : (
          <Group spacing="sm">
            <Button
              radius="xl"
              variant="gradient"
              size="md"
              component={Link}
              href="/login"
            >
              Login
            </Button>
            {usernamePasswordEnabled && (
              <Button
                radius="xl"
                variant="outline"
                size="md"
                component={Link}
                href="/sign-up"
              >
                Sign Up
              </Button>
            )}
          </Group>
        )}
      </Group>
    </Box>
  );
}

export default Nav;
