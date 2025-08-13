<script lang="ts">
	const { alt, src, href } = $props();
</script>

<a {href} target="_blank">
	<img
		{src}
		{alt}
		class="h-auto w-10 object-contain transition-transform ease-in hover:-translate-y-1"
	/>
</a>
