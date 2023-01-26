<script>
    export let data;

    const {modem, version: ver, slug} = data;

    import Navbar from '../../../components/Navbar.svelte';

    function parseDate(date) {
        return new Date(date)
            .toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
    }
</script>

<svelte:head>
    <title>{ver.version} - Bell {modem}</title>
    <meta content="Bell {modem} - Firmware {ver.version}" property="og:title" />
    <meta content="Deployed on {parseDate(ver.date)}" property="og:description" />
    <meta content="https://bell.ethxn.tech/v/{`${modem}-${ver.version}`}" property="og:url" />
    <meta content="https://bell.ethxn.tech/{slug}.png" property="og:image" />
    <meta content="#0464a4" name="theme-color" />
</svelte:head>

<main class="container">
    <Navbar />

    <img src="/{slug}.png" alt="" width=128 />
    <h1>{modem} - Firmware {ver.version}</h1>
    
    <p>Deployment date: {parseDate(ver.date)}</p>
    <ul>
        {#each ver.changes as change}
        <li>{change}</li>
        {/each}
    </ul>
</main>