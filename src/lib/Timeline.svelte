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
  const itemDate = (dateStr: Date) => {
    const year = dateStr.getFullYear().toString();

    return `${year.charAt(0) === "0" ? year.substring(1) : year} C.E.`;
  };
</script>

<ol class={`timeline ${direction}`}>
  {#each data as point}
    <li class="item">
      <div>
        <span>{itemDate(point.year)}</span>
        <h3 class="title">{point.title}</h3>
        <p class="description">{point.description}</p>
      </div>
    </li>
  {/each}
</ol>

<style>
  :root {
    --size: 3rem;
    --spacing: 0.5rem;
  }
  .timeline.horizontal {
    display: flex;
    flex-wrap: wrap;
  }
  .horizontal .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .horizontal .item::before {
    content: " ";
    position: relative;
    z-index: 1;
    display: block;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    margin: 1rem auto 0;
    background-color: lightblue;
  }
  .horizontal .item:not(:last-child):after {
    content: "";
    height: 2px;
    background-color: #e0e0e0;
    order: -1;
    position: relative;
    top: 2.5rem;
    width: calc(100% - var(--size) - calc(var(--spacing) * 2));
    left: calc(50% + calc(var(--size) / 2 + var(--spacing)));
  }
  .vertical .item {
    position: relative;
    padding-bottom: 4rem;
    display: flex;
    gap: 1rem;
  }
  .vertical .item:before {
    content: "";
    position: relative;
    z-index: 1;
    flex: 0 0 var(--size);
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background-color: lightblue;
  }
  .vertical .item:not(:last-child):after {
    content: "";
    position: absolute;
    left: 0;
    top: calc(var(--size) + var(--spacing));
    bottom: var(--spacing);
    transform: translateX(calc(var(--size) / 2));
    width: 2px;
    background-color: #e0e0e0;
  }
</style>
