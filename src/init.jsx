import App from "./App";
import { MantineProvider } from "@mantine/core";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const init = async (socket) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <App socket={socket} />
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default init;
