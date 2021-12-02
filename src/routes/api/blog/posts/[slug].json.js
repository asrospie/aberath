import { useURI } from '$lib/util';

export async function get({ params }) {
    const slug = params.slug;

    const res = await fetch(`${useURI()}posts/?permalink=${slug},populate=author`);

    const data = await res.json();

    return { body: data };
}