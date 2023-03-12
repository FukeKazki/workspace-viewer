import { useFetch } from "@raycast/utils";

export const useWorkspace = () => {
  const { isLoading, data, revalidate } = useFetch<{ list: string[] }>('http://127.0.0.1:9281/list')

  return { isLoading, data }
}
