import { Preferences } from "../Preferences";
import IconGear from "~icons/heroicons-solid/cog";
import IconChevron from "~icons/heroicons-outline/chevron-right";
import { createSignal, Show } from "solid-js";

export function NavPreferences(props: {id: string}) {
  const [collapsed, setCollapsed] = createSignal(false);

  return (
    <div class="border border-solid-lightitem bg-solid-light dark:bg-solid-dark dark:border-solid-darkitem rounded-lg">
      <button
        onClick={() => setCollapsed((prev) => !prev)}
        aria-expanded={!collapsed()}
        aria-controls="preferences"
        class="flex items-center justify-between p-4 w-full cursor-pointer"
      >
        <div class="flex items-center gap-2 font-semibold">
          <div class="bg-solid-lightitem dark:bg-solid-darkitem rounded-lg p-1">
            <IconGear class="w-4 h-4" />
          </div>
          Preferences
        </div>
        <IconChevron
          class={`w-6 h-6 text-solid-lightaction dark:text-solid-darkaction transform transition ${
            !collapsed() ? "rotate-90" : ""
          }`}
        />
      </button>
      <Show when={!collapsed()}>
        <div class="p-4 border-t border-solid-lightitem dark:border-solid-darkitem">
          <Preferences id={props.id} />
        </div>
      </Show>
    </div>
  );
}