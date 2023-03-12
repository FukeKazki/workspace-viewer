import { ActionPanel, Action, Icon, List } from "@raycast/api";
import { useWorkspace } from "./useWorkspace";
import fetch from 'cross-fetch'

const switchWidnow = async (windowName: string) => {
  await fetch('http://127.0.0.1:9281/switch', {
    method: "POST",
    body: JSON.stringify({
      "window_name": windowName
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
}
export default function Command() {
  const { data, isLoading } = useWorkspace()
  return (
    <List
      isLoading={isLoading}
    >
      {data?.list.map((title, index) => (
        <List.Item
          key={`${title}-${index}`}
          icon="list-icon.png"
          title={title}
          actions={
            <ActionPanel>
              <Action title='switch tmux' onAction={() => switchWidnow(title)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
