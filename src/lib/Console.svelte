<script lang="ts">
    import { onMount } from "svelte";
    import { Position } from "../core/position";

    let editableDiv: HTMLDivElement;
    let cursor: HTMLDivElement | null = null;

    let { handleClick } = $props();

    onMount(() => {
        cursor = document.getElementById("cursor") as HTMLDivElement;
    });

    function handleKeyDown(e: KeyboardEvent) {
        const selection = window.getSelection();

        if (selection && cursor && editableDiv) {
            if (!editableDiv.contains(selection.anchorNode)) return;

            const positions = Position.getPosition(selection);
            cursor.style.position = "fixed";
            cursor.style.left = `${positions.left}px`;
            cursor.style.top = `${positions.top}px`;

            if (e.key === "Enter") {
                e.preventDefault();
                handleClick((e.target as HTMLDListElement).innerText);
            }
        }
    }
</script>

<div class="flex gap-2 items-center w-full">
    <span class="w-fit">~/Desktop</span>
    <div
        bind:this={editableDiv}
        class="relative w-full focus:outline-none"
        tabindex="0"
        contenteditable="true"
        onkeydown={handleKeyDown}
        role="textbox"
        aria-label="Input command"
    >
        <div
            id="cursor"
            class="absolute left-1 bg-amber-900 w-[8px] h-[20px] pointer-events-none"
        ></div>
    </div>
</div>
