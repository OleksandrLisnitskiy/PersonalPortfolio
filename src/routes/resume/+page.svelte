<script>
	import { data, title } from '@data/resume';
	import { onMount } from "svelte";
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	// Replace with your actual Google Drive file ID


	let textContent = "Loading...";
	const FILE_ID = "1562U9TPaRQL5-fJNxZUaKGnV-YOMncXu";
	const FILE_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

	onMount(async () => {
		try {
			const response = await fetch("/PersonalPortfolio/Oleksandr_Lisnytskyi_CV.pdf"); // Adjust path if needed
			textContent = await response.text();
		} catch (error) {
			textContent = "Error loading file.";
			console.error("Error fetching the text file:", error);
		}
	});
</script>

<CommonPage {title}>
	<div class="resume">
		<pre id="text-content">{textContent}</pre>
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>