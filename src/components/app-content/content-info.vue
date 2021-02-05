<template>
	<modalFade>
		<section class="content-info" @click="contentInfo({})">
			<div
				class="content-info__wrapper"
				@click.stop
				:style="wrapper(content.backdrop_path)"
			>
				<div class="content-info__container">
				
					<h3 class="content-info__name">{{content.name || content.title}}</h3>

					<div class="content-info__row">

						<div class="content-info__col">

							<videoContent class="content-info__video-content" :id="videoId(content.videos.results)"/>

							<!-- <h4 class="content-info__title">Cast:</h4>

							<ul class="content-info__credits-list">
								<li
									v-for="person in content.credits.cast"
									:key="person.id"
									class="content-info__credits-item"
								>
									{{person.name}}
								</li>
							</ul> -->
						</div>
						<!-- /content-info__col -->

						<div class="content-info__col">
							<h4 class="content-info__title">Plot:</h4>

							<p class="content-info__overview">
								{{content.overview}}
							</p>

							<span class="content-info__rating">
								TMDB: {{content.vote_average}}
							</span>
						</div>
						<!-- /content-info__col -->
					</div>
					<!-- /content-info__row -->

				</div>
				<!-- /content-info__container -->
			</div>
			<!-- /content-info__wrapper -->
		</section>
	</modalFade>
</template>


<script>
	import {mapMutations} from 'vuex'
	import modalFade from '@/components/animations/modal-fade'
	import videoContent from '@/components/UI/video-content/video-content'
	export default {
		name: 'content-info',
		components: {
			modalFade,
			videoContent
		},
		props: {
			content: {
				type: Object,
				default: () => ({})
			}
		},
		data: () => ({
			wrapper: (path) => ({
				'backgroundImage': `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original/${path})`,
				'backgroundRepeat': 'no-repeat',
				'backgroundPosition': '0 0',
				'background-size': 'cover'
			})
		}),
		methods: {
			...mapMutations(['contentInfo']),

			videoId(videos) {
				return videos[0] ? videos[0].key : ''
			}
		},
		mounted() {
			console.log(this.content)
			document.body.addEventListener('keyup', e => {
				if (e.keyCode === 27) this.contentInfo({})
			})

			document.documentElement.style.overflow = 'hidden'
		},
		beforeDestroy() {
			document.body.removeEventListener('keyup', e => {
				if (e.keyCode === 27) this.contentInfo({})
			})

			document.documentElement.style.overflow = 'auto'
		}
	}
</script>

<style lang="scss">

	.content-info {
		position: fixed;
		top: 4%;
		left: 0;

		width: 100%;
		height: 100%;

		background-color: rgba(0,0,0,0.8);

		overflow-y: auto;
		overflow-x: hidden;

		color: #ffffff;
		
		&__wrapper {
			position: absolute;
			z-index: 900;
			top: 50%;
			left: 50%;

			width: 80%;
			padding: 50px 20px;

			transform: translate(-50%, -50%);
		}

		&__container {
			width: 90%;
			margin: 0 auto;
		}

		&__name {
			margin-bottom: 10px;

			font-size: 20px;
		}

		&__title {
			margin-bottom: 10px;

			font-size: 18px;
		}

		&__row {
			display: flex;
			justify-content: space-between;
		}

		&__col {
			// flex-grow: 0;
			width: 48%;
			display: flex;
			flex-direction: column;
		}

		&__col:nth-child(1) {
			width: 55%;
		}

		&__col:nth-child(2) {
			width: 40%;
		}
		
		// &__video-content {
		// 	width: 600px;
		// 	height: 300px;
		// }

		&__overview {
			margin-bottom: 10px;
		}
}

</style>
