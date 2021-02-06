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

								<p class="content-info__tagline">
									<em>
										{{content.tagline}}
									</em>

									<favorite :content="content" @click="console.log(content.media_type)"/>
								</p>
						</div>
						<!-- /content-info__col -->

						<div class="content-info__col">
							<h4 class="content-info__title">Plot:</h4>

							<p class="content-info__info">
								{{content.overview}}
							</p>

							<p class="content-info__info">
								Genre:
								<span
									v-for="genre in content.genres"
									:key="genre.id"
								>
									&bull; {{genre.name}}
								</span>
							</p>

							<p class="content-info__info">
								Country:
								<span
									v-for="country in content.production_countries"
									:key="country.iso_3166_1"
								>
									{{country.iso_3166_1}}
								</span>
							</p>

							<p class="content-info__info">
								Language:
								<span
									v-for="lang in content.spoken_languages"
									:key="lang.iso_639_1"
								>
									{{lang.iso_639_1}}
								</span>
							</p>

							<p class="content-info__info">
								Year:
								{{
									content.release_date
									? content.release_date.slice(0,4)
									: content.first_air_date.slice(0,4)
								}}
							</p>

							<p class="content-info__info">
								TMDB: {{content.vote_average}}
							</p>

							<a class="content-info__site" :href="content.homepage" target="_blank">Watch now</a>

						</div>
						<!-- /content-info__col -->
					</div>
					<!-- /content-info__row -->

					<h4 class="content-info__title">Cast:</h4>

					<!-- Swiper connection -->
					<div v-swiper:creditsSwiper="swiperOption" class="swiper-container content-info__credits credits">
						<ul class="credits__list swiper-wrapper">
							<li
								v-for="person in content.credits.cast"
								:key="person.id"
								class="credits__item swiper-slide"
							>
								<img
									class="credits__image"
									:src="person.profile_path
										? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
										: require('@/assets/img/user.jpg')
									"
									:alt="person.name"
								>

								<span class="credits__name">{{person.name}}</span>
							</li>
						</ul>

						<div class="swiper-button-prev" slot="button-prev"></div>
				    <div class="swiper-button-next" slot="button-next"></div>
					</div>
					<!-- /swiper -->
				
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
	import favorite from '@/components/UI/favorite/favorite'

	export default {
		name: 'content-info',
		components: {
			modalFade,
			videoContent,
			favorite
		},
		props: {
			content: {
				type: Object,
				default: () => ({})
			}
		},
		data: () => ({
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 4,
        breakpoints: {
        	0: {
        		slidesPerGroup: 2,
        	},
        	400: {
        		slidesPerView: 3,
        		slidesPerGroup: 2,
        	},
        	640: {
        		slidesPerView: 4,
        		slidesPerGroup: 3,
        	},
        	1024: {
        		slidesPerView: 5,
        		slidesPerGroup: 4,
        	},
        	1200: {
        		slidesPerView: 7,
        	}
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
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
			this.creditsSwiper.slideTo(0, 1500, true)

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

<style lang="scss" scoped>

	.swiper-button-next,
	.swiper-button-prev {
		top: 40%;

		color: #fff !important;
	}

	.swiper-button-next {
		right: 0;
	}
	.swiper-button-prev {
		left: 0;
	}

	.favorite { position: static; }
	
</style>
