<script>
    export let title;
    export let author;
    export let publish_date;

    let date = new Date(publish_date.replace(/-/g, ' ')).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
</script>

<h1>{title}</h1>
<em>Created on {date} by {author}</em>
<br><br>
--
<slot></slot>
