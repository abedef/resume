<script>
    import { isSimplified } from '$lib/resumeStore';
    
    function toggle() {
        isSimplified.update(n => !n);
    }
</script>

<button 
    class="resume-toggle" 
    on:click={toggle}
    aria-label="Toggle between full and simplified resume"
>
    <div class="toggle-inner">
        <span class="toggle-label">{$isSimplified ? 'Simple' : 'Full'}</span>
        <div class="toggle-switch" class:simplified={$isSimplified}>
            <div class="toggle-handle"></div>
        </div>
    </div>
</button>

<style>
    .resume-toggle {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: white;
        border: 1px solid #ddd;
        border-radius: 2rem;
        padding: 0.5rem 0.75rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 1000;
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
        background: #4CAF50;
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
        .resume-toggle {
            bottom: 1rem;
            right: 1rem;
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
        .resume-toggle {
            display: none;
        }
    }
</style>