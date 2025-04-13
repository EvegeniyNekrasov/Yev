<script lang="ts">
    import { onMount } from "svelte";
    import { Position } from "../core/position";
    const { command, isEditable, handleAddCommand } = $props();

    let editableDiv = $state<HTMLDivElement | null>(null);
    let cursor = $state<HTMLDivElement | null>(null);

    onMount(() => {
        if (command && editableDiv) editableDiv.innerText = command;
    });

    function handleKeyDown(e: KeyboardEvent) {
        const selection = window.getSelection();

        if (selection && cursor && editableDiv) {
            if (!editableDiv.contains(selection.anchorNode)) return;

            const positions = Position.getPosition(selection);
            cursor.style.position = "absolute";
            cursor.style.left = `${positions.left - editableDiv.getBoundingClientRect().left}px`;
            cursor.style.top = `${positions.top - editableDiv.getBoundingClientRect().top}px`;

            if (e.key === "Enter") {
                e.preventDefault();
                handleAddCommand(editableDiv.innerText.trim());
                editableDiv.innerText = "";
            }
        }
    }
</script>

<div class="flex flex-col gap-2">
    <div class="flex gap-0.5 items-center w-full h-fit">
        <span class="whitespace-nowrap">~/Desktop</span>
        <div class="relative w-full">
            <div
                bind:this={editableDiv}
                class=" focus:outline-none caret-transparent"
                tabindex="0"
                contenteditable={isEditable}
                onkeydown={handleKeyDown}
                role="textbox"
                aria-label="Input command"
            ></div>

            {#if isEditable}
                <div
                    bind:this={cursor}
                    class="absolute bg-amber-900 w-[8px] h-[20px] pointer-events-none top-0 left-0"
                ></div>
            {/if}
        </div>
    </div>
    {#if !isEditable}
        <div>aksdlakdj</div>
    {/if}
</div>
