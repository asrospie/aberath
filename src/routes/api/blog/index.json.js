import { useURI } from '$lib/util';
export async function get() {
    const res = await fetch(`${useURI()}posts`);
    const data = await res.json();

    return { body: data };
}