<script context="module">
    import { useURI } from '$lib/util';

    export const prerender = true;
    export async function load({ fetch }) {
        const res = await fetch(`${useURI()}posts`);
        const data = await res.json();

        return { props: { posts: data.data } };
    }
</script>

<script>
    import PostList from '$lib/PostList.svelte';
    export let posts;
</script>

<h2><em>Browse by Character</em></h2>
<h3><a href="/fivins-journal">Journal of Fivin Njork</a></h3>
<h3><a href="/zans-tome">Zan's Tome</a></h3>
<h3><a href="/kyburn">Adventure with Kyburn</a></h3>

<h1><em>All Posts</em></h1>
<PostList link="" />

<ul>
    {#each posts as post}
        <li>{post.attributes.title}</li>
    {/each}
</ul>