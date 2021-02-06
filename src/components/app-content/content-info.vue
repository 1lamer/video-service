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

						<div class="swiper-pagination"></div>

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
        slidesPerGroup: 3,
        breakpoints: {
        	480: {
        		slidesPerView: 3,
        	},
        	640: {
        		slidesPerView: 4,
        	},
        	1024: {
        		slidesPerView: 5,
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

	.content-info {
		position: fixed;
		top: 5%;
		left: 0;

		width: 100%;
		height: 100vh;

		background-color: rgba(0,0,0,0.8);

		overflow-y: auto;
		overflow-x: hidden;

		color: #ffffff;
		
		&__wrapper {
			position: absolute;
			z-index: 900;
			top: 0;
			left: 50%;

			width: 80%;
			padding: 50px 20px;

			transform: translateX(-50%);
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
			position: relative;

			display: flex;
			justify-content: space-between;
		}

		&__col {
			min-width: 0;
		}

		&__col:nth-child(1) {
			width: 55%;
		}

		&__col:nth-child(2) {
			width: 40%;
		}

		&__video-content { margin-bottom: 20px; }

		&__tagline {
			position: relative;

			display: flex;
			justify-content: space-between;
			align-items: center;

			margin-bottom: 20px;
		}

		&__info {
			display: block;

			margin-bottom: 20px;
		}

		&__site {
			position: relative;

			padding-right: 5%;

			color: #fff;

			&::after {
				content: '\27A4';

				position: absolute;
				top: 0;
				right: 0;

				transition: right .2s; 
			}

			&:hover, &:focus {
				&::after {
					right: -5%;
				}
			}
		}

		.credits {

			&__list {

			}

			&__item {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			&__image {
				min-width: 100px;
				width: 100px;
				height: 120px;

				border-radius: 50%;
			}

			&__name {
				font-size: 14px;
				text-align: center;
			}
		}
	}

	@media screen and (max-width: $desktopWidth) {
    .content-info {

    	&__container {
				width: 70%;
			}

			&__row {
				flex-direction: column;
				align-items: center;
			}

			&__col:nth-child(1),
			&__col:nth-child(2) { width: 100%; }

			&__site {
				display: inline-block;

				margin-bottom: 20px;
			}

			.credits {

				&__list {

				}

				&__item {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				&__image {
					min-width: 100px;
					width: 100px;
					height: 120px;

					border-radius: 50%;
				}

				&__name {
					font-size: 14px;
				}
			}
  }

  @media screen and (max-width: $smDesktopWidth) {
    .content-info {

	  	&__container {
				width: 80%;
			}
		}
  }

  @media screen and (max-width: $tableWidth) {
    .content-info {

	  	&__container {
				width: 100%;
			}
		}
  }

  @media screen and (max-width: $smTableWidth) {
    .content-info {

	  	&__video-content { max-height: 260px; }

	  	&__site {
				&::after { right: -10%; } 

				&:hover, &:focus {
					&::after { right: -15%; }
				}
			}
		}
  }

  @media screen and (max-width: $phoneWidth) {
    .content-info {

	  	&__video-content { max-height: 150px; }
		}
  }
}

</style>
