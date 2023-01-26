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
</main>