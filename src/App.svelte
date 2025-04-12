<script lang="ts">
    import Console from "./lib/Console.svelte";
    let commands = $state<string[]>([]);

    function handleAddCommad(command: string): void {
        commands.push(command);
    }

    $inspect(commands);
</script>

<span class="text-2xl text-red-800">Hello svelte</span>

<Console handleClick={handleAddCommad} />
