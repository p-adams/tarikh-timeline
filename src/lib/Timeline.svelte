<script lang="ts">
  type Direction = "horizontal" | "vertical";
  type Data = Array<{
    title: string;
    description: string;
    image?: string;
  }>;
  export let direction: Direction = "horizontal";
  export let data: Data = [
    { title: "Title 1", description: "Item #1" },
    { title: "Title 2", description: "Item #2" },
    { title: "Title 3", description: "Item #3" },
    { title: "Title 4", description: "Item #4" },
    { title: "Title 5", description: "Item #5" },
  ];
</script>

<ol class={`timeline ${direction}`}>
  {#each data as point}
    <li>
      <div>
        <h3>{point.title}</h3>
        <p>{point.description}</p>
      </div>
    </li>
  {/each}
</ol>
