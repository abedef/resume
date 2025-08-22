<script lang="ts">
  import { isSimplified } from "$lib/resumeStore";
  import { onMount } from "svelte";

  let showTooltip = false;
  let tooltipTimer: number | undefined;

  function toggle() {
    isSimplified.update((n) => !n);
    showTooltip = false;
    if (tooltipTimer) clearTimeout(tooltipTimer);
  }

  onMount(() => {
    // Show tooltip after a short delay
    setTimeout(() => {
      showTooltip = true;
    }, 500);

    // Hide tooltip after 5 seconds
    tooltipTimer = setTimeout(() => {
      showTooltip = false;
    }, 5500);

    return () => {
      if (tooltipTimer) clearTimeout(tooltipTimer);
    };
  });
</script>

<div class="toggle-container">
  {#if showTooltip && !$isSimplified}
    <div class="tooltip">
      Looking for a less wordy version? Click me!
      <div class="tooltip-arrow"></div>
    </div>
  {/if}

  <button
    class="resume-toggle"
    on:click={toggle}
    aria-label="Toggle between full and simplified resume"
  >
    <div class="toggle-inner">
      <span class="toggle-label">{$isSimplified ? "Simple" : "Full"}</span>
      <div class="toggle-switch" class:simplified={$isSimplified}>
        <div class="toggle-handle"></div>
      </div>
    </div>
  </button>
</div>

<style>
  .toggle-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
  }

  .tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    right: 0;
    background: #333;
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    white-space: nowrap;
    animation: fadeInBounce 0.5s ease-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .tooltip-arrow {
    position: absolute;
    bottom: -6px;
    right: 2rem;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #333;
  }

  @keyframes fadeInBounce {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    60% {
      opacity: 1;
      transform: translateY(-2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .resume-toggle {
    position: relative;
    background: white;
    border: 1px solid #ddd;
    border-radius: 2rem;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .resume-toggle:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  .toggle-inner {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .toggle-label {
    font-size: 0.75rem;
    color: #666;
    font-weight: 500;
    min-width: 3rem;
    text-align: center;
  }

  .toggle-switch {
    width: 2.5rem;
    height: 1.25rem;
    background: #e0e0e0;
    border-radius: 1rem;
    position: relative;
    transition: background 0.3s ease;
  }

  .toggle-switch.simplified {
    background: #4caf50;
  }

  .toggle-handle {
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    width: 1rem;
    height: 1rem;
    background: white;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  .toggle-switch.simplified .toggle-handle {
    transform: translateX(1.25rem);
  }

  @media screen and (max-width: 620px) {
    .toggle-container {
      bottom: 1rem;
      right: 1rem;
    }

    .tooltip {
      font-size: 0.65rem;
      padding: 0.4rem 0.6rem;
    }

    .resume-toggle {
      padding: 0.4rem 0.6rem;
    }

    .toggle-label {
      font-size: 0.7rem;
      min-width: 2.5rem;
    }

    .toggle-switch {
      width: 2rem;
      height: 1rem;
    }

    .toggle-handle {
      width: 0.75rem;
      height: 0.75rem;
    }

    .toggle-switch.simplified .toggle-handle {
      transform: translateX(1rem);
    }
  }

  @media print {
    .toggle-container {
      display: none;
    }
  }
</style>
