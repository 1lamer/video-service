<template>
	<div class="video">
		<a :href="`https://youtu.be/${id}`" class="video__link" target="_blank">
			<picture>
				<source :srcset="`https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`" type="image/webp">
				<img class="video__media" :src="`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`" alt="">
			</picture>
		</a>
		<button class="video__button" aria-label="Play video">
			<svg class="video__logo" width="60" height="60" fill="#ffffff">
				<use xlink:href="@/assets/img/sprite.svg#logo"></use>
			</svg>
		</button>

		<!-- <iframe class="video__embed" width="560" height="315" :src="`https://www.youtube.com/embed/${id}`" frameborder="0"></iframe> -->
	</div>
</template>

<script>
	export default {
		name: 'video-youtube',
		props: {
			id: {
				type: String,
				default: ''
			}
		}
	}
</script>


<style lang="scss">
	.video {
		position: relative;

		&__media {
			position: absolute;
			top: 0;
			left: 0;

			width: 100%;
			height: 100%;

			border: none;
		}

		&__embed {}

		&__button {
			position: absolute;
			top: 50%;
			left: 50%;

			width: 60px;
			height: 60px;

			transform: translate(-50%, -50%);

			&:hover {
				.video__logo {
					fill: #E5261E;
				}
			}
		}

		&__logo {
			transition: fill .1s;
		}
	}
</style>
