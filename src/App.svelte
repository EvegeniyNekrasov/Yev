<script lang="ts">
    import ConsoleLine from "./lib/ConsoleLine.svelte";
    let commands = $state<string[]>([]);
    let history = $state<string[]>([]);

    function handleAddCommand(command: string): void {
        history.push(command);
        if (command.trim() === "clear") commands = [];
        else commands.push(command);
    }

    $inspect(commands);
    $inspect(history);
</script>

{#if commands.length > 0}
    {#each commands as command}
        <ConsoleLine
            isEditable={false}
            {command}
            {handleAddCommand}
        />
    {/each}
{/if}

<ConsoleLine
    isEditable={true}
    command={null}
    {handleAddCommand}
/>
