<template>
	<div class="video-content" @click="enabled = true">
		<div class="video-content__cover" v-if="!enabled">
			<picture>
				<source :srcset="`https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`" type="image/webp"> 
				<img
					class="video-content__media"
					:src="`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`"
					alt="Cover of trailer"
				>
			</picture>
			
			<button class="video-content__button" aria-label="Play video">
				<svg class="video-content__logo" width="60" height="60" fill="#ffffff">
					<use xlink:href="@/assets/img/sprite.svg#logo"></use>
				</svg>
			</button>
		</div>
		
		<iframe
			v-else
			class="video-content__embed"
			:src="`https://www.youtube.com/embed/${id}?autoplay=1`"
			allow="autoplay">
		</iframe>
	</div>

</template>

<script>
	// import videoYoutube from '@/components/UI/video-content/video-youtube'
	export default {
		name: 'video-content',
		components: {
			// videoYoutube
		},
		props: {
			id: {
				type: String,
				default: ''
			},
		},
		data: () => ({
			enabled: false
		}),
	}
</script>

<style lang="scss">

	.video-content {
		position: relative;

		width: 100%;
		height: 315px;

		background-color: #000000;

		&:hover {
			.video-content__logo { fill: #E5261E; }
		}

		&__cover { cursor: pointer; }

		&__embed {
			width: 100%;
			height: 100%;
		}

		&__media {
			position: absolute;
			top: 0;
			left: 0;

			width: 100%;
			height: 100%;

			border: none;
		}

		&__button {
			position: absolute;
			top: 50%;
			left: 50%;

			width: 60px;
			height: 60px;

			transform: translate(-50%, -50%);

			&:focus {
				.video-content__logo { fill: #E5261E; }
			}
		}

		&__logo { transition: fill .1s; }
	}

</style>
