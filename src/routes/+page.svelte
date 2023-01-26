<script>
    import Navbar from '../components/Navbar.svelte';
    import Table from '../components/Table.svelte';

    import data from '../data.json';
</script>

<svelte:head>
    <title>Bell Firmware Changelogs</title>
</svelte:head>

<main class="container">
    <Navbar />

    <p>This site is not affiliated with BCE, Inc. nor any of its subsideraries and is purely for informational purposes.</p>

    <h2>Modems</h2>
    <details>
        <summary><strong>GigaHub</strong></summary>
        <Table data={data.gh} slug="gh" />
    </details>

    <details>
        <summary><strong>HomeHub 4000</strong></summary>
        <Table data={data.hh4k} slug="hh4k" />
    </details>


    <details>
        <summary><strong>HomeHub 3000</strong></summary>
        <Table data={data.hh3k} slug="hh3k" />
    </details>

    <h2>Set Top Boxes</h2>
    <details>
        <summary><strong>7802 - Android STB</strong></summary>
        <Table data={data['7802']} slug="7802" />
    </details>

    <details>
        <summary><strong>5662 - 4K PVR</strong></summary>
        <Table data={data['5662']} slug="5662" />
    </details>

    <details>
        <summary><strong>2262 - Legacy PVR</strong></summary>
        <Table data={data['2262']} slug="2262" />
    </details>

    <details>
        <summary><strong>2502 - Wireless STB</strong></summary>
        <Table data={data['2502']} slug="2502" />
    </details>

    <details>
        <summary><strong>2202 - Legacy STB</strong></summary>
        <Table data={data['2202']} slug="2202" />
    </details>
</main>