<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<div class="resume-actions">
				<a href={data} download="Oleksandr_Lisnytskyi_CV_IT.pdf">
					<Chip size={'1.25em'}>Download CV</Chip>
				</a>
			</div>
			<div class="resume-embed">
				<iframe
					src={data}
					title="Resume"
					frameborder="0"
				></iframe>
			</div>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		margin-top: 20px;
		width: 100%;
	}

	.resume-actions {
		a {
			color: inherit;
		}
	}

	.resume-embed {
		width: 100%;
		max-width: 900px;

		iframe {
			width: 100%;
			height: 80vh;
			border-radius: 8px;
		}
	}
</style>
