<script>
    export let data, slug;

    function parseDate(date) {
        return new Date(date)
            .toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
    }
</script>

{#if data.length !== 0}
<table>
    <thead>
        <th scope="col">Deployment Date</th>
        <th scope="col">Version</th>
        <th scope="col">Changelog</th>
    </thead>
    <tbody>
        {#each data as version}
        <tr>
        <td>{parseDate(version.date)}</td>
        <td>
            <a href="/v/{`${slug}-${version.version}`}">
                {version.version}
            </a>
        </td>
        <td>
            <ul>
                {#each version.changes as change}
                <li>{change}</li>
                {/each}
            </ul>
        </td>
        </tr>
        {/each}
    </tbody>
</table>
{:else}
<p>Sorry, we don't have any data for this modem at this time :(</p>
{/if}