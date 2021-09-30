<script>
    import { onMount } from "svelte";
    
    export let link = '';

    let posts = [];
    let display_posts = [];
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', day: 
        'numeric'
    };
    onMount(async () => {
        const paths = import.meta.glob('../routes/**/*.md');

        let body = [];
        for (const path in paths) {
            if (path.includes(link)) {
                body.push(paths[path]().then(({metadata}) => metadata));
            }
        }
        posts = await Promise.all(body);
    });

    $: posts.forEach(post => {
        let new_post = {};
        let date = new Date(post.publish_date.replace(/-/g, ' '));
        console.log(date)
        console.log(date.getFullYear())
        new_post['sort_date'] = date;
    
        new_post['publish_date'] = date.toLocaleDateString('en-US', options); 
        new_post['title'] = post.title;
        new_post['author'] = post.author;
        new_post['slug'] = post.slug;
        new_post['tags'] = post.tags;
        new_post['post_link'] = `/${link}/posts/${post.slug}`;
        display_posts = [...display_posts, new_post];
    }); 
    $: display_posts = display_posts.sort((a, b) => {
        return b.sort_date - a.sort_date;
    });
</script>

{#if display_posts }
<ul>
    {#each display_posts as {title, publish_date, post_link}}
        <li><i>{publish_date}</i> - <a href={post_link}>{ title }</a></li>
    {/each}
</ul>
{:else}
<p>No data yet...</p>
{/if}