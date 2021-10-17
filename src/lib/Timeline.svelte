<script lang="ts">
  import type { Direction, Data } from "../types";
  export let direction: Direction = "horizontal";
  export let data: Data = [
    { year: new Date(570, 3, 22), title: "Title 1", description: "Item #1" },
    { year: new Date(570, 3, 22), title: "Title 2", description: "Item #2" },
    { year: new Date(570, 3, 22), title: "Title 3", description: "Item #3" },
    { year: new Date(570, 3, 22), title: "Title 4", description: "Item #4" },
    { year: new Date(570, 3, 22), title: "Title 5", description: "Item #5" },
  ];
</script>

<ol class={`timeline ${direction}`}>
  {#each data as point}
    <li>
      <div>
        <span>{point.year.toDateString()}</span>
        <h3>{point.title}</h3>
        <p>{point.description}</p>
      </div>
    </li>
  {/each}
</ol>
