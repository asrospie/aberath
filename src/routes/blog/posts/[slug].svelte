<script context="module">
    export const prerender = true;
    export const load = async ({ page: { params }, fetch }) => {
        const { slug } = params;

        const res = await fetch('http://localhost:1337/api/posts/?permalink=' + slug + ',populate=author');

        if (res.status === 404) {
            const error = new Error(`Could not find post with id ${slug}`);
            return { status: 404, error };
        }
        const data = await res.json();
        return { props: { post: data.data[0] } };
    };
</script>

<script>
    import { onMount } from 'svelte';

    export let post;
    let loaded = false;
    let content = post.attributes.content;
    let date = new Date(post.attributes.publish_date.replace(/-/g, ' '))
        .toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

    onMount(async() => {
        const { marked } = await import('marked');
        content = await marked(post.attributes.content);
        loaded = true;
    });
</script>

<div>
    <h1>{post.attributes.title}</h1>
    <em>Created on {date} by {post.attributes.string_author}</em>
    {#if loaded}
        {@html content}
    {/if}
</div>